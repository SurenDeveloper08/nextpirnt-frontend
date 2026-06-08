// ===============================================
// app/admin/products/edit/[id]/page.tsx
// ===============================================

"use client";

import axios from "axios";

import {
    useEffect,
    useState,
} from "react";

import {
    useParams,
    useRouter,
} from "next/navigation";

import toast from "react-hot-toast";

import ProductForm from "@/app/components/admin/products/ProductForm";

export default function EditProductPage() {

    const params =
        useParams();

    const id =
        params.id as string;

    const router =
        useRouter();

    const [product, setProduct] =
        useState(null);

    const [loading, setLoading] =
        useState(false);

    const [pageLoading, setPageLoading] =
        useState(true);

    // FETCH

    const fetchProduct =
        async () => {

            try {

                const res =
                    await axios.get(
                        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/product/${id}`
                    );

                setProduct(
                    res.data.data
                );

            } catch (error: any) {

                toast.error(
                    error?.response?.data
                        ?.message ||
                    "Failed to load product"
                );

            } finally {

                setPageLoading(false);

            }

        };

    useEffect(() => {

        if (id) {
            fetchProduct();
        }

    }, [id]);

    // UPDATE

    const handleSubmit =
        async (
            formData: FormData
        ) => {

            try {

                setLoading(true);

                const res =
                    await axios.put(
                        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/product/${id}`,
                        formData
                    );

                toast.success(
                    res.data.message
                );

                router.push(
                    "/admin/products"
                );

            } catch (error: any) {

                toast.error(
                    error?.response?.data
                        ?.message ||
                    "Update failed"
                );

            } finally {

                setLoading(false);

            }

        };

    if (pageLoading) {

        return (
            <div className="space-y-4 p-6">

                <div className="h-8 w-1/3 animate-pulse rounded bg-gray-200" />

                <div className="h-96 animate-pulse rounded bg-gray-100" />

            </div>
        );

    }

    return (

        <div className="space-y-6">

            <h1 className="text-3xl font-bold">
                Edit Product
            </h1>

            <ProductForm
                initialData={product}
                onSubmit={handleSubmit}
                loading={loading}
            />

        </div>

    );

}