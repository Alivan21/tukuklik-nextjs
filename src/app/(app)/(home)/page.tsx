import { Fragment } from "react";
import { getCategoryList } from "@/services/home/categories";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import CategoryCard from "./components/CategoryCard";
import HomeBanner from "./components/HomeBanner";
import ProductBox from "./components/ProductBox";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["category"],
    queryFn: getCategoryList,
  });

  return (
    <Fragment>
      <HomeBanner />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CategoryCard />
      </HydrationBoundary>
      <ProductBox />
    </Fragment>
  );
}
