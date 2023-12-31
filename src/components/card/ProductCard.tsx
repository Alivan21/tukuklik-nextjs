import Link from "next/link";
import Icon from "@/components/Icon";
import { Button } from "@/components/ui/button";

function ProductCard() {
  return (
    <div className="group relative m-auto h-96 w-full rounded-sm border">
      <Link href="/product/1">
        <div
          className="h-2/3 w-full bg-cover bg-center duration-300"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80')`,
          }}
        />
      </Link>
      <div className="absolute top-[56.5%] hidden w-full bg-gray-100 bg-opacity-[0.7] group-hover:grid group-hover:grid-cols-1">
        <Button className="rounded-none bg-yellow-500 bg-opacity-[0.8] hover:bg-yellow-500 hover:bg-opacity-[1]">
          <Icon name="shopping-cart" size={20} strokeWidth={2.5} />
        </Button>
      </div>
      <div className="flex flex-col gap-2.5 p-4">
        <Link href="/product/1">
          <h3 className="font-medium tracking-tight text-blue-600 hover:text-red-600">Starlight Sport</h3>
        </Link>
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
          <span className="mx-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800">5.0</span>
        </div>
        <span className="font-medium text-gray-900">$599</span>
      </div>
    </div>
  );
}
export default ProductCard;
