import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
      className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[18px] border border-[#eaecf0] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#e63946]/20 hover:shadow-[0_18px_45px_rgba(16,24,40,0.07)] sm:rounded-[20px]"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-[#f8f9fa]">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name || "Product"}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-[1.04] sm:p-5 lg:p-6"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-[12px] text-[#98a2b3]">
            No Image
          </div>
        )}

        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#e63946] transition-all duration-300 group-hover:w-full" />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
        {product.brand?.name && (
          <span className="mb-2 line-clamp-1 text-[10px] font-medium uppercase tracking-[0.11em] text-[#e63946] sm:text-[11px]">
            {product.brand.name}
          </span>
        )}

        <h3 className="line-clamp-2 text-[14px] font-medium leading-[1.45] text-[#27303f] sm:text-[16px] lg:text-[17px]">
          {product.name}
        </h3>

        <div className="mt-auto flex items-center gap-1.5 pt-4 text-[12.5px] font-medium text-[#e63946] sm:text-[13.5px]">
          View Product

          <ArrowRight
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={1.8}
          />
        </div>
      </div>
    </Link>
  );
}