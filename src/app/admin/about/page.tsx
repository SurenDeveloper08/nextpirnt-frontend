"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function AboutPage() {
    const [loading, setLoading] = useState(false);

    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [description, setDescription] = useState("");
    const [vision, setVision] = useState("");
    const [mission, setMission] = useState("");

    const [experienceYears, setExperienceYears] = useState(0);
    const [customersServed, setCustomersServed] = useState(0);
    const [printersInstalled, setPrintersInstalled] = useState(0);
    const [supportAvailable, setSupportAvailable] = useState("24/7");

    const [metaTitle, setMetaTitle] = useState("");
    const [metaDescription, setMetaDescription] = useState("");
    const [metaKeywords, setMetaKeywords] = useState("");

    const [status, setStatus] = useState(true);

    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState("");

    useEffect(() => {
        fetchAbout();
    }, []);

    const fetchAbout = async () => {
        try {
            const { data } = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/about`
            );

            if (data.about) {
                const about = data.about;

                setTitle(about.title || "");
                setSubtitle(about.subtitle || "");
                setDescription(about.description || "");
                setVision(about.vision || "");
                setMission(about.mission || "");

                setExperienceYears(about.experienceYears || 0);
                setCustomersServed(about.customersServed || 0);
                setPrintersInstalled(about.printersInstalled || 0);
                setSupportAvailable(about.supportAvailable || "24/7");

                setMetaTitle(about.metaTitle || "");
                setMetaDescription(about.metaDescription || "");
                setMetaKeywords(about.metaKeywords || "");

                setStatus(about.status ?? true);

                setPreview(about.image || "");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const imageChangeHandler = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = e.target.files?.[0];

        if (!file) return;

        setImage(file);
        setPreview(URL.createObjectURL(file));
    };

    const submitHandler = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        try {
            setLoading(true);

            const formData = new FormData();

            formData.append("title", title);
            formData.append("subtitle", subtitle);
            formData.append("description", description);
            formData.append("vision", vision);
            formData.append("mission", mission);

            formData.append(
                "experienceYears",
                String(experienceYears)
            );

            formData.append(
                "customersServed",
                String(customersServed)
            );

            formData.append(
                "printersInstalled",
                String(printersInstalled)
            );

            formData.append(
                "supportAvailable",
                supportAvailable
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
                "status",
                String(status)
            );

            if (image) {
                formData.append("image", image);
            }

            const { data } = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/about`,
                formData
            );

            toast.success("About page updated");
        } catch (error: any) {
            toast.error(
                error?.response?.data?.message ||
                "Something went wrong"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">

            <h1 className="text-3xl font-bold">
                About Us Management
            </h1>

            <form
                onSubmit={submitHandler}
                className="bg-white p-6 rounded-2xl shadow-sm space-y-6"
            >
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) =>
                        setTitle(e.target.value)
                    }
                    className="w-full border rounded-xl px-4 py-3"
                />

                <input
                    type="text"
                    placeholder="Subtitle"
                    value={subtitle}
                    onChange={(e) =>
                        setSubtitle(e.target.value)
                    }
                    className="w-full border rounded-xl px-4 py-3"
                />

                <textarea
                    rows={6}
                    placeholder="Description"
                    value={description}
                    onChange={(e) =>
                        setDescription(e.target.value)
                    }
                    className="w-full border rounded-xl px-4 py-3"
                />

                <textarea
                    rows={4}
                    placeholder="Vision"
                    value={vision}
                    onChange={(e) =>
                        setVision(e.target.value)
                    }
                    className="w-full border rounded-xl px-4 py-3"
                />

                <textarea
                    rows={4}
                    placeholder="Mission"
                    value={mission}
                    onChange={(e) =>
                        setMission(e.target.value)
                    }
                    className="w-full border rounded-xl px-4 py-3"
                />

                <div className="grid md:grid-cols-3 gap-4">

                    <input
                        type="number"
                        placeholder="Experience Years"
                        value={experienceYears}
                        onChange={(e) =>
                            setExperienceYears(
                                Number(e.target.value)
                            )
                        }
                        className="border rounded-xl px-4 py-3"
                    />

                    <input
                        type="number"
                        placeholder="Customers Served"
                        value={customersServed}
                        onChange={(e) =>
                            setCustomersServed(
                                Number(e.target.value)
                            )
                        }
                        className="border rounded-xl px-4 py-3"
                    />

                    <input
                        type="number"
                        placeholder="Printers Installed"
                        value={printersInstalled}
                        onChange={(e) =>
                            setPrintersInstalled(
                                Number(e.target.value)
                            )
                        }
                        className="border rounded-xl px-4 py-3"
                    />

                </div>

                <input
                    type="text"
                    placeholder="Support Available"
                    value={supportAvailable}
                    onChange={(e) =>
                        setSupportAvailable(
                            e.target.value
                        )
                    }
                    className="w-full border rounded-xl px-4 py-3"
                />

                <div>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={imageChangeHandler}
                    />

                    {preview && (
                        <img
                            src={preview}
                            alt=""
                            className="w-40 h-40 object-cover rounded-xl mt-4 border"
                        />
                    )}

                </div>

                <div className="border rounded-xl p-5 space-y-4">

                    <h2 className="font-bold text-xl">
                        SEO Settings
                    </h2>

                    <input
                        type="text"
                        placeholder="Meta Title"
                        value={metaTitle}
                        onChange={(e) =>
                            setMetaTitle(e.target.value)
                        }
                        className="w-full border rounded-xl px-4 py-3"
                    />

                    <textarea
                        rows={3}
                        placeholder="Meta Description"
                        value={metaDescription}
                        onChange={(e) =>
                            setMetaDescription(
                                e.target.value
                            )
                        }
                        className="w-full border rounded-xl px-4 py-3"
                    />

                    <input
                        type="text"
                        placeholder="Meta Keywords"
                        value={metaKeywords}
                        onChange={(e) =>
                            setMetaKeywords(
                                e.target.value
                            )
                        }
                        className="w-full border rounded-xl px-4 py-3"
                    />

                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl"
                >
                    {loading
                        ? "Saving..."
                        : "Save About Page"}
                </button>

            </form>
        </div>
    );
}