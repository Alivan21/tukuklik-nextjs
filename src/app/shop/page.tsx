import ShopCategoryCard from "@/components/card/ShopCategoryCard";
import SingleCarousel from "@/components/carousel/SingleCarousel";
import CategoryCard from "./components/CategoryCard";
import ShopSection from "./components/shopping/ShopSection";
import SortBrandCard from "./components/SortBrandCard";
import SortPriceCard from "./components/SortPriceCard";

function Shop() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auhref=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auhref=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auhref=format&fit=crop&w=2672&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auhref=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auhref=format&fit=crop&w=2671&q=80",
    },
  ];

  return (
    <div className="flex flex-col gap-16 px-4 py-6 lg:container sm:px-8 sm:py-12">
      <section className="flex flex-col gap-8 bg-white p-2">
        <SingleCarousel images={slides} navigation />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ShopCategoryCard />
          <ShopCategoryCard />
          <ShopCategoryCard />
        </div>
      </section>
      <section className="grid grid-cols-12 gap-6 bg-white p-3">
        <aside className="col-span-3 hidden flex-col gap-5 lg:flex">
          <CategoryCard />
          <SortBrandCard />
          <SortPriceCard />
        </aside>
        <div className="col-span-12 flex flex-col lg:col-span-9">
          <ShopSection />
        </div>
      </section>
    </div>
  );
}
export default Shop;
