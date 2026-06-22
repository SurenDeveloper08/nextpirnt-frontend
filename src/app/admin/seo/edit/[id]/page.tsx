"use client";


import { useEffect, useState } from "react";

import { useParams, useRouter } from "next/navigation";

import axios from "axios";

import toast from "react-hot-toast";

import SeoForm from "@/app/components/admin/seo/SeoForm";



export default function EditSeo() {


    const { id } = useParams();

    const router = useRouter();


    const [seo, setSeo] = useState(null);

    const [loading, setLoading] = useState(false);



    useEffect(() => {


        axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/seo/${id}`
        )
            .then(res => setSeo(res.data.seo));


    }, [id]);




    const submit = async (data: any) => {


        try {


            setLoading(true);


            await axios.put(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/seo/${id}`,
                data
            );


            toast.success("SEO updated");


            router.push("/admin/seo");


        } catch {

            toast.error("Update failed");

        } finally {

            setLoading(false);

        }


    };



    if (!seo)
        return null;



    return (

        <SeoForm
            initialData={seo}
            onSubmit={submit}
            loading={loading}
        />

    );


}