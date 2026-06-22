"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import BlogForm from "@/app/components/admin/blogs/BlogForm";

export default function CreateBlogPage() {

  const router = useRouter();

  const [loading,
    setLoading] =
    useState(false);

  const handleSubmit =
    async (
      formData: FormData
    ) => {

      try {

        setLoading(true);

        const { data } =
          await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/blog`,
            formData
          );

        toast.success(
          "Blog Created"
        );

        router.push(
          "/admin/blogs"
        );

      } catch (error: any) {

        toast.error(
          error?.response?.data?.message
        );

      } finally {

        setLoading(false);

      }
    };

  return (
    <BlogForm
      onSubmit={handleSubmit}
      loading={loading}
    />
  );
}