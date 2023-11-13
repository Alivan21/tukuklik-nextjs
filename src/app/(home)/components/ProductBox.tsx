import Link from "next/link";
import ProductCard from "@/components/card/ProductCard";
import RecomendCard from "@/components/card/RecomendCard";
import SingleCarousel from "@/components/carousel/SingleCarousel";
import Icon from "@/components/Icon";

function ProductBox() {
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
      <div className="grid h-1/2 grid-cols-12 xl:grid-rows-2">
        <div className="col-span-12 border-t pr-2 pt-2 sm:col-span-9">
          <SingleCarousel images={slides} />
        </div>
        <div className="col-span-12 row-span-2 border-t py-4 sm:col-span-3 md:border-l md:p-4">
          <h2 className="border-b pb-3">Recomended For You</h2>
          <div className="flex flex-col gap-8 pb-2 pt-5">
            <RecomendCard />
            <RecomendCard />
          </div>
        </div>
        <div className="col-span-12 flex flex-col gap-6 sm:col-span-9">
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
          <div className="mr-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProductBox;
