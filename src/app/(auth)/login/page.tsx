import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function LoginPage() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center px-10">
      <div className="mb-6 flex w-full items-center justify-center py-4 lg:hidden">
        <Link href="/">
          <Image alt="logo" className="h-9 w-auto" height={192} src={Logo} width={192} />
        </Link>
      </div>
      {/* Login box */}
      <div className="inline-flex max-w-lg flex-col justify-center space-y-5">
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl font-bold md:text-3xl">Sign in</h2>
          <p className="text-base md:text-lg">Selamat Datang Kembali, Silakan masukkan detail Anda.</p>
        </div>
        <form className="flex max-w-md flex-col space-y-5">
          <div className="inline-flex flex-col gap-2">
            <Label className="text-lg font-bold" htmlFor="username">
              Username
            </Label>
            <Input
              autoComplete="username"
              className="flex rounded-lg border-2 border-black font-medium placeholder:font-normal"
              id="username"
              name="username"
              placeholder="Username"
              type="text"
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
              placeholder="********"
              type="password"
            />
          </div>
          <Button className="bg-red-600 px-3 py-2 text-base font-bold hover:bg-red-700 md:px-4 md:py-3" type="submit">
            Login
          </Button>
          <div>
            <span className="text-base">Don&apos;t have an account? </span>
            <Link className="font-medium text-red-600 underline underline-offset-2" href="/register">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default LoginPage;
