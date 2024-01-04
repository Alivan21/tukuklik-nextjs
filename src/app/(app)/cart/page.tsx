import { Button } from "@/components/ui/button";
import { formatToIDR } from "@/lib/currency-formater";
import ProductCart from "./components/ProductCart";

function Cart() {
  return (
    <section className="flex flex-col gap-3 overflow-auto">
      <div className="mb-2 inline-flex">
        <div className="w-[67.5rem] shrink-0 grow">
          <div className="grid grid-cols-12 gap-5 rounded-sm bg-white px-12 py-4 text-gray-500">
            <span className="col-span-4 me-auto whitespace-nowrap text-gray-900">Produk</span>
            <span className="col-span-2 whitespace-nowrap text-center">Harga Satuan</span>
            <span className="col-span-2 whitespace-nowrap text-center">Kuantitas</span>
            <span className="col-span-2 whitespace-nowrap text-center">Total Harga</span>
            <span className="col-span-2 whitespace-nowrap text-center">Aksi</span>
          </div>
        </div>
      </div>
      <ProductCart />
      <ProductCart />
      <ProductCart />
      <div className="mb-2 inline-flex">
        <div className="w-[67.5rem] shrink-0 grow">
          <div className="flex flex-col items-end justify-end gap-3 bg-white px-12 py-4">
            <span>
              Total (3 Produk): <span className="font-medium text-red-600">{formatToIDR(19379000 * 3)}</span>
            </span>
            <Button className="rounded-sm bg-red-600 px-12 py-2 font-semibold text-white hover:bg-red-700">
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Cart;
