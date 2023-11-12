import Iphone from "@/assets/iphone.png";
import Image from "next/image";
import Link from "next/link";

function RecomendCard() {
  return (
    <div className="flex items-center gap-10">
      <Link href="#">
        <Image alt="iphone" height={72} src={Iphone} />
      </Link>
      <div className="flex flex-col gap-2">
        <Link className="font-medium text-blue-600 hover:text-red-600" href="#">
          Iphone 12 Pro Max
        </Link>
        <p className="text-gray-700">Rp 18.000.000</p>
      </div>
    </div>
  );
}
export default RecomendCard;
