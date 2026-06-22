"use client";

import Link from "next/link";
import { ShoppingCart, ArrowRight } from "lucide-react";

import { addToCart } from "@/lib/cart";
import type { ProductCard } from "@/types/product";

interface ProductCardProps {
  product: ProductCard;
}

export default function ProductCard({ product }: ProductCardProps) {
  const productUrl = `/product/${product.slug}`;

  return (
    <article className="group bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col h-full hover:shadow-xl hover:border-red-100 transition-all duration-300">

      {/* IMAGE */}
      <Link href={productUrl} className="block">
        <div className="relative bg-slate-50 aspect-square p-3 sm:p-4 overflow-hidden">

          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* CONTENT */}
      <div className="flex flex-col flex-1 p-3 sm:p-4">

        <p className="text-[11px] text-slate-500 mb-1 truncate">
          {product?.brand?.name}
        </p>

        <Link href={productUrl}>
          <h2 className="text-[13px] sm:text-[14px] font-semibold text-slate-900 line-clamp-2 hover:text-[#e63946] transition-colors">
            {product.name}
          </h2>
        </Link>

        {/* PRICE */}
        {/* {product.price && (
          <div className="mt-3">
            <span className="text-lg font-bold text-slate-900">
              AED {product.price}
            </span>
          </div>
        )} */}

        {/* ACTIONS */}
        <div className="mt-auto pt-4 flex gap-2">

          <button
            onClick={() => addToCart(product)}
            className="flex-1 h-11 rounded-xl bg-[#e63946] text-white text-sm font-semibold flex items-center justify-center gap-2 hover:bg-red-700 transition-colors"
          >
            <ShoppingCart size={15} />
            Add To Cart
          </button>

          {/* <Link
            href={productUrl}
            className="h-11 w-11 rounded-xl border border-slate-200 flex items-center justify-center hover:border-[#e63946] hover:text-[#e63946] transition-all"
          >
            <ArrowRight size={16} />
          </Link> */}

        </div>
      </div>
    </article>
  );
}