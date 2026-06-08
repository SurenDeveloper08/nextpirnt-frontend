"use client";

import { useEffect, useState } from "react";

import {
    useParams,
    useRouter,
} from "next/navigation";

import axios from "axios";
import toast from "react-hot-toast";

import SubCategoryForm from "@/app/components/admin/subcategories/SubCategoryForm";

export default function EditSubCategoryPage() {

    const params = useParams();

    const id = params.id as string;

    const router = useRouter();

    const [subCategory, setSubCategory] =
        useState<any>(null);

    const [categories, setCategories] =
        useState<any[]>([]);

    const [loading, setLoading] =
        useState(false);

    const [pageLoading, setPageLoading] =
        useState(true);

    // ====================================
    // FETCH SUBCATEGORY
    // ====================================

    const fetchSubCategory = async () => {

        try {

            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/subcategory/${id}`
            );

            setSubCategory(
                res.data.data
            );

        } catch (error: any) {

            console.log(error);

            toast.error(
                error?.response?.data?.message ||
                "Failed to load subcategory"
            );

        }

    };

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

        } catch (error) {

            console.log(error);

            toast.error(
                "Failed to load categories"
            );

        }

    };

    // ====================================
    // LOAD PAGE
    // ====================================

    useEffect(() => {

        const loadData = async () => {

            setPageLoading(true);

            await Promise.all([
                fetchSubCategory(),
                fetchCategories(),
            ]);

            setPageLoading(false);

        };

        if (id) {
            loadData();
        }

    }, [id]);

    // ====================================
    // UPDATE SUBCATEGORY
    // ====================================

    const handleSubmit = async (
        formData: FormData
    ) => {

        try {

            setLoading(true);

            const res = await axios.put(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/subcategory/${id}`,
                formData
            );

            if (res.data.success) {

                toast.success(
                    res.data.message ||
                    "Subcategory updated successfully"
                );

                router.push(
                    "/admin/subcategories"
                );

            } else {

                toast.error(
                    res.data.message ||
                    "Update failed"
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
                Edit Subcategory
            </h1>

            <SubCategoryForm
                initialData={subCategory}
                categories={categories}
                onSubmit={handleSubmit}
                loading={loading}
            />

        </div>

    );

}