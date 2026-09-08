import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ProductCard from "./ProductCard";
import type { Product } from "@/types/product";

interface FeaturedProductsProps {
  products?: Product[];
}

export default function FeaturedProducts({
  products = [],
}: FeaturedProductsProps) {
  const validProducts = products
    .filter((product) => product && product.slug)
    .slice(0, 8);

  if (!validProducts.length) return null;

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full bg-[#e63946]/[0.02] blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex items-end justify-between gap-5">
          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <span className="h-[2px] w-7 rounded-full bg-[#e63946]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#e63946] sm:text-[12px]">
                Featured Products
              </span>
            </div>

            <h2 className="text-[29px] font-semibold leading-[1.18] tracking-[-0.025em] text-[#27303f] sm:text-[34px] md:text-[38px] lg:text-[44px]">
              Our Featured{" "}
              <span className="text-[#e63946]">
                Products
              </span>
            </h2>
          </div>

          <Link
            href="/products"
            className="group hidden items-center gap-2 text-[14px] font-medium text-[#667085] transition-colors hover:text-[#e63946] sm:flex"
          >
            View All

            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              strokeWidth={1.8}
            />
          </Link>
        </div>

        <div className="mt-9 grid grid-cols-2 items-stretch gap-3 sm:mt-10 sm:gap-5 md:grid-cols-3 lg:mt-12 lg:grid-cols-4 lg:gap-6 xl:gap-7">
          {validProducts.map((product) => (
            <ProductCard
              key={product._id || product.id || product.slug}
              product={product}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            href="/products"
            className="group inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-[#d9dde5] bg-white px-6 text-[13.5px] font-medium text-[#374151] transition-all hover:border-[#e63946] hover:text-[#e63946]"
          >
            View All Products

            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              strokeWidth={1.8}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}