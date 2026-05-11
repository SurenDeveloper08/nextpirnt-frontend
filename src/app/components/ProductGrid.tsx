import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface Props {
  products?: Product[];
}

export default function ProductGrid({ products = [] }: Props) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 auto-rows-fr">
      {products.map((product) => (
        <div key={product.id} className="h-full">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}