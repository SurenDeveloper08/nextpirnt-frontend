"use client";

import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function HomeProductsSection() {

  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-20 bg-[#f8fafc]">

      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        {/* HEADER */}
        <div className="mb-14 text-center">

          <p className="text-[#e63946] text-sm font-semibold uppercase tracking-[3px] mb-3">
            Featured Products
          </p>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900">
            Office Printing Solutions
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Explore premium printers, consumables, and office equipment.
          </p>

        </div>

        {/* PRODUCTS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

        </div>

      </div>

    </section>
  );
}