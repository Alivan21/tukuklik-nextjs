"use client";

import { ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function SortPriceCard() {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  };

  return (
    <div className="rounded-sm bg-gray-100 px-4 py-5">
      <h2 className="text-lg font-medium">By Price</h2>
      <form className="mt-5 flex flex-col gap-4" name="sort">
        <div className="relative rounded-sm">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center bg-gray-200 px-2">
            <span className="text-gray-600">Rp</span>
          </div>
          <Input
            className="ps-11 text-base"
            name="min_price"
            onInput={handleInput}
            pattern="[0-9]*"
            placeholder="Harga Minimum"
            type="text"
          />
        </div>
        <div className="relative rounded-sm">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center bg-gray-200 px-2">
            <span className="text-gray-600">Rp</span>
          </div>
          <Input
            className="ps-11 text-base"
            name="max_price"
            onInput={handleInput}
            pattern="[0-9]*"
            placeholder="Harga Maksimum"
            type="text"
          />
        </div>
        <Button className="bg-red-600 text-base hover:bg-red-700">Filter</Button>
      </form>
    </div>
  );
}
export default SortPriceCard;
