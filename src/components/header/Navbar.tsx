import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import ActionBar from "./ActionBar";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <nav className="container mx-auto flex flex-col items-center gap-6 bg-white p-8 sm:flex-row md:px-16">
      <div className="my-auto flex w-full justify-between md:w-auto md:gap-0">
        <Link href="/">
          <Image alt="logo" height={38} priority src={Logo} />
        </Link>
        <div className="mt-3 flex items-center justify-center gap-6 md:hidden">
          <ActionBar />
        </div>
      </div>
      <SearchBar />
      <div className="hidden flex-1 items-center justify-center gap-6 lg:flex">
        <ActionBar />
      </div>
    </nav>
  );
}
export default Navbar;
