import Image from "next/image";
import Link from "next/link";
import Iphone from "@/assets/iphone.png";
import Icon from "@/components/Icon";

function SearchTrending() {
  return (
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
  );
}
export default SearchTrending;
