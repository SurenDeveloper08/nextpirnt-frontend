import type { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import { PackageSearch } from "lucide-react";

interface ProductGridProps {
  products?: Product[];
}

export default function ProductGrid({
  products = [],
}: ProductGridProps) {
  const validProducts = products.filter(
    (product) => product && product.slug
  );

  /* =========================================================
     EMPTY STATE
  ========================================================= */

  if (!validProducts.length) {
    return (
      <div className="flex min-h-[340px] items-center justify-center">
        <div className="mx-auto max-w-[480px] text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#e63946]/[0.07] text-[#e63946]">
            <PackageSearch
              size={22}
              strokeWidth={1.7}
            />
          </div>

          <h2 className="mt-5 text-[21px] font-semibold tracking-[-0.02em] text-[#27303f] sm:text-[23px]">
            No Products Found
          </h2>

          <p className="mx-auto mt-2.5 max-w-[400px] text-[13.5px] leading-[1.7] text-[#667085] sm:text-[14px]">
            We couldn&apos;t find any products in this category.
            Please browse another category or check back later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section aria-label="Product listing">

      {/* =====================================================
          PRODUCT COUNT
      ===================================================== */}

      <div className="mb-5 flex items-center justify-between border-b border-[#eaecf0] pb-4 sm:mb-6">
        <p className="text-[12.5px] text-[#667085] sm:text-[13px]">
          Showing{" "}
          <span className="font-medium text-[#344054]">
            {validProducts.length}
          </span>{" "}
          {validProducts.length === 1
            ? "product"
            : "products"}
        </p>
      </div>

      {/* =====================================================
          PRODUCT GRID
      ===================================================== */}

      <div
        className="
          grid
          grid-cols-2
          gap-3
          sm:gap-4
          md:grid-cols-3
          lg:grid-cols-4
          lg:gap-5
          2xl:grid-cols-5
          2xl:gap-6
        "
      >
        {validProducts.map((product) => (
          <article
            key={
              product._id ||
              product.id ||
              product.slug
            }
            className="min-w-0"
          >
            <ProductCard product={product} />
          </article>
        ))}
      </div>
    </section>
  );
}