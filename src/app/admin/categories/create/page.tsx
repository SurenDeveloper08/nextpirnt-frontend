"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

import CategoryForm from "../../../components/admin/categories/CategoryForm";

export default function CreateCategoryPage() {

    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (formData: FormData) => {

        try {
            setLoading(true);

            const apiUrl =
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/category/new`;

            const res = await axios.post(apiUrl, formData);

            if (res.data.success) {

                toast.success(
                    res.data.message || "Category created successfully"
                );

                router.push("/admin/categories");

            } else {
                toast.error(res.data.message || "Failed to create category");
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

    return (
        <div className="space-y-6">

            <h1 className="text-3xl font-bold">
                Create Category
            </h1>

            <CategoryForm
                onSubmit={handleSubmit}
                loading={loading}
            />

        </div>
    );
}