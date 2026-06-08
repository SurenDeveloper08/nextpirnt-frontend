import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface Props {
  products?: Product[];
}

export default function ProductGrid({
  products = [],
}: Props) {
  if (!products.length) {
    return (
      <section className="py-16">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            No Products Found
          </h2>

          <p className="mt-3 text-slate-500 max-w-md">
            We couldn't find any products matching
            your criteria. Try browsing another
            category.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section aria-label="Product Listing">
      
      {/* Product Count */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-slate-500">
          Showing{" "}
          <span className="font-semibold text-slate-900">
            {products.length}
          </span>{" "}
          products
        </p>
      </div>

      {/* Grid */}
 <div
  className="
    grid
    grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    2xl:grid-cols-5
    gap-4
    lg:gap-6
  "
>
  {products.map((product) => (
    <article
      key={product.id}
      className="h-full"
    >
      <ProductCard product={product} />
    </article>
  ))}
</div>
    </section>
  );
}