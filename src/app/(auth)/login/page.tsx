import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import LoginForm from "./components/LoginForm";

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
        <LoginForm />
      </div>
    </div>
  );
}
export default LoginPage;
