"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/types/product";
import { addToCart } from "@/lib/cart";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="group bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">

      {/* IMAGE */}
      <div className="relative bg-slate-100 aspect-square overflow-hidden">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
        />

        {/* BRAND */}
        <span className="absolute top-4 left-4 bg-[#e63946] text-white text-xs font-semibold px-3 py-1 rounded-full">
          {product.brand}
        </span>

      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col flex-1">

        {/* PRODUCT NAME */}
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-semibold text-slate-900 text-sm lg:text-base line-clamp-2 hover:text-[#e63946] transition-colors min-h-[44px]">
            {product.name}
          </h3>
        </Link>

        {/* PRICE (optional but good UX) */}
        <p className="text-slate-900 font-bold mt-1">
          AED {product.price}
        </p>

        {/* ADD TO CART */}
        <button
          onClick={() => addToCart(product)}
          className="mt-5 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center gap-2 font-medium hover:bg-[#e63946] transition-colors"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>

      </div>
    </div>
  );
}