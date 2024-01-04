"use client";

import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthContext } from "@/contexts/AuthContext";
import { useSignIn } from "@/services/auth/login";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

function LoginForm() {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "" });

  useEffect(() => {
    const userCookies = Cookies.get("token");
    if (userCookies) {
      router.replace("/");
    }
  }, [router, user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const { mutateAsync: SignInMutation, isPending } = useSignIn(form);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      toast.promise(SignInMutation(), {
        loading: "Loading...",
        success: "Login Success",
        error: "Email atau Password salah",
      });
    } catch (error) {
      toast.error("Email atau Password salah");
    }
  }

  return (
    <form className="flex max-w-md flex-col space-y-5" onSubmit={handleSubmit}>
      <div className="inline-flex flex-col gap-2">
        <Label className="text-lg font-bold" htmlFor="email">
          Email
        </Label>
        <Input
          autoComplete="email"
          className="flex rounded-lg border-2 border-black font-medium placeholder:font-normal"
          id="email"
          name="email"
          onChange={handleChange}
          placeholder="email"
          type="email"
          value={form.email}
        />
      </div>
      <div className="inline-flex flex-col gap-2">
        <Label className="text-lg font-bold" htmlFor="password">
          Password
        </Label>
        <Input
          className="flex rounded-lg border-2 border-black font-medium placeholder:font-normal"
          id="password"
          name="password"
          onChange={handleChange}
          placeholder="********"
          type="password"
          value={form.password}
        />
      </div>
      <Button
        className="bg-red-600 px-3 py-2 text-base font-bold hover:bg-red-700 md:px-4 md:py-3"
        disabled={isPending}
        type="submit"
      >
        Login
      </Button>
      <div>
        <span className="text-base">Don&apos;t have an account? </span>
        <Link className="font-medium text-red-600 underline underline-offset-2" href="/register">
          Register
        </Link>
      </div>
    </form>
  );
}
export default LoginForm;
