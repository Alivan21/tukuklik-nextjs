import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import QuantityButton from "./ui/QuantityButton";

function ProductDetail() {
  return (
    <section className="grid auto-cols-auto grid-flow-col gap-10 rounded-sm bg-white p-4">
      <aside className="mr-8 flex flex-col gap-0">
        <div className="mb-0 border p-14">Image Highlight</div>
        <div className="grid grid-cols-4">
          <span className="border p-6">1</span>
          <span className="border p-6">2</span>
          <span className="border p-6">3</span>
          <span className="border p-6">4</span>
        </div>
      </aside>
      <div className="flex max-w-xl flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <div className="flex gap-4 border-b pb-2">
            <span>
              By{" "}
              <Link className="text-red-500 hover:text-red-600" href="#">
                ABC Company
              </Link>{" "}
              |
            </span>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map(star => (
                <svg
                  className="h-5 w-5 text-yellow-300"
                  fill="currentColor"
                  key={star}
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="my-auto text-sm text-gray-600">(1 review)</span>
          </div>
        </div>
        <h2 className="text-3xl font-semibold">Rp 15.000.000</h2>
        <div className="inline-flex flex-col gap-8">
          <ul className="list-inside list-disc space-y-2 text-gray-600">
            <li>Unrestrained and portable active stereo speaker</li>
            <li>Free from the confines of wires and chords</li>
            <li>20 hours of portable capabilities</li>
            <li>Double-ended Coil Cord with 3.5mm Stereo Plugs Included</li>
            <li>3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
          </ul>
        </div>
      </div>
      <aside className="flex max-w-xs flex-col gap-4 rounded-sm border p-4">
        <h3 className="font-semibold">Atur jumlah dan total</h3>
        <div className="flex items-center gap-3">
          <Image alt="produk" height={32} src="/images/placeholder.png" width={32} />
          <span>Produk 1</span>
        </div>
        <Separator />
        <div className="flex gap-2">
          <QuantityButton />
          <span className="my-auto">Stok: 10</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-semibold">Rp 15.000.000</span>
        </div>
        <button className="rounded-sm bg-red-500 py-2 font-semibold text-white hover:bg-red-600">
          <span>+</span> ke Keranjang
        </button>
        <button className="rounded-sm bg-gray-200 py-2 font-semibold text-gray-700 hover:bg-gray-300">Beli</button>
      </aside>
    </section>
  );
}
export default ProductDetail;
