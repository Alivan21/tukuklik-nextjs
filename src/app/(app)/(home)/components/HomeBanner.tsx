import Image from "next/image";
import Link from "next/link";
import Hero from "@/assets/promotion/hero.jpg";
import Promotion1 from "@/assets/promotion/promotion-1.jpg";
import Promotion2 from "@/assets/promotion/promotion-2.jpg";
import Promotion3 from "@/assets/promotion/promotion-3.jpg";
import Promotion4 from "@/assets/promotion/promotion-4.jpg";
import Promotion5 from "@/assets/promotion/promotion-5.jpg";
import Promotion6 from "@/assets/promotion/promotion-6.jpg";
import { getCategoryList } from "@/services/home/categories";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import CategoryBanner from "./CategoryBanner";

async function HomeBanner() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["category"],
    queryFn: getCategoryList,
  });

  return (
    <section className="grid max-h-[40rem] w-full grid-cols-12 grid-rows-2 lg:grid-rows-3">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CategoryBanner />
      </HydrationBoundary>
      <div className="col-span-12 row-span-2 bg-white lg:col-span-5 lg:row-span-2">
        <Link href="/">
          <Image alt="iphone" className="h-full w-full bg-cover bg-center" height={640} priority src={Hero} />
        </Link>
      </div>
      <div className="col-span-12 hidden lg:col-span-2 lg:block">
        <Link href="/">
          <Image alt="iphone" className="h-full w-full bg-cover bg-center" height={640} priority src={Promotion1} />
        </Link>
      </div>
      <div className="col-span-6 hidden lg:col-span-2 lg:block">
        <Link href="/">
          <Image alt="iphone" className="h-full w-full bg-cover bg-center" height={640} priority src={Promotion2} />
        </Link>
      </div>
      <div className="col-span-12 row-span-1 lg:col-span-4">
        <Link href="/">
          <Image alt="iphone" className="h-full w-full bg-cover bg-center" height={640} priority src={Promotion3} />
        </Link>
      </div>
      <div className="col-span-12 row-span-1 lg:col-span-5">
        <Link href="/">
          <Image alt="iphone" className="h-full w-full bg-cover bg-center" height={640} priority src={Promotion6} />
        </Link>
      </div>
      <div className="col-span-6 lg:col-span-2">
        <Link href="/">
          <Image alt="iphone" className="h-full w-full bg-cover bg-center" height={640} priority src={Promotion4} />
        </Link>
      </div>
      <div className="col-span-6 lg:col-span-2">
        <Link href="/">
          <Image alt="iphone" className="h-full w-full bg-cover bg-center" height={640} priority src={Promotion5} />
        </Link>
      </div>
    </section>
  );
}
export default HomeBanner;
