"use client";

import { useEffect, useState } from "react";


interface Props {

    initialData?: any;

    onSubmit: (data: any) => Promise<void>;

    loading?: boolean;

}



export default function SeoForm({
    initialData,
    onSubmit,
    loading
}: Props) {


    const [page, setPage] = useState("");

    const [metaTitle, setMetaTitle] = useState("");

    const [metaDescription, setMetaDescription] = useState("");

    const [metaKeywords, setMetaKeywords] = useState("");

    const [canonicalUrl, setCanonicalUrl] = useState("");

    const [ogTitle, setOgTitle] = useState("");

    const [ogDescription, setOgDescription] = useState("");

    const [ogImage, setOgImage] = useState("");

    const [status, setStatus] = useState(true);



    useEffect(() => {

        if (initialData) {

            setPage(initialData.page || "");

            setMetaTitle(initialData.metaTitle || "");

            setMetaDescription(initialData.metaDescription || "");

            setMetaKeywords(initialData.metaKeywords || "");

            setCanonicalUrl(initialData.canonicalUrl || "");

            setOgTitle(initialData.ogTitle || "");

            setOgDescription(initialData.ogDescription || "");

            setOgImage(initialData.ogImage || "");

            setStatus(initialData.status ?? true);

        }

    }, [initialData]);




    const submit = (e: any) => {

        e.preventDefault();


        onSubmit({

            page,

            metaTitle,

            metaDescription,

            metaKeywords,

            canonicalUrl,

            ogTitle,

            ogDescription,

            ogImage,

            status

        });


    };



    return (

        <form
            onSubmit={submit}
            className="space-y-6 rounded-2xl bg-white p-6 shadow"
        >


            <div>

                <label className="font-semibold">
                    Page Name
                </label>


                <input
                    required
                    value={page}
                    onChange={e => setPage(e.target.value)}
                    placeholder="home, services, brand-hp"
                    className="w-full rounded-xl border px-4 py-3"
                />

            </div>



            <div>

                <label className="font-semibold">
                    Meta Title
                </label>


                <input
                    value={metaTitle}
                    onChange={e => setMetaTitle(e.target.value)}
                    className="w-full rounded-xl border px-4 py-3"
                />

            </div>




            <div>

                <label className="font-semibold">
                    Meta Description
                </label>


                <textarea
                    rows={4}
                    value={metaDescription}
                    onChange={e => setMetaDescription(e.target.value)}
                    className="w-full rounded-xl border px-4 py-3"
                />

            </div>




            <div>

                <label className="font-semibold">
                    Meta Keywords
                </label>


                <input
                    value={metaKeywords}
                    onChange={e => setMetaKeywords(e.target.value)}
                    placeholder="printer, rental, UAE"
                    className="w-full rounded-xl border px-4 py-3"
                />

            </div>




            <div>

                <label className="font-semibold">
                    Canonical URL
                </label>


                <input
                    value={canonicalUrl}
                    onChange={e => setCanonicalUrl(e.target.value)}
                    className="w-full rounded-xl border px-4 py-3"
                />

            </div>




            <div>

                <label className="font-semibold">
                    OG Title
                </label>


                <input
                    value={ogTitle}
                    onChange={e => setOgTitle(e.target.value)}
                    className="w-full rounded-xl border px-4 py-3"
                />

            </div>




            <div>

                <label className="font-semibold">
                    OG Description
                </label>


                <textarea
                    rows={3}
                    value={ogDescription}
                    onChange={e => setOgDescription(e.target.value)}
                    className="w-full rounded-xl border px-4 py-3"
                />

            </div>




            <div>

                <label className="font-semibold">
                    OG Image
                </label>


                <input
                    value={ogImage}
                    onChange={e => setOgImage(e.target.value)}
                    className="w-full rounded-xl border px-4 py-3"
                />

            </div>



            {/* <div className="flex gap-3 items-center">


                <button
                    type="button"
                    onClick={() => setStatus(!status)}
                    className={`h-7 w-14 rounded-full ${status ? "bg-green-500" : "bg-gray-300"
                        }`}
                >

                </button>


                <span>
                    {status ? "Active" : "Inactive"}
                </span>


            </div> */}




            <button
                disabled={loading}
                className="rounded-xl bg-blue-600 px-6 py-3 text-white"
            >

                {
                    loading
                        ? "Saving..."
                        : initialData
                            ? "Update SEO"
                            : "Create SEO"
                }

            </button>



        </form>

    );


}