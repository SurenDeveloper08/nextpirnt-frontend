"use client";

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
  products,
}: ProductListingProps) {
  return (
    <main className="min-h-screen bg-white">

      {/* =====================================================
          CATEGORY HEADER
      ===================================================== */}

      <section className="border-b border-[#eaecf0] bg-[#fafafa]">
        <div className="mx-auto w-full max-w-[1600px] px-5 py-10 sm:px-7 sm:py-12 md:px-10 md:py-14 lg:px-12 xl:px-16 2xl:px-20">

          {/* Label */}
          <div className="mb-3 flex items-center gap-2.5">
            <span className="h-[2px] w-7 rounded-full bg-[#e63946]" />

            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#e63946] sm:text-[12px]">
              Our Products
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[30px] font-semibold leading-[1.18] tracking-[-0.025em] text-[#27303f] sm:text-[36px] md:text-[40px] lg:text-[44px]">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="mt-3 max-w-[720px] text-[14px] leading-[1.75] text-[#667085] sm:text-[15px]">
              {description}
            </p>
          )}

          {/* Breadcrumb */}
          <Breadcrumbs currentLabel={title} />
        </div>
      </section>

      {/* =====================================================
          PRODUCTS
      ===================================================== */}

      <section className="py-10 sm:py-12 md:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
          <ProductGrid products={products} />
        </div>
      </section>
    </main>
  );
}