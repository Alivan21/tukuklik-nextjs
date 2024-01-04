"use client";

import Link from "next/link";
import { getCategoryList } from "@/services/home/categories";
import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";

function CategoryBanner() {
  const { data } = useQuery({
    queryKey: ["category"],
    queryFn: getCategoryList,
  });
  return (
    <div className="col-span-12 row-span-3 hidden overflow-auto rounded-sm bg-white sm:flex sm:flex-col sm:gap-2 lg:col-span-3">
      {data?.map(category => (
        <Link
          className="flex items-center gap-2 p-2 hover:bg-red-500 hover:text-white"
          href={`/shop?=${category.slug}`}
          key={category.id}
        >
          <Star size={25} strokeWidth={1} />
          <h1 className="text-sm">{category.name}</h1>
        </Link>
      ))}
    </div>
  );
}
export default CategoryBanner;
