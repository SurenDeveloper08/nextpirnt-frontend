"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function CartIcon() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCount(cart.length);
    };

    updateCart();

    // live update when storage changes
    window.addEventListener("storage", updateCart);

    return () => window.removeEventListener("storage", updateCart);
  }, []);

  return (
    <Link href="/cart" className="relative flex items-center">
      
      {/* Icon */}
      <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-red-600 transition" />

      {/* Badge */}
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
          {count}
        </span>
      )}
    </Link>
  );
}