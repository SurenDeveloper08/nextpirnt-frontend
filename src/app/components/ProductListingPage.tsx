"use client";

import React from "react";
import ProductGrid from "./ProductGrid";
import Breadcrumbs from "./Breadcrumbs";

import type { ProductCard } from "@/types/product";

interface ProductListingProps {
  title: string;
  description: string;
  category?: string;
  products: ProductCard[];
}

export default function ProductListing({
  title,
  description,
  category,
  products,
}: ProductListingProps) {
  return (
    <section className="min-h-screen bg-[#f8fafc] py-8">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <h1 className="text-3xl font-bold text-slate-900">
          {title}
        </h1>

        <Breadcrumbs />

        <div className="mt-6 flex flex-col items-start gap-6 lg:gap-8 xl:flex-row">
          <div className="min-w-0 flex-1">
            <ProductGrid products={products} />
          </div>
        </div>
      </div>
    </section>
  );
}