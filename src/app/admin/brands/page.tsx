"use client";

import Link from "next/link";

import axios from "axios";

import {
    useEffect,
    useState,
} from "react";

import toast from "react-hot-toast";

export default function BrandsPage() {

    const [brands, setBrands] =
        useState<any[]>([]);

    const [loading, setLoading] =
        useState(true);

    const [search, setSearch] =
        useState("");

    // FETCH

    const fetchBrands = async () => {

        try {

            const res =
                await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/brand/all`
                );

            setBrands(
                res.data.data
            );

        } catch (error) {

            toast.error(
                "Failed to load brands"
            );

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {
        fetchBrands();
    }, []);

    // DELETE

    const handleDelete = async (
        id: string
    ) => {

        if (
            !confirm(
                "Delete this brand?"
            )
        ) return;

        try {

            await axios.delete(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/brand/${id}`
            );

            setBrands((prev) =>
                prev.filter(
                    (item) =>
                        item._id !== id
                )
            );

            toast.success(
                "Brand deleted"
            );

        } catch (error) {

            toast.error(
                "Delete failed"
            );

        }

    };

    // TOGGLE STATUS

    const toggleStatus = async (
        id: string
    ) => {

        try {

            await axios.patch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/brand/status/${id}`
            );

            setBrands((prev) =>
                prev.map((item) =>
                    item._id === id
                        ? {
                              ...item,
                              isActive:
                                  !item.isActive,
                          }
                        : item
                )
            );

            toast.success(
                "Status updated"
            );

        } catch (error) {

            toast.error(
                "Status update failed"
            );

        }

    };

    // SEARCH

    const filteredBrands =
        brands.filter((item) =>
            item.name
                .toLowerCase()
                .includes(
                    search.toLowerCase()
                )
        );

    // LOADING

    if (loading) {

        return (
            <div className="space-y-4">

                <div className="h-8 w-40 animate-pulse rounded bg-gray-200" />

                {[...Array(5)].map(
                    (_, i) => (
                        <div
                            key={i}
                            className="h-14 animate-pulse rounded bg-gray-100"
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

                <h1 className="text-3xl font-bold">
                    Brands
                </h1>

                <Link
                    href="/admin/brands/create"
                    className="rounded-xl bg-blue-600 px-5 py-3 text-white"
                >
                    Add Brand
                </Link>

            </div>

            {/* SEARCH */}

            <input
                type="text"
                placeholder="Search brand..."
                value={search}
                onChange={(e) =>
                    setSearch(
                        e.target.value
                    )
                }
                className="w-full rounded-xl border px-4 py-3"
            />

            {/* TABLE */}

            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

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
                                Status
                            </th>

                            <th className="p-4 text-left">
                                Actions
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {filteredBrands.map(
                            (item) => (

                                <tr
                                    key={item._id}
                                    className="border-t"
                                >

                                    <td className="p-4">

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-12 w-12 rounded-xl object-cover"
                                        />

                                    </td>

                                    <td className="p-4 font-medium">
                                        {item.name}
                                    </td>

                                    <td className="p-4 text-sm text-gray-500">
                                        {item.slug}
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

                                    <td className="flex gap-4 p-4">

                                        <Link
                                            href={`/admin/brands/edit/${item._id}`}
                                            className="text-blue-600"
                                        >
                                            Edit
                                        </Link>

                                        <button
                                            onClick={() =>
                                                handleDelete(
                                                    item._id
                                                )
                                            }
                                            className="text-red-600"
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                            )
                        )}

                    </tbody>

                </table>

            </div>

        </div>

    );

}