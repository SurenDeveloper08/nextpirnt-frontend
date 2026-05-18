import ProductListing from "@/app/components/ProductListingPage";
import { products } from "@/data/products";

export default function Page() {
  return (
    <ProductListing
      title="Consumables"
      category="Consumables"
      products={products} // 👈 IMPORTANT FIX
    />
  );
}