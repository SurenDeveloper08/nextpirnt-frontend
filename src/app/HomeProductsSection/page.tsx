"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { addToCart } from "@/lib/cart";

export default function HomeProductsSection() {
  const featuredProducts = products.slice(0, 8);

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        {/* TOP */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">

          <div>
            <p className="text-[#e63946] text-sm font-semibold uppercase tracking-[3px] mb-3">
              Featured Products
            </p>

            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900">
              Office Printing Solutions
            </h2>

            <p className="text-slate-500 mt-4 max-w-2xl leading-relaxed">
              Explore premium printers, consumables, and office equipment
              designed for modern business performance.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-[#e63946] transition-colors"
          >
            View All Products
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >

              {/* IMAGE */}
              <Link
                href={`/products/${product.slug}`}
                className="relative block bg-[#f8fafc]"
              >
                <div className="relative h-[260px] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* CATEGORY */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide text-slate-700">
                  {product.category}
                </span>
              </Link>

              {/* CONTENT */}
              <div className="p-6">

                <p className="text-sm text-slate-400 font-medium mb-2">
                  {product.brand}
                </p>

                <Link href={`/products/${product.slug}`}>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug hover:text-[#e63946] transition-colors line-clamp-2 min-h-[56px]">
                    {product.name}
                  </h3>
                </Link>

                <div className="flex items-center justify-between mt-6">

                  <div>
                    <p className="text-2xl font-black text-slate-900">
                      AED {product.price}
                    </p>
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    className="w-11 h-11 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-[#e63946] transition-all"
                  >
                    <ShoppingCart size={18} />
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}