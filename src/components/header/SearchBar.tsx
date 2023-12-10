"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCategoryList } from "@/services/home/categories";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";

function SearchBar() {
  const { data } = useQuery({
    queryKey: ["category"],
    queryFn: getCategoryList,
  });

  return (
    <form className="flex w-full flex-initial justify-center" name="search">
      <Select name="category">
        <SelectTrigger className="w-40 rounded-r-none">
          <SelectValue className="line-clamp-1" placeholder="Pilih Kategori" />
        </SelectTrigger>
        <SelectContent className="overflow-auto">
          <SelectGroup className="h-96">
            <SelectLabel>Category</SelectLabel>
            {data?.map(category => (
              <SelectItem className="max-w-[18rem]" key={category.id} value={category.slug}>
                <Link className="line-clamp-1 " href={`/category/${category.slug}`}>
                  {category.name}
                </Link>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input className="w-1/2 rounded-none" name="search" placeholder="Search" />
      <Button className="w-12 rounded-l-none bg-red-600 hover:bg-red-700">
        <Search />
      </Button>
    </form>
  );
}
export default SearchBar;
