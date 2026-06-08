"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

import CategoryForm from "@/app/components/admin/categories/CategoryForm";

export default function EditCategoryPage() {

    const params = useParams();
    const id = params.id as string;
    const router = useRouter();

    const [category, setCategory] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [pageLoading, setPageLoading] = useState(true);

    // =========================
    // FETCH CATEGORY
    // =========================
    const fetchCategory = async () => {
        try {
            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/category/${id}`
            );

            setCategory(res.data.data);

        } catch (error: any) {
            console.log(error);

            toast.error(
                error?.response?.data?.message ||
                "Failed to load category"
            );

        } finally {
            setPageLoading(false);
        }
    };

    useEffect(() => {
        if (id) fetchCategory();
    }, [id]);

    // =========================
    // UPDATE CATEGORY
    // =========================
    const handleSubmit = async (formData: FormData) => {

        try {
            setLoading(true);

            const res = await axios.put(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/category/${id}`,
                formData
            );

            if (res.data.success) {

                toast.success(
                    res.data.message || "Category updated successfully"
                );

                router.push("/admin/categories");

            } else {
                toast.error(res.data.message || "Update failed");
            }

        } catch (error: any) {

            console.log(error);

            toast.error(
                error?.response?.data?.message ||
                "Something went wrong"
            );

        } finally {
            setLoading(false);
        }
    };

    // =========================
    // LOADING UI
    // =========================
    if (pageLoading) {
        return (
            <div className="p-6 space-y-4">
                <div className="h-6 w-1/3 bg-gray-200 animate-pulse rounded" />
                <div className="h-40 bg-gray-100 animate-pulse rounded" />
            </div>
        );
    }

    return (
        <div className="space-y-6">

            <h1 className="text-3xl font-bold">
                Edit Category
            </h1>

            <CategoryForm
                initialData={category}
                onSubmit={handleSubmit}
                loading={loading}
            />

        </div>
    );
}