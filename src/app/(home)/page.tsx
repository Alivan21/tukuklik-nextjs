import Iphone from "@/assets/iphone.png";
import { Microwave, MonitorSmartphone, Shirt, Smartphone, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container flex min-h-screen flex-col gap-16 py-8 sm:p-16">
      <section className="grid w-full grid-cols-12 grid-rows-4">
        <div className="col-span-12 row-span-4 hidden border border-gray-400 bg-gray-200 p-32 sm:col-span-3 sm:block" />
        <div className="col-span-12 row-span-2 border border-gray-400 bg-gray-200 p-16 sm:col-span-5 sm:row-span-3" />
        <div className="col-span-12 border border-gray-400 bg-gray-200 p-16 sm:col-span-2" />
        <div className="col-span-6 border border-gray-400 bg-gray-200 p-16 sm:col-span-2" />
        <div className="col-span-6 row-span-2 border border-gray-400 bg-gray-200 p-16 sm:col-span-4" />
        <div className="col-span-12 row-span-1 border border-gray-400 bg-gray-200 p-16 sm:col-span-5" />
        <div className="col-span-6 border border-gray-400 bg-gray-200 p-16 sm:col-span-2" />
        <div className="col-span-6 border border-gray-400 bg-gray-200 p-16 sm:col-span-2" />
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
                <Star className="text-red-600" size={40} strokeWidth={1} />
                <span className="text-red-600">Hot Trending</span>
              </button>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(element => {
                return (
                  <button
                    className="inline-flex min-w-fit flex-col items-center gap-1 text-gray-800 hover:text-red-600 hover:underline hover:decoration-red-500 hover:underline-offset-[14px]"
                    key={element}
                  >
                    <Smartphone size={40} strokeWidth={1} />
                    <span>Smartphones</span>
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

      <section className="flex flex-col gap-7 rounded-sm bg-white p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Microwave size={30} strokeWidth={1} />
            <h1 className="text-lg font-medium">Consumer Electronic</h1>
          </div>
          <div className="flex flex-wrap gap-2">
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
        <div className="grid w-full grid-cols-12 grid-rows-3">
          <div className="col-span-12 row-span-2 border border-gray-400 bg-gray-200 p-16 sm:col-span-9 sm:row-span-1" />
          <div className="col-span-12 row-span-2 border border-gray-400 bg-gray-200 p-16 sm:col-span-3 sm:row-span-3" />
          <div className="col-span-12 row-span-2 border border-gray-400 bg-gray-200 p-16 sm:col-span-9 sm:row-span-2" />
        </div>
      </section>

      <section className="flex flex-col gap-7 rounded-sm bg-white p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <MonitorSmartphone size={30} strokeWidth={1} />
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
        <div className="grid w-full grid-cols-12 grid-rows-3">
          <div className="col-span-12 row-span-2 border border-gray-400 bg-gray-200 p-16 sm:col-span-9 sm:row-span-1" />
          <div className="col-span-12 row-span-2 border border-gray-400 bg-gray-200 p-16 sm:col-span-3 sm:row-span-3" />
          <div className="col-span-12 row-span-2 border border-gray-400 bg-gray-200 p-16 sm:col-span-9 sm:row-span-2" />
        </div>
      </section>

      <section className="flex flex-col gap-7 rounded-sm bg-white p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Shirt size={30} strokeWidth={1} />
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
        <div className="grid w-full grid-cols-12 grid-rows-3">
          <div className="col-span-12 row-span-2 border border-gray-400 bg-gray-200 p-16 sm:col-span-9 sm:row-span-1" />
          <div className="col-span-12 row-span-2 border border-gray-400 bg-gray-200 p-16 sm:col-span-3 sm:row-span-3" />
          <div className="col-span-12 row-span-2 border border-gray-400 bg-gray-200 p-16 sm:col-span-9 sm:row-span-2" />
        </div>
      </section>
    </div>
  );
}
