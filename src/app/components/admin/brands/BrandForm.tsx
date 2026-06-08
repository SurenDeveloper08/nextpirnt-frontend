"use client";

import { useEffect, useState } from "react";

interface Props {
    initialData?: any;
    onSubmit: (data: FormData) => Promise<void> | void;
    loading?: boolean;
}

export default function BrandForm({
    initialData,
    onSubmit,
    loading,
}: Props) {

    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState("");

    const [isActive, setIsActive] = useState(true);

    const [metaTitle, setMetaTitle] = useState("");
    const [metaDescription, setMetaDescription] = useState("");
    const [metaKeywords, setMetaKeywords] = useState("");
    const [canonicalUrl, setCanonicalUrl] = useState("");

    useEffect(() => {

        if (!initialData) return;

        setName(initialData.name || "");
        setTitle(initialData.Title || "");
        setDescription(initialData.Description || "");

        setPreview(initialData.image || "");

        setIsActive(initialData.isActive ?? true);

        setMetaTitle(initialData.seo?.metaTitle || "");
        setMetaDescription(initialData.seo?.metaDescription || "");

        setMetaKeywords(
            initialData.seo?.metaKeywords?.join(", ") || ""
        );

        setCanonicalUrl(
            initialData.seo?.canonicalUrl || ""
        );

    }, [initialData]);

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

    const handleSubmit = async (
        e: React.FormEvent
    ) => {

        e.preventDefault();

        const formData = new FormData();

        formData.append("name", name);
        formData.append("Title", title);
        formData.append("Description", description);

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

                <div>

                    <label className="mb-2 block text-sm font-semibold">
                        Brand Name
                    </label>

                    <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                        className="w-full rounded-xl border px-4 py-3"
                    />

                </div>

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
                    onChange={(e) =>
                        setDescription(e.target.value)
                    }
                    className="w-full rounded-xl border px-4 py-3"
                />

            </div>

            {/* IMAGE */}

            <div>

                <label className="mb-2 block text-sm font-semibold">
                    Brand Image
                </label>

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />

                {preview && (

                    <img
                        src={preview}
                        className="mt-4 h-28 w-28 rounded-xl border object-cover"
                    />

                )}

            </div>

            {/* STATUS */}

            <div className="flex items-center gap-3">

                <button
                    type="button"
                    onClick={() =>
                        setIsActive(!isActive)
                    }
                    className={`relative h-7 w-14 rounded-full transition ${
                        isActive
                            ? "bg-green-500"
                            : "bg-gray-300"
                    }`}
                >

                    <div
                        className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                            isActive
                                ? "left-8"
                                : "left-1"
                        }`}
                    />

                </button>

                <span className="font-medium">
                    {isActive
                        ? "Active"
                        : "Inactive"}
                </span>

            </div>

            {/* SEO */}

            <div className="space-y-5 rounded-xl border p-6">

                <h2 className="text-xl font-bold">
                    SEO Settings
                </h2>

                <div>

                    <label className="mb-2 block text-sm font-semibold">
                        Meta Title
                    </label>

                    <input
                        type="text"
                        value={metaTitle}
                        onChange={(e) =>
                            setMetaTitle(e.target.value)
                        }
                        className="w-full rounded-xl border px-4 py-3"
                    />

                </div>

                <div>

                    <label className="mb-2 block text-sm font-semibold">
                        Meta Description
                    </label>

                    <textarea
                        rows={4}
                        value={metaDescription}
                        onChange={(e) =>
                            setMetaDescription(e.target.value)
                        }
                        className="w-full rounded-xl border px-4 py-3"
                    />

                </div>

                <div>

                    <label className="mb-2 block text-sm font-semibold">
                        Meta Keywords
                    </label>

                    <input
                        type="text"
                        value={metaKeywords}
                        onChange={(e) =>
                            setMetaKeywords(e.target.value)
                        }
                        className="w-full rounded-xl border px-4 py-3"
                    />

                </div>

                <div>

                    <label className="mb-2 block text-sm font-semibold">
                        Canonical URL
                    </label>

                    <input
                        type="text"
                        value={canonicalUrl}
                        onChange={(e) =>
                            setCanonicalUrl(e.target.value)
                        }
                        className="w-full rounded-xl border px-4 py-3"
                    />

                </div>

            </div>

            {/* SUBMIT */}

            <button
                disabled={loading}
                className="rounded-xl bg-blue-600 px-6 py-3 text-white"
            >
                {loading
                    ? "Saving..."
                    : initialData
                    ? "Update Brand"
                    : "Create Brand"}
            </button>

        </form>

    );

}