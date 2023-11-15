import Image from "next/image";
import Link from "next/link";
import Iphone from "@/assets/iphone.png";

function ShopCategoryCard() {
  return (
    <div className="inline-flex items-center gap-6 border-2 p-2 hover:border-red-500">
      <Image
        alt="iphone"
        className="h-32 w-32"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={Iphone}
      />
      <div className="flex flex-col gap-5">
        <h1 className="text-lg font-medium">Computer & Technology</h1>
        <div className="flex flex-col gap-2">
          <Link className="group inline-block w-fit text-sm text-gray-700 transition duration-300" href="/shop">
            PC
            <span className="block h-[0.06rem] max-w-0 bg-gray-900 transition-all duration-500 group-hover:max-w-full" />
          </Link>
          <Link className="group inline-block w-fit text-sm text-gray-700 transition duration-300" href="/shop">
            Laptop
            <span className="block h-[0.06rem] max-w-0 bg-gray-900 transition-all duration-500 group-hover:max-w-full" />
          </Link>
          <Link className="group inline-block w-fit text-sm text-gray-700 transition duration-300" href="/shop">
            Smartphones
            <span className="block h-[0.80px] max-w-0 bg-gray-900 transition-all duration-500 group-hover:max-w-full" />
          </Link>
          <Link className="group inline-block w-fit text-sm text-gray-700 transition duration-300" href="/shop">
            Drive & Storage
            <span className="block h-[0.80px] max-w-0 bg-gray-900 transition-all duration-500 group-hover:max-w-full" />
          </Link>
          <Link className="group inline-block w-fit text-sm text-gray-700 transition duration-300" href="/shop">
            Accessories
            <span className="block h-[0.80px] max-w-0 bg-gray-900 transition-all duration-500 group-hover:max-w-full" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ShopCategoryCard;
