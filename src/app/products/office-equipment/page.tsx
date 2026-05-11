import ProductListing from "@/app/components/ProductListingPage";
import { products } from "@/data/products";

export default function Page() {
  return (
    <ProductListing
      title="All Products"
      products={products}
    />
  );
}