"use client";

import { useEffect, useState } from "react";

interface FAQ {
    question: string;
    answer: string;
}

interface Props {
    initialData?: any;
    onSubmit: (data: FormData) => Promise<void>;
    loading?: boolean;
}

export default function ServiceForm({
    initialData,
    onSubmit,
    loading,
}: Props) {

    const [name, setName] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [description, setDescription] = useState("");

    const [image, setImage] =
        useState<File | null>(null);

    const [preview, setPreview] =
        useState("");

    const [features, setFeatures] =
        useState("");

    const [benefits, setBenefits] =
        useState("");

    const [displayOrder, setDisplayOrder] =
        useState("0");

    const [faq, setFaq] = useState<FAQ[]>([
        {
            question: "",
            answer: "",
        },
    ]);

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

    useEffect(() => {

        if (!initialData) return;

        setName(initialData.name || "");
        setShortDescription(initialData.shortDescription || "");
        setDescription(initialData.description || "");

        setPreview(initialData.image || "");

        setFeatures(
            initialData.features?.join(", ") || ""
        );

        setBenefits(
            initialData.benefits?.join(", ") || ""
        );

        setDisplayOrder(
            String(initialData.displayOrder || 0)
        );

        setFaq(
            initialData.faq?.length
                ? initialData.faq
                : [{ question: "", answer: "" }]
        );

        setIsFeatured(
            initialData.isFeatured || false
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

    const handleImage = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {

        const file = e.target.files?.[0];

        if (!file) return;

        setImage(file);

        setPreview(
            URL.createObjectURL(file)
        );

    };

    const addFaq = () => {

        setFaq([
            ...faq,
            {
                question: "",
                answer: "",
            },
        ]);

    };

    const updateFaq = (
        index: number,
        field: keyof FAQ,
        value: string
    ) => {

        const updated = [...faq];

        updated[index] = {
            ...updated[index],
            [field]: value,
        };

        setFaq(updated);

    };

    const removeFaq = (
        index: number
    ) => {

        setFaq(
            faq.filter(
                (_, i) => i !== index
            )
        );

    };

    const submitHandler = async (
        e: React.FormEvent
    ) => {

        e.preventDefault();

        const formData =
            new FormData();

        formData.append("name", name);
        formData.append(
            "shortDescription",
            shortDescription
        );

        formData.append(
            "description",
            description
        );

        formData.append(
            "features",
            features
        );

        formData.append(
            "benefits",
            benefits
        );

        formData.append(
            "displayOrder",
            displayOrder
        );

        formData.append(
            "faq",
            JSON.stringify(faq)
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
            onSubmit={submitHandler}
            className="space-y-6 rounded-xl bg-white p-6 shadow"
        >
            <input
                value={name}
                onChange={(e) =>
                    setName(e.target.value)
                }
                placeholder="Service Name"
                className="w-full rounded-xl border p-3"
                required
            />

            <textarea
                value={shortDescription}
                onChange={(e) =>
                    setShortDescription(
                        e.target.value
                    )
                }
                placeholder="Short Description"
                className="w-full rounded-xl border p-3"
            />

            <textarea
                rows={6}
                value={description}
                onChange={(e) =>
                    setDescription(
                        e.target.value
                    )
                }
                placeholder="Description"
                className="w-full rounded-xl border p-3"
            />

            <input
                type="file"
                onChange={handleImage}
            />

            {preview && (
                <img
                    src={preview}
                    className="h-32 w-32 rounded-xl object-cover border"
                />
            )}

            <input
                value={features}
                onChange={(e) =>
                    setFeatures(
                        e.target.value
                    )
                }
                placeholder="Features comma separated"
                className="w-full rounded-xl border p-3"
            />

            <input
                value={benefits}
                onChange={(e) =>
                    setBenefits(
                        e.target.value
                    )
                }
                placeholder="Benefits comma separated"
                className="w-full rounded-xl border p-3"
            />

            <input
                type="number"
                value={displayOrder}
                onChange={(e) =>
                    setDisplayOrder(
                        e.target.value
                    )
                }
                placeholder="Display Order"
                className="w-full rounded-xl border p-3"
            />

            <div className="space-y-4">
                <div className="flex justify-between">
                    <h2 className="font-bold">
                        FAQs
                    </h2>

                    <button
                        type="button"
                        onClick={addFaq}
                        className="rounded bg-blue-600 px-4 py-2 text-white"
                    >
                        Add FAQ
                    </button>
                </div>

                {faq.map((item, index) => (
                    <div
                        key={index}
                        className="space-y-2 rounded"
                    >
                        <input
                            value={item.question}
                            onChange={(e) =>
                                updateFaq(
                                    index,
                                    "question",
                                    e.target.value
                                )
                            }
                            placeholder="Question"
                            className="w-full rounded border px-4 py-3"
                        />

                        <textarea
                            value={item.answer}
                            onChange={(e) =>
                                updateFaq(
                                    index,
                                    "answer",
                                    e.target.value
                                )
                            }
                            placeholder="Answer"
                            className="w-full rounded border px-4 py-3"
                        />

                        <button
                            type="button"
                            onClick={() =>
                                removeFaq(index)
                            }
                            className="rounded bg-red-500 px-3 py-2 text-white"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>

            <div className="flex gap-6">
                <label>
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

                <label>
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

            <div className="space-y-4 border rounded-xl p-4">
                <h3 className="font-bold">
                    SEO
                </h3>

                <input
                    value={metaTitle}
                    onChange={(e) =>
                        setMetaTitle(
                            e.target.value
                        )
                    }
                    placeholder="Meta Title"
                    className="w-full rounded border p-3"
                />

                <textarea
                    value={metaDescription}
                    onChange={(e) =>
                        setMetaDescription(
                            e.target.value
                        )
                    }
                    placeholder="Meta Description"
                    className="w-full rounded border p-3"
                />

                <input
                    value={metaKeywords}
                    onChange={(e) =>
                        setMetaKeywords(
                            e.target.value
                        )
                    }
                    placeholder="Meta Keywords"
                    className="w-full rounded border p-3"
                />

                <input
                    value={canonicalUrl}
                    onChange={(e) =>
                        setCanonicalUrl(
                            e.target.value
                        )
                    }
                    placeholder="Canonical URL"
                    className="w-full rounded border p-3"
                />
            </div>

            <button
                disabled={loading}
                className="rounded-xl bg-blue-600 px-6 py-3 text-white"
            >
                {loading
                    ? "Saving..."
                    : initialData
                        ? "Update Service"
                        : "Create Service"}
            </button>
        </form>
    );
}