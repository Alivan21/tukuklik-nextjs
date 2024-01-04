import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import { getCategoryList } from "@/services/home/categories";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import SearchBar from "./SearchBar";

const ActionBar = dynamic(() => import("./ActionBar"), { ssr: false });

async function Navbar() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["category"],
    queryFn: getCategoryList,
  });

  return (
    <nav className="container flex flex-col items-center gap-6 bg-white p-8 sm:flex-row md:px-8">
      <div className="my-auto flex w-full justify-between md:w-auto md:gap-0">
        <Link href="/">
          <Image alt="logo" className="h-8 w-[11rem] md:w-[16rem] xl:h-9" height={38} priority src={Logo} />
        </Link>
        <div className="mt-3 flex items-center justify-center gap-6 md:hidden">
          <ActionBar />
        </div>
      </div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <SearchBar />
      </HydrationBoundary>
      <div className="hidden flex-1 items-center justify-center gap-6 lg:flex">
        <ActionBar />
      </div>
    </nav>
  );
}
export default Navbar;
