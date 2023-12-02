import ProductCard from "@/components/card/ProductCard";
import Pagination from "@/components/Pagination";
import SelectSort from "./SelectSort";

function ShopSection() {
  const card = 20;
  const productCards = [];
  for (let i = 0; i < card; i++) {
    productCards.push(<ProductCard key={i} />);
  }

  return (
    <section className="flex flex-col gap-3">
      <div className="flex w-full items-center justify-between rounded-sm bg-gray-100 px-3 py-2">
        <p className="flex gap-1.5 text-sm text-gray-500">
          <span className="font-semibold text-gray-900">85</span>
          Products found
        </p>
        <SelectSort />
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">{productCards}</div>
      <Pagination />
    </section>
  );
}
export default ShopSection;
