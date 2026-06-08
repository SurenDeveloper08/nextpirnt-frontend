"use client";

import { useEffect, useState } from "react";

import {
    useParams,
    useRouter,
} from "next/navigation";

import axios from "axios";

import toast from "react-hot-toast";

import BrandForm from "@/app/components/admin/brands/BrandForm";

export default function EditBrandPage() {

    const params = useParams();

    const id = params.id as string;

    const router = useRouter();

    const [brand, setBrand] =
        useState<any>(null);

    const [loading, setLoading] =
        useState(false);

    const [pageLoading, setPageLoading] =
        useState(true);

    // FETCH BRAND

    const fetchBrand = async () => {

        try {

            const res =
                await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/brand/${id}`
                );

            setBrand(
                res.data.data
            );

        } catch (error: any) {

            toast.error(
                error?.response?.data?.message ||
                "Failed to load brand"
            );

        } finally {

            setPageLoading(false);

        }

    };

    useEffect(() => {

        if (id) {
            fetchBrand();
        }

    }, [id]);

    // UPDATE BRAND

    const handleSubmit = async (
        formData: FormData
    ) => {

        try {

            setLoading(true);

            const res =
                await axios.put(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/brand/${id}`,
                    formData
                );

            toast.success(
                res.data.message
            );

            router.push(
                "/admin/brands"
            );

        } catch (error: any) {

            toast.error(
                error?.response?.data?.message ||
                "Update failed"
            );

        } finally {

            setLoading(false);

        }

    };

    if (pageLoading) {

        return (
            <div className="space-y-4">

                <div className="h-6 w-40 animate-pulse rounded bg-gray-200" />

                <div className="h-64 animate-pulse rounded bg-gray-100" />

            </div>
        );

    }

    return (

        <div className="space-y-6">

            <h1 className="text-3xl font-bold">
                Edit Brand
            </h1>

            <BrandForm
                initialData={brand}
                onSubmit={handleSubmit}
                loading={loading}
            />

        </div>

    );

}