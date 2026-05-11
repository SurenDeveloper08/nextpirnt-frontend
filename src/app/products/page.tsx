import ProductListing from "@/app/components/ProductListingPage";
import { products } from "@/data/products";

export default function PrintersPage() {
  return (
    <ProductListing
      title="All Products"
      category="printers"
      products={products} // 👈 IMPORTANT FIX
    />
  );
}