"use client";

import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import { useRouter } from "next/navigation";

import axios from "axios";

import toast from "react-hot-toast";

import ServiceForm from "@/app/components/admin/services/ServiceForm";

export default function EditServicePage() {

    const params = useParams();

    const id = params.id as string;

    const router = useRouter();

    const [service, setService] =
        useState<any>(null);

    const [loading, setLoading] =
        useState(false);

    const [pageLoading, setPageLoading] =
        useState(true);

    // =========================
    // FETCH SERVICE
    // =========================

    const fetchService = async () => {

        try {

            const res =
                await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/service/${id}`
                );

            setService(
                res.data.data
            );

        } catch (error: any) {

            toast.error(
                error?.response?.data?.message ||
                "Failed to load service"
            );

        } finally {

            setPageLoading(false);

        }

    };

    useEffect(() => {

        if (id) {
            fetchService();
        }

    }, [id]);

    // =========================
    // UPDATE SERVICE
    // =========================

    const handleSubmit = async (
        formData: FormData
    ) => {

        try {

            setLoading(true);

            const res =
                await axios.put(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/service/${id}`,
                    formData
                );

            toast.success(
                res.data.message ||
                "Service updated successfully"
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

    // =========================
    // LOADING UI
    // =========================

    if (pageLoading) {

        return (

            <div className="p-6 space-y-4">

                <div className="h-6 w-1/3 animate-pulse rounded bg-gray-200" />

                <div className="h-48 animate-pulse rounded bg-gray-100" />

            </div>

        );

    }

    return (

        <div className="space-y-6">

            <h1 className="text-3xl font-bold">
                Edit Service
            </h1>

            <ServiceForm
                initialData={service}
                onSubmit={handleSubmit}
                loading={loading}
            />

        </div>

    );

}