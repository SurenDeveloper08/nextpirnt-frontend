// ===============================================
// app/admin/products/create/page.tsx
// ===============================================

"use client";

import axios from "axios";

import {
    useRouter,
} from "next/navigation";

import {
    useState,
} from "react";

import toast from "react-hot-toast";

import ProductForm from "@/app/components/admin/products/ProductForm";

export default function CreateProductPage() {

    const router =
        useRouter();

    const [loading, setLoading] =
        useState(false);

    const handleSubmit =
        async (
            formData: FormData
        ) => {

            try {

                setLoading(true);

                const res =
                    await axios.post(
                        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/product/new`,
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
                    "Something went wrong"
                );

            } finally {

                setLoading(false);

            }

        };

    return (

        <div className="space-y-6">

            <h1 className="text-3xl font-bold">
                Create Product
            </h1>

            <ProductForm
                onSubmit={handleSubmit}
                loading={loading}
            />

        </div>

    );

}