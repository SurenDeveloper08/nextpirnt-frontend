"use client";

import React, { useMemo, useState } from "react";
import ProductFilters from "./ProductFilters";
import ProductGrid from "./ProductGrid";
import Breadcrumbs from "./Breadcrumbs";
import { ProductCard } from "@/types/product";

interface ProductListingProps {
  title: string;
  description: string,
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
    <section className="bg-[#f8fafc] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-slate-900">
          {title}
        </h1>
        <Breadcrumbs />
        {/* MOBILE FILTER BUTTON */}
        {/* MAIN LAYOUT */}
        <div
          className="
    flex flex-col xl:flex-row
    gap-6 lg:gap-8
    mt-6
    items-start
  "
        >

          {/* PRODUCTS */}
          <div className="flex-1 min-w-0">
            <ProductGrid products={products} />
          </div>

        </div>
      </div>

    </section>
  );
}