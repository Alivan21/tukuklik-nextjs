import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen">
      <div className="flex w-full flex-row">
        {/* Sidebar */}
        <div className="hidden flex-col justify-between bg-gray-100 lg:flex lg:max-w-sm lg:p-8 xl:max-w-lg xl:p-12">
          <div className="flex items-center justify-start space-x-3">
            <Link href="/">
              <Image alt="logo" className="h-10 w-auto" height={192} src={Logo} width={192} />
            </Link>
          </div>
          <div className="space-y-5">
            <Image alt="logo" className="h-auto w-auto" height={640} priority src="/auth.png" width={640} />
          </div>
          <p className="font-medium">© 2023 TukuKlik</p>
        </div>
        {children}
      </div>
    </main>
  );
}
export default AuthLayout;
