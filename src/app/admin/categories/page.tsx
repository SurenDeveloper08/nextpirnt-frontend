"use client";

import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function CategoriesPage() {

    const [categories, setCategories] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const limit = 10;

    // =========================
    // FETCH CATEGORIES
    // =========================
    const fetchCategories = async () => {
        try {
            setLoading(true);

            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/category/all`
            );

            setCategories(res.data.data);

        } catch (error) {
            console.log(error);
            toast.error("Failed to load categories");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    // =========================
    // TOGGLE STATUS
    // =========================
    const toggleStatus = async (id: string) => {
        try {
            await axios.patch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/category/status/${id}`
            );

            setCategories((prev) =>
                prev.map((item) =>
                    item._id === id
                        ? { ...item, isActive: !item.isActive }
                        : item
                )
            );

            toast.success("Status updated");

        } catch (error) {
            toast.error("Status update failed");
        }
    };

    // =========================
    // DELETE
    // =========================
    const handleDelete = async (id: string) => {
        if (!confirm("Delete category?")) return;

        try {
            await axios.delete(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/category/${id}`
            );

            setCategories((prev) =>
                prev.filter((item) => item._id !== id)
            );

            toast.success("Category deleted");

        } catch (error) {
            toast.error("Delete failed");
        }
    };

    // =========================
    // FILTER + SEARCH
    // =========================
    const filtered = categories.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    // PAGINATION
    const start = (page - 1) * limit;
    const paginated = filtered.slice(start, start + limit);
    const totalPages = Math.ceil(filtered.length / limit);

    // =========================
    // SKELETON
    // =========================
    if (loading) {
        return (
            <div className="space-y-4">
                <div className="h-8 w-1/3 bg-gray-200 animate-pulse rounded" />

                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="h-14 bg-gray-100 animate-pulse rounded"
                    />
                ))}
            </div>
        );
    }

    return (
        <div className="space-y-6">

            {/* HEADER */}
            <div className="flex items-center justify-between">

                <h1 className="text-3xl font-bold">
                    Categories
                </h1>

                <Link
                    href="/admin/categories/create"
                    className="rounded-xl bg-blue-600 px-5 py-3 text-white"
                >
                    Add Category
                </Link>

            </div>

            {/* SEARCH */}
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search category..."
                className="w-full rounded-xl border px-4 py-3"
            />

            {/* TABLE */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

                <table className="w-full">

                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-4 text-left">Image</th>
                            <th className="p-4 text-left">Name</th>
                            <th className="p-4 text-left">Slug</th>
                            <th className="p-4 text-left">Featured</th>
                            <th className="p-4 text-left">Status</th>
                            <th className="p-4 text-left">Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        {paginated.map((item) => (
                            <tr key={item._id} className="border-t">

                                {/* IMAGE */}
                                <td className="p-4">
                                    <img
                                        src={item.image}
                                        className="h-12 w-12 rounded-xl object-cover"
                                    />
                                </td>

                                {/* NAME */}
                                <td className="p-4 font-medium">
                                    {item.name}
                                </td>

                                {/* SLUG */}
                                <td className="p-4 text-sm text-gray-500">
                                    {item.slug}
                                </td>

                                {/* FEATURED */}
                                <td className="p-4">
                                    {item.isFeatured ? "Yes" : "No"}
                                </td>

                                {/* TOGGLE SWITCH */}
                                <td className="p-4">

                                    <button
                                        onClick={() => toggleStatus(item._id)}
                                        className={`relative w-14 h-7 flex items-center rounded-full p-1 transition ${
                                            item.isActive
                                                ? "bg-green-500"
                                                : "bg-gray-300"
                                        }`}
                                    >

                                        <div
                                            className={`w-5 h-5 bg-white rounded-full shadow-md transform transition ${
                                                item.isActive
                                                    ? "translate-x-7"
                                                    : ""
                                            }`}
                                        />

                                    </button>

                                </td>

                                {/* ACTIONS */}
                                <td className="p-4 flex gap-4">

                                    <Link
                                        href={`/admin/categories/edit/${item._id}`}
                                        className="text-blue-600"
                                    >
                                        Edit
                                    </Link>

                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="text-red-600"
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

            {/* PAGINATION */}
            <div className="flex gap-2 justify-center">

                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setPage(i + 1)}
                        className={`px-3 py-1 rounded ${
                            page === i + 1
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200"
                        }`}
                    >
                        {i + 1}
                    </button>
                ))}

            </div>

        </div>
    );
}