"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import ServiceForm from "@/app/components/admin/services/ServiceForm";

export default function CreateServicePage() {

    const router = useRouter();

    const [loading, setLoading] =
        useState(false);

    const handleSubmit = async (
        formData: FormData
    ) => {

        try {

            setLoading(true);

            const res =
                await axios.post(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/service/new`,
                    formData
                );

            toast.success(
                res.data.message ||
                "Service created successfully"
            );

            router.push(
                "/admin/services"
            );

        } catch (error: any) {

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
                Create Service
            </h1>

            <ServiceForm
                onSubmit={handleSubmit}
                loading={loading}
            />

        </div>

    );

}