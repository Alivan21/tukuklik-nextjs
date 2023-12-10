import { Fragment } from "react";
import HomeBanner from "./components/HomeBanner";
import ProductBox from "./components/ProductBox";
import SearchTrending from "./components/SearchTrending";

export default function Home() {
  return (
    <Fragment>
      <HomeBanner />
      <SearchTrending />
      <ProductBox />
    </Fragment>
  );
}
