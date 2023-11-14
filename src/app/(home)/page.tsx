import HomeBanner from "./components/HomeBanner";
import ProductBox from "./components/ProductBox";
import SearchTrending from "./components/SearchTrending";

export default function Home() {
  return (
    <div className="container flex flex-col gap-16 py-8 sm:px-8 sm:py-12">
      <HomeBanner />
      <SearchTrending />
      <ProductBox />
      <ProductBox />
      <ProductBox />
      {/* <section className="flex flex-col gap-7 rounded-sm bg-white p-8">
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
      </section> */}
    </div>
  );
}
