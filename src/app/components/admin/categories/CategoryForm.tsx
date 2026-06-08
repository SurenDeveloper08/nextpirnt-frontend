"use client";

import { useEffect, useState } from "react";

interface Props {
    initialData?: any;
    onSubmit: (data: FormData) => Promise<void> | void;
    loading?: boolean;
}

export default function CategoryForm({
    initialData,
    onSubmit,
    loading,
}: Props) {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState("");

    const [isFeatured, setIsFeatured] = useState(false);
    const [isActive, setIsActive] = useState(true);

    const [metaTitle, setMetaTitle] = useState("");
    const [metaDescription, setMetaDescription] = useState("");
    const [metaKeywords, setMetaKeywords] = useState("");
    const [canonicalUrl, setCanonicalUrl] = useState("");

    // ✅ SET INITIAL DATA (EDIT MODE SAFE)
    useEffect(() => {
        if (!initialData) return;

        setName(initialData.name || "");
        setTitle(initialData.Title || initialData.title || "");
        setDescription(initialData.Description || initialData.description || "");
        setPreview(initialData.image || "");

        setIsFeatured(initialData.isFeatured ?? false);
        setIsActive(initialData.isActive ?? true);

        setMetaTitle(initialData.seo?.metaTitle || "");
        setMetaDescription(initialData.seo?.metaDescription || "");
        setMetaKeywords(
            initialData.seo?.metaKeywords?.join(", ") || ""
        );
        setCanonicalUrl(initialData.seo?.canonicalUrl || "");
    }, [initialData]);

    // ✅ IMAGE HANDLER
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setImage(file);
        setPreview(URL.createObjectURL(file));
    };

    // ✅ SUBMIT
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("name", name);
        formData.append("Title", title);
        formData.append("Description", description);

        formData.append("isFeatured", String(isFeatured));
        formData.append("isActive", String(isActive));

        formData.append("metaTitle", metaTitle);
        formData.append("metaDescription", metaDescription);

        // backend expects comma string → splits into array
        formData.append("metaKeywords", metaKeywords);

        formData.append("canonicalUrl", canonicalUrl);

        if (image) {
            formData.append("image", image);
        }


        await onSubmit(formData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-8 rounded-2xl bg-white p-6 shadow-sm"
        >
            {/* BASIC INFO */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <label className="mb-2 block text-sm font-semibold">
                        Category Name
                    </label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl border px-4 py-3"
                        required
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-semibold">
                        Page Title
                    </label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full rounded-xl border px-4 py-3"
                    />
                </div>
            </div>

            {/* DESCRIPTION */}
            <div>
                <label className="mb-2 block text-sm font-semibold">
                    Description
                </label>
                <textarea
                    rows={5}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full rounded-xl border px-4 py-3"
                />
            </div>

            {/* IMAGE */}
            <div>
                <label className="mb-2 block text-sm font-semibold">
                    Category Image
                </label>

                <input type="file" accept="image/*" onChange={handleImageChange} />

                {preview && (
                    <img
                        src={preview}
                        className="mt-4 h-28 w-28 rounded-xl object-cover border"
                    />
                )}
            </div>

            {/* SWITCHES */}
            <div className="flex gap-6">
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={isFeatured}
                        onChange={(e) => setIsFeatured(e.target.checked)}
                    />
                    Featured
                </label>

                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={isActive}
                        onChange={(e) => setIsActive(e.target.checked)}
                    />
                    Active
                </label>
            </div>

            {/* SEO */}
            {/* SEO */}
            <div className="border p-6 rounded-xl space-y-5">

                <h2 className="text-xl font-bold">
                    SEO Settings
                </h2>

                {/* META TITLE */}
                <div>
                    <label className="mb-2 block text-sm font-semibold">
                        Meta Title
                    </label>

                    <input
                        type="text"
                        placeholder="Enter meta title"
                        value={metaTitle}
                        onChange={(e) =>
                            setMetaTitle(e.target.value)
                        }
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                </div>

                {/* META DESCRIPTION */}
                <div>
                    <label className="mb-2 block text-sm font-semibold">
                        Meta Description
                    </label>

                    <textarea
                        rows={4}
                        placeholder="Enter meta description"
                        value={metaDescription}
                        onChange={(e) =>
                            setMetaDescription(
                                e.target.value
                            )
                        }
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                </div>

                {/* META KEYWORDS */}
                <div>
                    <label className="mb-2 block text-sm font-semibold">
                        Meta Keywords
                    </label>

                    <input
                        type="text"
                        placeholder="printer, hp printer, laser printer"
                        value={metaKeywords}
                        onChange={(e) =>
                            setMetaKeywords(
                                e.target.value
                            )
                        }
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                </div>

                {/* CANONICAL URL */}
                <div>
                    <label className="mb-2 block text-sm font-semibold">
                        Canonical URL
                    </label>

                    <input
                        type="text"
                        placeholder="https://example.com/category/printers"
                        value={canonicalUrl}
                        onChange={(e) =>
                            setCanonicalUrl(
                                e.target.value
                            )
                        }
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                </div>

            </div>
            {/* SUBMIT */}
            <button
                disabled={loading}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl"
            >
                {loading ? "Saving..." : initialData ? "Update" : "Create"}
            </button>
        </form>
    );
}