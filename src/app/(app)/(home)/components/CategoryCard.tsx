"use client";

import Image from "next/image";
import Link from "next/link";
import Iphone from "@/assets/iphone.png";
import { getCategoryList } from "@/services/home/categories";
import { useQuery } from "@tanstack/react-query";

function CategoryCard() {
  const { data } = useQuery({
    queryKey: ["category"],
    queryFn: getCategoryList,
  });

  return (
    <section className="flex flex-col gap-6 rounded-sm bg-white p-8">
      <h1 className="text-lg font-semibold">Kategori</h1>
      <hr />
      <div className="grid max-h-[32rem] w-full grid-cols-3 gap-2 overflow-auto md:grid-cols-5 lg:grid-cols-6">
        {data?.map((category, index) => {
          return (
            <Link
              className="group inline-flex flex-col items-center gap-3 rounded-sm border px-2 pb-2"
              href={`/shop?=${category.slug}`}
              key={index}
            >
              <Image
                alt="iphone"
                className="h-full w-auto transition duration-500 group-hover:scale-110"
                priority
                src={Iphone}
              />
              <span className="line-clamp-1 text-center">{category.name}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
export default CategoryCard;
