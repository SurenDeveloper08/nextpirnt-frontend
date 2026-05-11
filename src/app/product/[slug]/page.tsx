import ProductClient from "@/app/components/ProductClient";
import { products } from "@/data/products";

export async function generateMetadata({ params }: any) {
  const { slug } = await params;

  const product = products?.find(
    (p) => p.slug === slug
  );

  return {
    title: product?.name || "Product",
    description: product?.description || "",
  };
}

export default async function Page({ params }: any) {
  const { slug } = await params;

  const product = products.find(
    (p) => p.slug === slug
  );

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  return <ProductClient product={product} />;
}