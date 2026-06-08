"use client";

import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ServicesPage() {

    const [services, setServices] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);

    const limit = 10;

    // =========================
    // FETCH SERVICES
    // =========================

    const fetchServices = async () => {

        try {

            setLoading(true);

            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/service/all`
            );

            setServices(res.data.data);

        } catch (error) {

            console.log(error);

            toast.error("Failed to load services");

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchServices();

    }, []);

    // =========================
    // STATUS
    // =========================

    const toggleStatus = async (
        id: string
    ) => {

        try {

            await axios.patch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/service/status/${id}`
            );

            setServices((prev) =>
                prev.map((item) =>
                    item._id === id
                        ? {
                              ...item,
                              isActive: !item.isActive,
                          }
                        : item
                )
            );

            toast.success("Status updated");

        } catch (error) {

            toast.error("Failed to update status");

        }

    };

    // =========================
    // FEATURED
    // =========================

    const toggleFeatured = async (
        id: string
    ) => {

        try {

            await axios.patch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/service/featured/${id}`
            );

            setServices((prev) =>
                prev.map((item) =>
                    item._id === id
                        ? {
                              ...item,
                              isFeatured:
                                  !item.isFeatured,
                          }
                        : item
                )
            );

            toast.success("Featured updated");

        } catch (error) {

            toast.error("Failed to update featured");

        }

    };

    // =========================
    // DELETE
    // =========================

    const handleDelete = async (
        id: string
    ) => {

        if (
            !confirm(
                "Delete this service?"
            )
        )
            return;

        try {

            await axios.delete(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/service/${id}`
            );

            setServices((prev) =>
                prev.filter(
                    (item) =>
                        item._id !== id
                )
            );

            toast.success(
                "Service deleted"
            );

        } catch (error) {

            toast.error(
                "Delete failed"
            );

        }

    };

    // =========================
    // FILTER
    // =========================

    const filtered =
        services.filter(
            (item) =>
                item.name
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    ) ||
                item.slug
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    )
        );

    const start =
        (page - 1) * limit;

    const paginated =
        filtered.slice(
            start,
            start + limit
        );

    const totalPages =
        Math.ceil(
            filtered.length / limit
        );

    // =========================
    // LOADING
    // =========================

    if (loading) {

        return (
            <div className="space-y-4">

                <div className="h-8 w-52 animate-pulse rounded bg-gray-200" />

                {[...Array(6)].map(
                    (_, i) => (
                        <div
                            key={i}
                            className="h-16 animate-pulse rounded-xl bg-gray-100"
                        />
                    )
                )}

            </div>
        );

    }

    return (

        <div className="space-y-6">

            {/* HEADER */}

            <div className="flex items-center justify-between">

                <div>

                    <h1 className="text-3xl font-bold">
                        Services
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        Manage all services
                    </p>

                </div>

                <Link
                    href="/admin/services/create"
                    className="rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
                >
                    Add Service
                </Link>

            </div>

            {/* SEARCH */}

            <div>

                <input
                    type="text"
                    placeholder="Search service..."
                    value={search}
                    onChange={(e) =>
                        setSearch(
                            e.target.value
                        )
                    }
                    className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
                />

            </div>

            {/* TABLE */}

            <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

                <table className="w-full">

                    <thead className="bg-gray-100">

                        <tr>

                            <th className="p-4 text-left">
                                Image
                            </th>

                            <th className="p-4 text-left">
                                Name
                            </th>

                            <th className="p-4 text-left">
                                Slug
                            </th>

                            <th className="p-4 text-left">
                                Order
                            </th>

                            <th className="p-4 text-left">
                                Featured
                            </th>

                            <th className="p-4 text-left">
                                Status
                            </th>

                            <th className="p-4 text-left">
                                Actions
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {paginated.length > 0 ? (

                            paginated.map(
                                (item) => (

                                    <tr
                                        key={item._id}
                                        className="border-t"
                                    >

                                        {/* IMAGE */}

                                        <td className="p-4">

                                            <img
                                                src={
                                                    item.image
                                                }
                                                alt={
                                                    item.name
                                                }
                                                className="h-14 w-14 rounded-xl border object-cover"
                                            />

                                        </td>

                                        {/* NAME */}

                                        <td className="p-4 font-medium">
                                            {
                                                item.name
                                            }
                                        </td>

                                        {/* SLUG */}

                                        <td className="p-4 text-sm text-gray-500">
                                            {
                                                item.slug
                                            }
                                        </td>

                                        {/* ORDER */}

                                        <td className="p-4">
                                            {
                                                item.displayOrder
                                            }
                                        </td>

                                        {/* FEATURED */}

                                        <td className="p-4">

                                            <button
                                                onClick={() =>
                                                    toggleFeatured(
                                                        item._id
                                                    )
                                                }
                                                className={`relative flex h-7 w-14 items-center rounded-full p-1 transition ${
                                                    item.isFeatured
                                                        ? "bg-yellow-500"
                                                        : "bg-gray-300"
                                                }`}
                                            >

                                                <div
                                                    className={`h-5 w-5 rounded-full bg-white shadow transition ${
                                                        item.isFeatured
                                                            ? "translate-x-7"
                                                            : ""
                                                    }`}
                                                />

                                            </button>

                                        </td>

                                        {/* STATUS */}

                                        <td className="p-4">

                                            <button
                                                onClick={() =>
                                                    toggleStatus(
                                                        item._id
                                                    )
                                                }
                                                className={`relative flex h-7 w-14 items-center rounded-full p-1 transition ${
                                                    item.isActive
                                                        ? "bg-green-500"
                                                        : "bg-gray-300"
                                                }`}
                                            >

                                                <div
                                                    className={`h-5 w-5 rounded-full bg-white shadow transition ${
                                                        item.isActive
                                                            ? "translate-x-7"
                                                            : ""
                                                    }`}
                                                />

                                            </button>

                                        </td>

                                        {/* ACTIONS */}

                                        <td className="p-4">

                                            <div className="flex items-center gap-4">

                                                <Link
                                                    href={`/admin/services/edit/${item._id}`}
                                                    className="font-medium text-blue-600 hover:underline"
                                                >
                                                    Edit
                                                </Link>

                                                <button
                                                    onClick={() =>
                                                        handleDelete(
                                                            item._id
                                                        )
                                                    }
                                                    className="font-medium text-red-600 hover:underline"
                                                >
                                                    Delete
                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                )
                            )

                        ) : (

                            <tr>

                                <td
                                    colSpan={7}
                                    className="p-10 text-center text-gray-500"
                                >
                                    No services found
                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>

            </div>

            {/* PAGINATION */}

            {totalPages > 1 && (

                <div className="flex justify-center gap-2">

                    {[...Array(totalPages)].map(
                        (_, index) => (

                            <button
                                key={index}
                                onClick={() =>
                                    setPage(
                                        index + 1
                                    )
                                }
                                className={`rounded-lg px-4 py-2 text-sm font-medium ${
                                    page ===
                                    index + 1
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200"
                                }`}
                            >
                                {index + 1}
                            </button>

                        )
                    )}

                </div>

            )}

        </div>

    );

}