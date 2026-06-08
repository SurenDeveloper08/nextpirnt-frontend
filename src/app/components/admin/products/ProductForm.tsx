// ===============================================
// app/components/admin/products/ProductForm.tsx
// ===============================================

"use client";

import axios from "axios";

import {
    useEffect,
    useState,
} from "react";

interface Props {
    initialData?: any;
    onSubmit: (
        data: FormData
    ) => Promise<void> | void;
    loading?: boolean;
}

export default function ProductForm({
    initialData,
    onSubmit,
    loading,
}: Props) {

    const [categories, setCategories] =
        useState<any[]>([]);

    const [subCategories, setSubCategories] =
        useState<any[]>([]);

    const [brands, setBrands] =
        useState<any[]>([]);

    // BASIC
    const [name, setName] =
        useState("");

    const [
        shortDescription,
        setShortDescription,
    ] = useState("");

    const [description, setDescription] =
        useState("");

    const [category, setCategory] =
        useState("");

    const [subCategory, setSubCategory] =
        useState("");

    const [brand, setBrand] =
        useState("");

    const [sku, setSku] =
        useState("");

    const [price, setPrice] =
        useState("");

    const [salePrice, setSalePrice] =
        useState("");

    const [stock, setStock] =
        useState("");

    const [
        lowStockAlert,
        setLowStockAlert,
    ] = useState("5");

    // IMAGES
    const [image, setImage] =
        useState<File | null>(null);

    const [preview, setPreview] =
        useState("");

    const [galleryImages, setGalleryImages] =
        useState<File[]>([]);

    const [galleryPreview, setGalleryPreview] =
        useState<string[]>([]);

    // FEATURES
    const [features, setFeatures] =
        useState("");

    const [tags, setTags] =
        useState("");

    // SPECIFICATIONS
    const [
        specifications,
        setSpecifications,
    ] = useState([
        {
            title: "",
            value: "",
        },
    ]);

    // STATUS
    const [isFeatured, setIsFeatured] =
        useState(false);

    const [isActive, setIsActive] =
        useState(true);

    // SEO
    const [metaTitle, setMetaTitle] =
        useState("");

    const [
        metaDescription,
        setMetaDescription,
    ] = useState("");

    const [
        metaKeywords,
        setMetaKeywords,
    ] = useState("");

    const [
        canonicalUrl,
        setCanonicalUrl,
    ] = useState("");

    // =====================================
    // FETCH DATA
    // =====================================

    useEffect(() => {
        fetchCategories();
        fetchBrands();
    }, []);

    const fetchCategories =
        async () => {
            const res =
                await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/website/all`
                );

            setCategories(res.data.data);
        };

    const fetchBrands =
        async () => {
            const res =
                await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/brand/all`
                );

            setBrands(res.data.data);
        };

    // =====================================
    // FETCH SUBCATEGORIES
    // =====================================

    useEffect(() => {

        if (!category) return;

        fetchSubCategories();

    }, [category]);

    const fetchSubCategories =
        async () => {

            const res =
                await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/subcategories/category/${category}`
                );

            setSubCategories(
                res.data.data
            );

        };

    // =====================================
    // EDIT MODE
    // =====================================

    useEffect(() => {

        if (!initialData) return;

        setName(initialData.name || "");

        setShortDescription(
            initialData.shortDescription || ""
        );

        setDescription(
            initialData.description || ""
        );

        setCategory(
            initialData.category?._id || ""
        );

        setSubCategory(
            initialData.subCategory?._id || ""
        );

        setBrand(
            initialData.brand?._id || ""
        );

        setSku(initialData.sku || "");

        setPrice(
            initialData.price || ""
        );

        setSalePrice(
            initialData.salePrice || ""
        );

        setStock(
            initialData.stock || ""
        );

        setLowStockAlert(
            initialData.lowStockAlert || "5"
        );

        setPreview(
            initialData.image || ""
        );

        setGalleryPreview(
            initialData.images || []
        );

        setFeatures(
            initialData.features?.join(", ") ||
            ""
        );

        setTags(
            initialData.tags?.join(", ") || ""
        );

        setSpecifications(
            initialData.specifications?.length
                ? initialData.specifications
                : [
                    {
                        title: "",
                        value: "",
                    },
                ]
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
            initialData.seo?.metaDescription ||
            ""
        );

        setMetaKeywords(
            initialData.seo?.metaKeywords?.join(
                ", "
            ) || ""
        );

        setCanonicalUrl(
            initialData.seo?.canonicalUrl ||
            ""
        );

    }, [initialData]);

    // =====================================
    // IMAGE
    // =====================================

    const handleImage =
        (
            e: React.ChangeEvent<HTMLInputElement>
        ) => {

            const file =
                e.target.files?.[0];

            if (!file) return;

            setImage(file);

            setPreview(
                URL.createObjectURL(file)
            );

        };

    // =====================================
    // GALLERY
    // =====================================

    const handleGallery = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {

        const files = Array.from(
            e.target.files || []
        );

        // APPEND FILES
        setGalleryImages((prev) => [
            ...prev,
            ...files,
        ]);

        // APPEND PREVIEWS
        const previews = files.map((file) =>
            URL.createObjectURL(file)
        );

        setGalleryPreview((prev) => [
            ...prev,
            ...previews,
        ]);

    };

    const removeGalleryImage = (
        index: number
    ) => {

        setGalleryPreview((prev) =>
            prev.filter((_, i) => i !== index)
        );

        setGalleryImages((prev) =>
            prev.filter((_, i) => i !== index)
        );

    };
    // =====================================
    // SPECIFICATION
    // =====================================

    const addSpecification =
        () => {

            setSpecifications([
                ...specifications,
                {
                    title: "",
                    value: "",
                },
            ]);

        };

    const updateSpecification =
        (
            index: number,
            field: string,
            value: string
        ) => {

            const updated = [...specifications];

            updated[index] = {
                ...updated[index],
                [field]: value,
            };

            setSpecifications(updated);

        };

    const removeSpecification =
        (index: number) => {

            const updated =
                specifications.filter(
                    (_, i) => i !== index
                );

            setSpecifications(updated);

        };

    // =====================================
    // SUBMIT
    // =====================================

    const handleSubmit =
        async (
            e: React.FormEvent
        ) => {

            e.preventDefault();

            const formData =
                new FormData();

            formData.append(
                "name",
                name
            );

            formData.append(
                "shortDescription",
                shortDescription
            );

            formData.append(
                "description",
                description
            );

            formData.append(
                "category",
                category
            );

            formData.append(
                "subCategory",
                subCategory
            );

            formData.append(
                "brand",
                brand
            );

            formData.append(
                "sku",
                sku
            );

            formData.append(
                "price",
                price
            );

            formData.append(
                "salePrice",
                salePrice
            );

            formData.append(
                "stock",
                stock
            );

            formData.append(
                "lowStockAlert",
                lowStockAlert
            );

            formData.append(
                "features",
                features
            );

            formData.append(
                "tags",
                tags
            );

            formData.append(
                "specifications",
                JSON.stringify(
                    specifications
                )
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

            galleryImages.forEach(
                (img) => {
                    formData.append(
                        "images",
                        img
                    );
                }
            );

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
                    <label className="mb-2 block font-medium">
                        Product Name
                    </label>

                    <input
                        value={name}
                        onChange={(e) =>
                            setName(
                                e.target.value
                            )
                        }
                        className="w-full rounded-xl border px-4 py-3"
                        required
                    />
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        SKU
                    </label>

                    <input
                        value={sku}
                        onChange={(e) =>
                            setSku(
                                e.target.value
                            )
                        }
                        className="w-full rounded-xl border px-4 py-3"
                        required
                    />
                </div>

            </div>

            {/* SHORT DESC */}

            <div>
                <label className="mb-2 block font-medium">
                    Short Description
                </label>

                <textarea
                    rows={3}
                    value={shortDescription}
                    onChange={(e) =>
                        setShortDescription(
                            e.target.value
                        )
                    }
                    className="w-full rounded-xl border px-4 py-3"
                />
            </div>

            {/* DESCRIPTION */}

            <div>
                <label className="mb-2 block font-medium">
                    Description
                </label>

                <textarea
                    rows={5}
                    value={description}
                    onChange={(e) =>
                        setDescription(
                            e.target.value
                        )
                    }
                    className="w-full rounded-xl border px-4 py-3"
                />
            </div>

            {/* CATEGORY */}

            <div className="grid gap-6 md:grid-cols-3">

                <div>
                    <label className="mb-2 block font-medium">
                        Category
                    </label>

                    <select
                        value={category}
                        onChange={(e) =>
                            setCategory(
                                e.target.value
                            )
                        }
                        className="w-full rounded-xl border px-4 py-3"
                        required
                    >
                        <option value="">
                            Select
                        </option>

                        {categories.map(
                            (item) => (
                                <option
                                    key={item._id}
                                    value={item._id}
                                >
                                    {item.name}
                                </option>
                            )
                        )}
                    </select>
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        SubCategory
                    </label>

                    <select
                        value={subCategory}
                        onChange={(e) =>
                            setSubCategory(
                                e.target.value
                            )
                        }
                        className="w-full rounded-xl border px-4 py-3"
                    >
                        <option value="">
                            Select
                        </option>

                        {subCategories.map(
                            (item) => (
                                <option
                                    key={item._id}
                                    value={item._id}
                                >
                                    {item.name}
                                </option>
                            )
                        )}
                    </select>
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        Brand
                    </label>

                    <select
                        value={brand}
                        onChange={(e) =>
                            setBrand(
                                e.target.value
                            )
                        }
                        className="w-full rounded-xl border px-4 py-3"
                        required
                    >
                        <option value="">
                            Select
                        </option>

                        {brands.map(
                            (item) => (
                                <option
                                    key={item._id}
                                    value={item._id}
                                >
                                    {item.name}
                                </option>
                            )
                        )}
                    </select>
                </div>

            </div>

            {/* PRICE */}

            <div className="grid gap-6 md:grid-cols-4">

                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) =>
                        setPrice(
                            e.target.value
                        )
                    }
                    className="rounded-xl border px-4 py-3"
                />

                <input
                    type="number"
                    placeholder="Sale Price"
                    value={salePrice}
                    onChange={(e) =>
                        setSalePrice(
                            e.target.value
                        )
                    }
                    className="rounded-xl border px-4 py-3"
                />

                <input
                    type="number"
                    placeholder="Stock"
                    value={stock}
                    onChange={(e) =>
                        setStock(
                            e.target.value
                        )
                    }
                    className="rounded-xl border px-4 py-3"
                />

                <input
                    type="number"
                    placeholder="Low Stock Alert"
                    value={lowStockAlert}
                    onChange={(e) =>
                        setLowStockAlert(
                            e.target.value
                        )
                    }
                    className="rounded-xl border px-4 py-3"
                />

            </div>

            {/* IMAGE */}

            <div>

                <label className="mb-2 block font-medium">
                    Main Image
                </label>

                <input
                    type="file"
                    onChange={handleImage}
                />

                {preview && (
                    <img
                        src={preview}
                        className="mt-4 h-28 w-28 rounded-xl object-cover border"
                    />
                )}

            </div>

            {/* GALLERY */}

            <div className="space-y-4">

                <div className="flex items-center justify-between">

                    <label className="block font-medium">
                        Gallery Images
                    </label>

                    <label className="cursor-pointer rounded-xl bg-blue-600 px-4 py-2 text-sm text-white">

                        Upload Images

                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleGallery}
                            className="hidden"
                        />

                    </label>

                </div>

                {/* PREVIEW GRID */}

                {galleryPreview.length > 0 && (

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">

                        {galleryPreview.map((img, index) => (

                            <div
                                key={index}
                                className="relative"
                            >

                                {/* IMAGE CARD */}

                                <div className="aspect-square overflow-hidden rounded-2xl border bg-white shadow-sm">

                                    <img
                                        src={img}
                                        alt={`Gallery ${index}`}
                                        className="h-full w-full object-cover"
                                    />

                                </div>

                                {/* REMOVE BUTTON */}

                                <button
                                    type="button"
                                    onClick={() =>
                                        removeGalleryImage(index)
                                    }
                                    className="
            absolute
            right-2
            top-2
            z-20
            flex
            h-7
            w-7
            items-center
            justify-center
            rounded-full
            bg-red-500
            text-white
            text-sm
            shadow-lg
            transition-all
            duration-200
            hover:bg-red-600
            hover:scale-105
        "
                                >
                                    ✕
                                </button>

                            </div>

                        ))}

                    </div>

                )}

            </div>

            {/* FEATURES */}

            <div className="grid gap-6 md:grid-cols-2">

                <input
                    placeholder="Features comma separated"
                    value={features}
                    onChange={(e) =>
                        setFeatures(
                            e.target.value
                        )
                    }
                    className="rounded-xl border px-4 py-3"
                />

                <input
                    placeholder="Tags comma separated"
                    value={tags}
                    onChange={(e) =>
                        setTags(
                            e.target.value
                        )
                    }
                    className="rounded-xl border px-4 py-3"
                />

            </div>

            {/* SPECIFICATIONS */}

            <div className="space-y-4">

                <div className="flex items-center justify-between">

                    <h2 className="text-xl font-bold">
                        Specifications
                    </h2>

                    <button
                        type="button"
                        onClick={addSpecification}
                        className="rounded-lg bg-blue-600 px-4 py-2 text-white"
                    >
                        Add
                    </button>

                </div>

                {specifications.map(
                    (item, index) => (
                        <div
                            key={index}
                            className="grid gap-4 md:grid-cols-3"
                        >

                            <input
                                placeholder="Title"
                                value={item.title}
                                onChange={(e) =>
                                    updateSpecification(
                                        index,
                                        "title",
                                        e.target.value
                                    )
                                }
                                className="rounded-xl border px-4 py-3"
                            />

                            <input
                                placeholder="Value"
                                value={item.value}
                                onChange={(e) =>
                                    updateSpecification(
                                        index,
                                        "value",
                                        e.target.value
                                    )
                                }
                                className="rounded-xl border px-4 py-3"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    removeSpecification(
                                        index
                                    )
                                }
                                className="rounded-xl bg-red-500 px-4 py-3 text-white"
                            >
                                Remove
                            </button>

                        </div>
                    )
                )}

            </div>

            {/* SWITCH */}

            <div className="flex gap-6">

                <label className="flex items-center gap-2">

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

                <label className="flex items-center gap-2">

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

            <div className="space-y-4 rounded-xl border p-6">

                <h2 className="text-xl font-bold">
                    SEO
                </h2>

                <input
                    placeholder="Meta Title"
                    value={metaTitle}
                    onChange={(e) =>
                        setMetaTitle(
                            e.target.value
                        )
                    }
                    className="w-full rounded-xl border px-4 py-3"
                />

                <textarea
                    rows={4}
                    placeholder="Meta Description"
                    value={metaDescription}
                    onChange={(e) =>
                        setMetaDescription(
                            e.target.value
                        )
                    }
                    className="w-full rounded-xl border px-4 py-3"
                />

                <input
                    placeholder="Meta Keywords"
                    value={metaKeywords}
                    onChange={(e) =>
                        setMetaKeywords(
                            e.target.value
                        )
                    }
                    className="w-full rounded-xl border px-4 py-3"
                />

                <input
                    placeholder="Canonical URL"
                    value={canonicalUrl}
                    onChange={(e) =>
                        setCanonicalUrl(
                            e.target.value
                        )
                    }
                    className="w-full rounded-xl border px-4 py-3"
                />

            </div>

            {/* SUBMIT */}

            <button
                disabled={loading}
                className="rounded-xl bg-blue-600 px-6 py-3 text-white"
            >
                {loading
                    ? "Saving..."
                    : initialData
                        ? "Update Product"
                        : "Create Product"}
            </button>

        </form>

    );

}