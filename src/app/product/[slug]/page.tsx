import Breadcrumb from "./components/Breadcrumb";
import ProductDetail from "./components/ProductDetail";

function ProductPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <Breadcrumb />
      <ProductDetail />
    </>
  );
}
export default ProductPage;
