import ProductListing from "@/app/components/ProductListingPage";
import { Metadata } from "next";

async function getProducts(category: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/products/category/${category}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return await res.json();
  } catch (error) {
    console.log(error);

    return {
      category: null,
      products: [],
    };
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;

  const data = await getProducts(category);

  return {
    title:
      data.category?.seo?.metaTitle ||
      data.category?.Title ||
      data.category?.name ||
      "Products",

    description:
      data.category?.seo?.metaDescription ||
      data.category?.Description ||
      "",

    keywords:
      data.category?.seo?.metaKeywords?.join(", ") || "",

    alternates: {
      canonical:
        data.category?.seo?.canonicalUrl ||
        `${process.env.NEXT_PUBLIC_SITE_URL}/products/${category}`,
    },

    openGraph: {
      title:
        data.category?.seo?.metaTitle ||
        data.category?.Title ||
        data.category?.name,

      description:
        data.category?.seo?.metaDescription ||
        data.category?.Description,

      images: data.category?.image
        ? [data.category.image]
        : [],
    },
  };
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const data = await getProducts(category);

  return (
    <ProductListing
      title={
        data.category?.Title ||
        data.category?.name ||
        "Products"
      }
      description={
        data.category?.Description || ""
      }
      category={
        data.category?.slug || category
      }
      products={data.products || []}
    />
  );
}