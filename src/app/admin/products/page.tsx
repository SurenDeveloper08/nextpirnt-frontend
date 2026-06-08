// ===============================================
// app/admin/products/page.tsx
// ===============================================

"use client";

import Link from "next/link";
import axios from "axios";

import {
    useEffect,
    useState,
} from "react";

import toast from "react-hot-toast";

export default function ProductsPage() {

    const [products, setProducts] =
        useState<any[]>([]);

    const [loading, setLoading] =
        useState(true);

    const [search, setSearch] =
        useState("");

    const [page, setPage] =
        useState(1);

    const limit = 10;

    // =====================================
    // FETCH
    // =====================================

    const fetchProducts =
        async () => {

            try {

                const res =
                    await axios.get(
                        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/product/all`
                    );

                setProducts(
                    res.data.data
                );

            } catch (error) {

                toast.error(
                    "Failed to load products"
                );

            } finally {

                setLoading(false);

            }

        };

    useEffect(() => {
        fetchProducts();
    }, []);

    // =====================================
    // TOGGLE STATUS
    // =====================================

    const toggleStatus =
        async (
            id: string
        ) => {

            try {

                await axios.patch(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/product/status/${id}`
                );

                setProducts((prev) =>
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

            } catch {

                toast.error(
                    "Status update failed"
                );

            }

        };

    // =====================================
    // DELETE
    // =====================================

    const handleDelete =
        async (
            id: string
        ) => {

            if (
                !confirm(
                    "Delete product?"
                )
            )
                return;

            try {

                await axios.delete(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/product/${id}`
                );

                setProducts((prev) =>
                    prev.filter(
                        (item) =>
                            item._id !== id
                    )
                );

                toast.success(
                    "Product deleted"
                );

            } catch {

                toast.error(
                    "Delete failed"
                );

            }

        };

    // =====================================
    // SEARCH
    // =====================================

    const filtered =
        products.filter((item) =>
            item.name
                .toLowerCase()
                .includes(
                    search.toLowerCase()
                )
        );

    // PAGINATION

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

    // =====================================
    // LOADING
    // =====================================

    if (loading) {

        return (

            <div className="space-y-4">

                {[...Array(6)].map(
                    (_, i) => (
                        <div
                            key={i}
                            className="h-16 animate-pulse rounded bg-gray-100"
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
                    Products
                </h1>

                <Link
                    href="/admin/products/create"
                    className="rounded-xl bg-blue-600 px-5 py-3 text-white"
                >
                    Add Product
                </Link>

            </div>

            {/* SEARCH */}

            <input
                placeholder="Search product..."
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
                                Product
                            </th>

                            <th className="p-4 text-left">
                                SKU
                            </th>

                            <th className="p-4 text-left">
                                Price
                            </th>

                            <th className="p-4 text-left">
                                Stock
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

                        {paginated.map(
                            (item) => (

                                <tr
                                    key={item._id}
                                    className="border-t"
                                >

                                    <td className="p-4">

                                        <img
                                            src={item.image}
                                            className="h-14 w-14 rounded-xl object-cover"
                                        />

                                    </td>

                                    <td className="p-4">

                                        <h3 className="font-semibold">
                                            {item.name}
                                        </h3>

                                        <p className="text-sm text-gray-500">
                                            {
                                                item
                                                    .category
                                                    ?.name
                                            }
                                        </p>

                                    </td>

                                    <td className="p-4">
                                        {item.sku}
                                    </td>

                                    <td className="p-4">
                                        AED {item.price}
                                    </td>

                                    <td className="p-4">
                                        {item.stock}
                                    </td>

                                    {/* STATUS */}

                                    <td className="p-4">

                                        <button
                                            onClick={() =>
                                                toggleStatus(
                                                    item._id
                                                )
                                            }
                                            className={`relative flex h-7 w-14 items-center rounded-full p-1 transition ${item.isActive
                                                    ? "bg-green-500"
                                                    : "bg-gray-300"
                                                }`}
                                        >

                                            <div
                                                className={`h-5 w-5 rounded-full bg-white shadow-md transition ${item.isActive
                                                        ? "translate-x-7"
                                                        : ""
                                                    }`}
                                            />

                                        </button>

                                    </td>

                                    {/* ACTION */}

                                    <td className="flex gap-4 p-4">

                                        <Link
                                            href={`/admin/products/edit/${item._id}`}
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

            {/* PAGINATION */}

            <div className="flex justify-center gap-2">

                {[...Array(totalPages)].map(
                    (_, i) => (

                        <button
                            key={i}
                            onClick={() =>
                                setPage(
                                    i + 1
                                )
                            }
                            className={`rounded px-3 py-1 ${page === i + 1
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-200"
                                }`}
                        >
                            {i + 1}
                        </button>

                    )
                )}

            </div>

        </div>

    );

}