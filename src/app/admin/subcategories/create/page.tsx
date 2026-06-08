"use client";

import axios from "axios";

import {
    useEffect,
    useState,
} from "react";

import {
    useRouter,
} from "next/navigation";

import toast from "react-hot-toast";

import SubCategoryForm from "@/app/components/admin/subcategories/SubCategoryForm";

export default function CreateSubCategoryPage() {

    const router =
        useRouter();

    const [loading, setLoading] =
        useState(false);

    const [categories, setCategories] =
        useState<any[]>([]);

    const [pageLoading, setPageLoading] =
        useState(true);

    // ====================================
    // FETCH CATEGORIES
    // ====================================

    const fetchCategories = async () => {

        try {

            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/category/all`
            );

            setCategories(
                res.data.data
            );

        } catch (error: any) {

            console.log(error);

            toast.error(
                error?.response?.data?.message ||
                "Failed to load categories"
            );

        } finally {

            setPageLoading(false);

        }

    };

    useEffect(() => {

        fetchCategories();

    }, []);

    // ====================================
    // CREATE SUBCATEGORY
    // ====================================

    const handleSubmit = async (
        formData: FormData
    ) => {

        try {

            setLoading(true);

            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/subcategory/new`,
                formData
            );

            if (res.data.success) {

                toast.success(
                    res.data.message ||
                    "Subcategory created successfully"
                );

                router.push(
                    "/admin/subcategories"
                );

            } else {

                toast.error(
                    res.data.message ||
                    "Creation failed"
                );

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

    // ====================================
    // LOADING UI
    // ====================================

    if (pageLoading) {

        return (

            <div className="space-y-4 p-6">

                <div className="h-6 w-1/3 animate-pulse rounded bg-gray-200" />

                <div className="h-40 animate-pulse rounded bg-gray-100" />

            </div>

        );

    }

    return (

        <div className="space-y-6">

            <h1 className="text-3xl font-bold">
                Create Subcategory
            </h1>

            <SubCategoryForm
                categories={categories}
                onSubmit={handleSubmit}
                loading={loading}
            />

        </div>

    );

}