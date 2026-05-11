import ProductListing from "@/app/components/ProductListingPage";
import { products } from "@/data/products";

export default function PrintersPage() {
  return (
    <ProductListing
      title="Printers"
      category="printers"
      products={products} // 👈 IMPORTANT FIX
    />
  );
}