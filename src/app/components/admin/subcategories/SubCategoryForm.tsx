"use client";

import { useEffect, useState } from "react";

interface Props {
    initialData?: any;
    categories: any[];
    onSubmit: (data: FormData) => Promise<void> | void;
    loading?: boolean;
}

export default function SubCategoryForm({
    initialData,
    categories,
    onSubmit,
    loading,
}: Props) {

    const [name, setName] = useState("");

    const [category, setCategory] = useState("");

    const [title, setTitle] =
        useState("");

    const [description, setDescription] =
        useState("");

    const [image, setImage] =
        useState<File | null>(null);

    const [preview, setPreview] =
        useState("");

    const [isFeatured, setIsFeatured] =
        useState(false);

    const [isActive, setIsActive] =
        useState(true);

    const [metaTitle, setMetaTitle] =
        useState("");

    const [metaDescription, setMetaDescription] =
        useState("");

    const [metaKeywords, setMetaKeywords] =
        useState("");

    const [canonicalUrl, setCanonicalUrl] =
        useState("");

    // ====================================
    // INITIAL DATA
    // ====================================

    useEffect(() => {

        if (!initialData) return;

        setName(initialData.name || "");

        setCategory(
            initialData.category?._id ||
            initialData.category ||
            ""
        );
        setTitle(
            initialData.Title || ""
        );

        setDescription(
            initialData.Description || ""
        );
        setPreview(initialData.image || "");

        setIsFeatured(
            initialData.isFeatured ?? false
        );

        setIsActive(
            initialData.isActive ?? true
        );

        setMetaTitle(
            initialData.seo?.metaTitle || ""
        );

        setMetaDescription(
            initialData.seo?.metaDescription || ""
        );

        setMetaKeywords(
            initialData.seo?.metaKeywords?.join(", ") || ""
        );

        setCanonicalUrl(
            initialData.seo?.canonicalUrl || ""
        );

    }, [initialData]);

    // ====================================
    // IMAGE
    // ====================================

    const handleImageChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {

        const file = e.target.files?.[0];

        if (!file) return;

        setImage(file);

        setPreview(
            URL.createObjectURL(file)
        );

    };

    // ====================================
    // SUBMIT
    // ====================================

    const handleSubmit = async (
        e: React.FormEvent
    ) => {

        e.preventDefault();

        const formData =
            new FormData();

        formData.append("name", name);

        formData.append(
            "category",
            category
        );

        formData.append(
            "Title",
            title
        );

        formData.append(
            "Description",
            description
        );
        formData.append(
            "isFeatured",
            String(isFeatured)
        );

        formData.append(
            "isActive",
            String(isActive)
        );

        formData.append(
            "metaTitle",
            metaTitle
        );

        formData.append(
            "metaDescription",
            metaDescription
        );

        formData.append(
            "metaKeywords",
            metaKeywords
        );

        formData.append(
            "canonicalUrl",
            canonicalUrl
        );

        if (image) {
            formData.append(
                "image",
                image
            );
        }

        await onSubmit(formData);

    };

    return (

        <form
            onSubmit={handleSubmit}
            className="space-y-8 rounded-2xl bg-white p-6 shadow-sm"
        >

            {/* BASIC */}

            <div className="grid gap-6 md:grid-cols-2">

                {/* NAME */}

                <div>

                    <label className="mb-2 block text-sm font-semibold">
                        Subcategory Name
                    </label>

                    <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        placeholder="Enter subcategory name"
                    />

                </div>

                {/* CATEGORY */}

                <div>

                    <label className="mb-2 block text-sm font-semibold">
                        Category
                    </label>

                    <select
                        required
                        value={category}
                        onChange={(e) =>
                            setCategory(e.target.value)
                        }
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    >

                        <option value="">
                            Select Category
                        </option>

                        {categories.map((item) => (

                            <option
                                key={item._id}
                                value={item._id}
                            >
                                {item.name}
                            </option>

                        ))}

                    </select>

                </div>

            </div>
            {/* TITLE + DESCRIPTION */}

            <div className="grid gap-6 md:grid-cols-2">

                {/* PAGE TITLE */}

                <div>

                    <label className="mb-2 block text-sm font-semibold">
                        Page Title
                    </label>

                    <input
                        type="text"
                        value={title}
                        onChange={(e) =>
                            setTitle(e.target.value)
                        }
                        placeholder="Enter page title"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
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
                    onChange={(e) =>
                        setDescription(e.target.value)
                    }
                    placeholder="Enter description"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />

            </div>
            {/* IMAGE */}

            <div>

                <label className="mb-2 block text-sm font-semibold">
                    Subcategory Image
                </label>

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />

                {preview && (

                    <img
                        src={preview}
                        alt="Preview"
                        className="mt-4 h-28 w-28 rounded-xl border object-cover"
                    />

                )}

            </div>

            {/* SWITCHES */}

            <div className="flex gap-6">

                <label className="flex items-center gap-3">

                    <input
                        type="checkbox"
                        checked={isFeatured}
                        onChange={(e) =>
                            setIsFeatured(
                                e.target.checked
                            )
                        }
                    />

                    Featured

                </label>

                <label className="flex items-center gap-3">

                    <input
                        type="checkbox"
                        checked={isActive}
                        onChange={(e) =>
                            setIsActive(
                                e.target.checked
                            )
                        }
                    />

                    Active

                </label>

            </div>

            {/* SEO */}

            <div className="space-y-5 rounded-xl border p-6">

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
                        value={metaTitle}
                        onChange={(e) =>
                            setMetaTitle(
                                e.target.value
                            )
                        }
                        placeholder="Enter meta title"
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
                        value={metaDescription}
                        onChange={(e) =>
                            setMetaDescription(
                                e.target.value
                            )
                        }
                        placeholder="Enter meta description"
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
                        value={metaKeywords}
                        onChange={(e) =>
                            setMetaKeywords(
                                e.target.value
                            )
                        }
                        placeholder="printer, hp printer"
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
                        value={canonicalUrl}
                        onChange={(e) =>
                            setCanonicalUrl(
                                e.target.value
                            )
                        }
                        placeholder="https://example.com/subcategory/printers"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />

                </div>

            </div>

            {/* SUBMIT */}

            <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
            >

                {loading
                    ? "Saving..."
                    : initialData
                        ? "Update Subcategory"
                        : "Create Subcategory"}

            </button>

        </form>

    );

}