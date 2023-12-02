"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

function QuantityButton() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity - 1);

  return (
    <div className="flex w-28 justify-between rounded-sm border px-2 py-1">
      <button disabled={quantity === 1} onClick={handleDecrement}>
        <Minus className="h-5 w-5 text-gray-700 hover:text-gray-900" strokeWidth={3} />
      </button>
      <span className="font-medium">{quantity}</span>
      <button onClick={handleIncrement}>
        <Plus className="h-5 w-5 text-gray-700 hover:text-gray-900" strokeWidth={3} />
      </button>
    </div>
  );
}
export default QuantityButton;
