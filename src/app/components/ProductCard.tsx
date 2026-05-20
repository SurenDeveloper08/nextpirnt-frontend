"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/types/product";
import { addToCart } from "@/lib/cart";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <div
      className="
        group bg-white rounded-[20px]
        border border-slate-200
        overflow-hidden
        shadow-sm
      "
    >

      {/* IMAGE */}
      <div
        className="
          relative bg-slate-50
          h-[190px]
          sm:h-[220px]
          md:h-[240px]
          flex items-center justify-center
          overflow-hidden
          p-4 sm:p-6
        "
      >

        <Link
          href={`/products/${product.id}`}
          className="w-full h-full flex items-center justify-center"
        >
          <img
            src={product.image}
            alt={product.name}
            className="
              w-full h-full
              max-w-[180px]
              sm:max-w-[210px]
              max-h-[180px]
              sm:max-h-[210px]
              object-contain
              object-center
              mix-blend-multiply
              group-hover:scale-105
              transition-transform duration-500
            "
          />
        </Link>

        {/* Add To Cart */}
        <div
          className="
    absolute bottom-3 left-1/2
    -translate-x-1/2
    opacity-100 translate-y-0
    sm:translate-y-10 sm:opacity-0
    sm:group-hover:translate-y-0
    sm:group-hover:opacity-100
    transition-all duration-300
  "
        >
          <button
            onClick={() => addToCart(product)}
            className="
              h-9 sm:h-10
              px-4
              rounded-full
              bg-[#e63946]
              text-white
              text-xs sm:text-sm
              font-medium
              hover:bg-slate-900
              transition-colors
              flex items-center gap-2
              whitespace-nowrap
            "
          >
            <ShoppingCart size={15} />
            Add To Cart
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4">

        {/* CATEGORY */}
        <p className="text-[11px] sm:text-xs text-slate-400 mb-1">
          {product.category}
        </p>

        {/* TITLE */}
        <Link href={`/products/${product.id}`}>
          <h3
            className="
              text-[14px]
              sm:text-[15px]
              font-semibold
              leading-[1.5]
              text-slate-800
              hover:text-[#e63946]
              transition-colors
              line-clamp-2
              min-h-[44px]
            "
          >
            {product.name}
          </h3>
        </Link>

        {/* PRICE + VIEW */}
        {/* <div className="mt-3 flex items-center justify-between gap-2">

          <span className="text-base sm:text-lg font-bold text-slate-900">
            {product.price}
          </span>

          <Link
            href={`/products/${product.id}`}
            className="
              text-xs sm:text-sm
              font-medium
              text-slate-500
              hover:text-[#e63946]
              transition-colors
            "
          >
            View
          </Link>

        </div> */}
      </div>
    </div>
  );
}