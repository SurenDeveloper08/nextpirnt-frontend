"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface Contact {
    _id: string;
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    createdAt: string;
}

export default function ContactPage() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);

    const limit = 10;

    const fetchContacts = async () => {
        try {
            setLoading(true);

            const { data } = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/contact`
            );

            setContacts(data.data || []);
        } catch (error) {
            console.error(error);
            toast.error("Failed to load contacts");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    const handleDelete = async (id: string) => {
        if (!window.confirm("Delete this enquiry?")) return;

        try {
            await axios.delete(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/contact/${id}`
            );

            setContacts((prev) =>
                prev.filter((item) => item._id !== id)
            );

            toast.success("Enquiry deleted successfully");
        } catch (error) {
            toast.error("Delete failed");
        }
    };

    const filteredContacts = contacts.filter(
        (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.email.toLowerCase().includes(search.toLowerCase()) ||
            item.subject.toLowerCase().includes(search.toLowerCase())
    );

    const startIndex = (page - 1) * limit;
    const paginatedContacts = filteredContacts.slice(
        startIndex,
        startIndex + limit
    );

    const totalPages = Math.ceil(filteredContacts.length / limit);

    if (loading) {
        return (
            <div className="space-y-4">
                <div className="h-10 w-52 animate-pulse rounded-lg bg-gray-200" />

                {[...Array(6)].map((_, index) => (
                    <div
                        key={index}
                        className="h-16 animate-pulse rounded-xl bg-gray-100"
                    />
                ))}
            </div>
        );
    }

    return (
        <div className="space-y-6">

            {/* Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <h1 className="text-2xl md:text-3xl font-bold">
                    Contact Enquiries
                </h1>

                <div className="rounded-xl bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                    Total Enquiries: {contacts.length}
                </div>
            </div>

            {/* Search */}
            <input
                type="text"
                placeholder="Search by name, email or subject..."
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                }}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />

            {/* Contacts List */}
            <div className="grid gap-5">
                {paginatedContacts.length === 0 ? (
                    <div className="rounded-2xl border bg-white p-10 text-center text-gray-500">
                        No enquiries found.
                    </div>
                ) : (
                    paginatedContacts.map((contact) => (
                        <div
                            key={contact._id}
                            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition"
                        >
                            {/* Top Section */}
                            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">

                                <div className="space-y-2">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {contact.name}
                                    </h3>

                                    <div className="flex flex-col gap-1 text-sm text-gray-600">
                                        <span>
                                            <strong>Email:</strong> {contact.email}
                                        </span>

                                        <span>
                                            <strong>Phone:</strong> {contact.phone}
                                        </span>

                                        <span>
                                            <strong>Subject:</strong> {contact.subject}
                                        </span>
                                    </div>
                                </div>

                                <div className="text-sm text-gray-500">
                                    {new Date(contact.createdAt).toLocaleString()}
                                </div>
                            </div>

                            {/* Message */}
                            <div className="mt-4 rounded-xl bg-gray-50 p-4">
                                <p className="whitespace-pre-wrap break-words text-gray-700">
                                    {contact.message}
                                </p>
                            </div>

                            {/* Actions */}
                            <div className="mt-4 flex justify-end">
                                <button
                                    onClick={() => handleDelete(contact._id)}
                                    className="rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-100"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex flex-wrap justify-center gap-2">
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setPage(index + 1)}
                            className={`h-10 min-w-[40px] rounded-lg px-3 transition ${page === index + 1
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-100 hover:bg-gray-200"
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}