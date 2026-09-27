import ProductListing from "@/app/components/ProductListingPage";
import { Metadata } from "next";

async function getProducts(subcategory: string) {
    try {
       
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/v1/products/subcategory/${subcategory}`,
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
    params: {
        category: string;
        subcategory: string;
    };
}): Promise<Metadata> {
    const data = await getProducts(
        params.subcategory
    );

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
            data.category?.seo?.metaKeywords?.join(", ") ||
            "",

        alternates: {
            canonical:
                data.category?.seo?.canonicalUrl ||
                `${process.env.NEXT_PUBLIC_SITE_URL}/products/${params.category}/${params.subcategory}`,
        },
    };
}

export default async function ProductsPage({
    params,
}: {
    params: Promise<{ subcategory: string }>;
}) {
    const { subcategory } = await params;;
   
    const data = await getProducts(subcategory);
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
                data.category?.slug ||
                subcategory
            }
            products={data.products || []}
        />
    );
}