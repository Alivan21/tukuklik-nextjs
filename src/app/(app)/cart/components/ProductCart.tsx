import Image from "next/image";
import QuantityButton from "@/components/QuantityButton";

function ProductCart() {
  return (
    <div className="inline-flex">
      <div className="shrink-0 grow">
        <div className="grid grid-cols-12 items-center gap-5 rounded-sm bg-white px-12 py-4 text-base text-gray-500">
          <div className="col-span-4 me-auto flex items-center gap-2.5 whitespace-nowrap">
            <Image alt="produk" height={128} src="/samsung.jpg" width={128} />
            <span className="line-clamp-2 max-w-sm text-gray-900">Samsung S23 Ultra 5G</span>
          </div>
          <span className="col-span-2 whitespace-nowrap text-center text-gray-900">Rp19.379.000</span>
          <div className="col-span-2 mx-auto flex flex-col items-center justify-center gap-2 whitespace-nowrap">
            <QuantityButton />
            <span className="text-sm text-red-600">Tersisa 4 buah</span>
          </div>
          <span className="col-span-2 whitespace-nowrap text-center text-red-600">Rp19.379.000</span>
          <div className="col-span-2 flex justify-center whitespace-nowrap">
            <button className="text-gray-900 hover:text-red-600">Hapus</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductCart;
