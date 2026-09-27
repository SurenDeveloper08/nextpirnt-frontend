import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductClient from "@/app/components/ProductClient";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

async function getProduct(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/product/slug/${slug}`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!res.ok) {
      return null;
    }

    const data = await res.json();

    return data.product || data;
  } catch (error) {
    console.error("Product Fetch Error:", error);
    return null;
  }
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;

  const product = await getProduct(slug);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "Requested product could not be found.",
    };
  }

  const image =
    product.image ||
    product.images?.[0] ||
    "/placeholder.jpg";

  return {
    title:
      product.seo?.metaTitle ||
      `${product.name} | Print Store UAE`,

    description:
      product.seo?.metaDescription ||
      product.shortDescription ||
      product.description,

    keywords:
      product.seo?.metaKeywords || [],

    alternates: {
      canonical:
        product.seo?.canonicalUrl ||
        `${process.env.NEXT_PUBLIC_SITE_URL}/product/${product.slug}`,
    },

    openGraph: {
      title:
        product.seo?.metaTitle ||
        product.name,

      description:
        product.seo?.metaDescription ||
        product.shortDescription,

      url: `${process.env.NEXT_PUBLIC_SITE_URL}/product/${product.slug}`,

      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],

      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title:
        product.seo?.metaTitle ||
        product.name,

      description:
        product.seo?.metaDescription ||
        product.shortDescription,

      images: [image],
    },
  };
}

export default async function Page({
  params,
}: Props) {
  const { slug } = await params;

  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <ProductClient
      product={product}
    />
  );
}