import ProductListing from "@/app/components/ProductListingPage";
import { products } from "@/data/products";

export default function ConsumablesPage() {
  return (
    <ProductListing
      title="Consumables"
      category="Consumables"
      products={products} // 👈 IMPORTANT FIX
    />
  );
}