import Iphone from "@/assets/iphone.png";
import Hero from "@/assets/promotion/hero.jpg";
import Promotion1 from "@/assets/promotion/promotion-1.jpg";
import Promotion2 from "@/assets/promotion/promotion-2.jpg";
import Promotion3 from "@/assets/promotion/promotion-3.jpg";
import Promotion4 from "@/assets/promotion/promotion-4.jpg";
import Promotion5 from "@/assets/promotion/promotion-5.jpg";
import Promotion6 from "@/assets/promotion/promotion-6.jpg";
import SingleCarousel from "@/components/carousel/SingleCarousel";
import Icon from "@/components/Icon";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  return (
    <div className="container mt-40 flex min-h-screen flex-col gap-16 py-8 sm:p-16 md:mt-24">
      <section className="grid w-full grid-cols-12 grid-rows-2 lg:grid-rows-3">
        <div className="col-span-12 row-span-3 hidden rounded-sm bg-white sm:flex sm:flex-col sm:gap-2 lg:col-span-3">
          <Link className="flex items-center gap-2 p-2 hover:bg-red-500" href="/">
            <Icon name="star" size={25} strokeWidth={1} />
            <h1 className="text-sm">Hot Trending</h1>
          </Link>
          <Link className="flex items-center gap-2 p-2 hover:bg-red-500" href="/">
            <Icon name="microwave" size={25} strokeWidth={1} />
            <h1 className="text-sm">Consumer Electronic</h1>
          </Link>
          <Link className="flex items-center gap-2 p-2 hover:bg-red-500" href="/">
            <Icon name="monitor-smartphone" size={25} strokeWidth={1} />
            <h1 className="text-sm">Computer & Technology</h1>
          </Link>
          <Link className="flex items-center gap-2 p-2 hover:bg-red-500" href="/">
            <Icon name="shirt" size={25} strokeWidth={1} />
            <h1 className="text-sm">Clothings & Apparel</h1>
          </Link>
          <Link className="flex items-center gap-2 p-2 hover:bg-red-500" href="/">
            <Icon name="lamp-desk" size={25} strokeWidth={1} />
            <h1 className="text-sm">Home, Garden & Kitchen</h1>
          </Link>
        </div>
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

      <section className="flex flex-col gap-4">
        <div className="flex gap-2">
          <h1 className="font-semibold">Search Trending</h1>
          <span className="font-light text-gray-600">Updated at 9:00AM</span>
        </div>
        <div className="flex flex-col gap-8 rounded-sm bg-white p-8">
          <div className="overflow-auto xl:overflow-hidden">
            <div className="flex gap-7 border-b pb-2">
              <button className="inline-flex min-w-fit flex-col items-center gap-1 underline decoration-red-500 underline-offset-[14px]">
                <Icon name="star" size={38} strokeWidth={1} />
                <span className="text-sm text-red-600 lg:text-base">Hot Trending</span>
              </button>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(element => {
                return (
                  <button
                    className="inline-flex min-w-fit flex-col items-center gap-1 text-gray-800 hover:text-red-600 hover:underline hover:decoration-red-500 hover:underline-offset-[14px]"
                    key={element}
                  >
                    <Icon name="smartphone" size={38} strokeWidth={1} />
                    <span className="text-sm lg:text-base">Smartphones</span>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="grid w-full grid-cols-3 gap-6 md:grid-cols-5 lg:grid-cols-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(element => {
              return (
                <Link className="group inline-flex flex-col items-center gap-3" href="/" key={element}>
                  <Image
                    alt="iphone"
                    className="h-auto w-auto transition duration-500 group-hover:scale-110"
                    height={128}
                    priority
                    src={Iphone}
                  />
                  <span>#iphone</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4 rounded-sm bg-white p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Icon name="microwave" size={30} strokeWidth={1} />
            <h1 className="text-lg font-medium">Consumer Electronic</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link className="min-w-fit text-sm text-gray-700 hover:text-red-500" href="/">
              TV Televisions
            </Link>
            <Link className="min-w-fit text-sm text-gray-700 hover:text-red-600" href="/">
              Air Conditioner
            </Link>
            <Link className="min-w-fit text-sm text-gray-700 hover:text-red-600" href="/">
              Washing Machine
            </Link>
            <Link className="min-w-fit text-sm text-gray-700 hover:text-red-600" href="/">
              Refigerator
            </Link>
            <Link className="min-w-fit text-sm text-gray-700 hover:text-red-600" href="/">
              Microwave
            </Link>
          </div>
        </div>
        <div className="grid h-1/2 grid-cols-12 grid-rows-2">
          <div className="col-span-12 row-span-2 border-t pr-2 pt-2 sm:col-span-9 sm:row-span-1">
            <SingleCarousel images={slides} />
          </div>
          <div className="col-span-12 row-span-2 border-l border-t p-4 sm:col-span-3 sm:row-span-2">
            <h2 className="border-b pb-3">Recomended For You</h2>
          </div>
          <div className="col-span-12 row-span-2 sm:col-span-9 sm:row-span-1">
            <ul className="flex max-w-4xl gap-6 border-b py-4">
              <li>
                <Link className="border-b-2 border-red-600 pb-4 text-sm font-semibold text-red-600" href="/">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link className="text-sm hover:text-red-600" href="/">
                  Best Seller
                </Link>
              </li>
              <li>
                <Link className="text-sm hover:text-red-600" href="/">
                  Sale
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-7 rounded-sm bg-white p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Icon name="monitor-smartphone" size={30} strokeWidth={1} />
            <h1 className="text-lg font-medium">Computer & Technology</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link className="min-w-fit text-sm text-gray-700 hover:text-red-500" href="/">
              PC
            </Link>
            <Link className="min-w-fit text-sm text-gray-700 hover:text-red-600" href="/">
              Laptop
            </Link>
            <Link className="min-w-fit text-sm text-gray-700 hover:text-red-600" href="/">
              Smartphones
            </Link>
            <Link className="min-w-fit text-sm text-gray-700 hover:text-red-600" href="/">
              Drive & Storage
            </Link>
            <Link className="min-w-fit text-sm text-gray-700 hover:text-red-600" href="/">
              Accessories
            </Link>
          </div>
        </div>
        <div className="grid h-1/2 grid-cols-12 grid-rows-2">
          <div className="col-span-12 row-span-2 border sm:col-span-9 sm:row-span-1">
            <SingleCarousel images={slides} />
          </div>
          <div className="col-span-12 row-span-2 border border-gray-400 bg-gray-200 p-16 sm:col-span-3 sm:row-span-2" />
          <div className="col-span-12 row-span-2 border border-gray-400 bg-gray-200 p-16 sm:col-span-9 sm:row-span-1" />
        </div>
      </section>

      <section className="flex flex-col gap-7 rounded-sm bg-white p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Icon name="shirt" size={30} strokeWidth={1} />
            <h1 className="text-lg font-medium">Clothings & Apparel</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link className="min-w-fit text-sm text-gray-700 hover:text-red-500" href="/">
              Men
            </Link>
            <Link className="min-w-fit text-sm text-gray-700 hover:text-red-600" href="/">
              Woman
            </Link>
            <Link className="min-w-fit text-sm text-gray-700 hover:text-red-600" href="/">
              Boy
            </Link>
            <Link className="min-w-fit text-sm text-gray-700 hover:text-red-600" href="/">
              Girl
            </Link>
            <Link className="min-w-fit text-sm text-gray-700 hover:text-red-600" href="/">
              Accessories
            </Link>
          </div>
        </div>
        <div className="grid h-1/2 grid-cols-12 grid-rows-2">
          <div className="col-span-12 row-span-2 border sm:col-span-9 sm:row-span-1">
            <SingleCarousel images={slides} />
          </div>
          <div className="col-span-12 row-span-2 border border-gray-400 bg-gray-200 p-16 sm:col-span-3 sm:row-span-2" />
          <div className="col-span-12 row-span-2 border border-gray-400 bg-gray-200 p-16 sm:col-span-9 sm:row-span-1" />
        </div>
      </section>
    </div>
  );
}
