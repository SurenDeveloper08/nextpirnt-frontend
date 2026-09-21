import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";

import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  if (!product?.slug) return null;

  return (
    <Link
      href={`/products/${product.slug}`}
      aria-label={`View ${product.name}`}
      className="
        group
        flex
        h-full
        min-w-0
        flex-col
        overflow-hidden
        rounded-[16px]
        border
        border-[#eaecf0]
        bg-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#e63946]/20
        hover:shadow-[0_16px_40px_rgba(16,24,40,0.065)]
        sm:rounded-[18px]
      "
    >

      {/* =====================================================
          PRODUCT IMAGE
      ===================================================== */}

      <div className="relative aspect-square w-full overflow-hidden bg-[#f8f9fa]">

        {product.image ? (
          <Image
            src={product.image}
            alt={product.name || "Nexprint product"}
            fill
            sizes="
              (max-width: 767px) 50vw,
              (max-width: 1023px) 33vw,
              (max-width: 1535px) 25vw,
              20vw
            "
            className="
              object-contain
              p-3.5
              transition-transform
              duration-500
              ease-out
              group-hover:scale-[1.04]
              sm:p-5
              lg:p-5
            "
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-[#b0b6c0]">
            <Package
              size={25}
              strokeWidth={1.4}
            />

            <span className="text-[11px]">
              No Image
            </span>
          </div>
        )}

        {/* Bottom Red Hover Line */}
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#e63946] transition-all duration-300 group-hover:w-full" />
      </div>

      {/* =====================================================
          PRODUCT INFORMATION
      ===================================================== */}

      <div className="flex flex-1 flex-col p-3.5 sm:p-4 lg:p-5">

        {/* Brand */}

        {product.brand?.name && (
          <span className="mb-1.5 line-clamp-1 text-[9.5px] font-medium uppercase tracking-[0.12em] text-[#e63946] sm:mb-2 sm:text-[10.5px]">
            {product.brand.name}
          </span>
        )}

        {/* Name */}

        <h2
          className="
            line-clamp-2
            text-[13px]
            font-medium
            leading-[1.45]
            text-[#27303f]
            transition-colors
            duration-300
            group-hover:text-[#e63946]
            sm:text-[14.5px]
            lg:text-[15.5px]
          "
        >
          {product.name}
        </h2>

        {/* Category - Optional */}

        {product.category?.name && (
          <p className="mt-2 line-clamp-1 text-[10.5px] text-[#98a2b3] sm:text-[11.5px]">
            {product.category.name}
          </p>
        )}

        {/* View Product */}

        <div className="mt-auto pt-4">
          <span className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-[#e63946] sm:text-[12.5px]">
            View Product

            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.8}
            />
          </span>
        </div>
      </div>
    </Link>
  );
}