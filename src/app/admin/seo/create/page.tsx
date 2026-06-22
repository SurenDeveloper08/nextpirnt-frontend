"use client";


import { useState } from "react";

import { useRouter } from "next/navigation";

import axios from "axios";

import toast from "react-hot-toast";

import SeoForm from "@/app/components/admin/seo/SeoForm";



export default function CreateSeo() {


    const router = useRouter();

    const [loading, setLoading] = useState(false);



    const submit = async (data: any) => {


        try {


            setLoading(true);


            await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/seo/new`,
                data
            );



            toast.success("SEO created");


            router.push("/admin/seo");


        } catch (error: any) {

            toast.error(
                error.response?.data?.message ||
                "Create failed"
            );


        } finally {

            setLoading(false);

        }


    };



    return (

        <SeoForm
            onSubmit={submit}
            loading={loading}
        />

    );


}