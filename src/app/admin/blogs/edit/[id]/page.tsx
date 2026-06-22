"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

import BlogForm from "@/app/components/admin/blogs/BlogForm";

export default function EditBlogPage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;

  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  const fetchBlog = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/blog/${id}`
      );

      setBlog(data.blog);
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ||
          "Failed to load blog"
      );
    } finally {
      setPageLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchBlog();
    }
  }, [id]);

  const handleSubmit = async (
    formData: FormData
  ) => {
    try {
      setLoading(true);

      const { data } = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/blog/${id}`,
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      toast.success(
        data.message ||
          "Blog updated successfully"
      );

      router.push("/admin/blogs");
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ||
          "Update failed"
      );
    } finally {
      setLoading(false);
    }
  };

  if (pageLoading) {
    return (
      <div className="space-y-4">
        <div className="h-8 w-40 rounded bg-gray-200 animate-pulse" />
        <div className="h-96 rounded bg-gray-100 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          Edit Blog
        </h1>

        <p className="text-gray-500 mt-1">
          Update blog details
        </p>
      </div>

      <BlogForm
        initialData={blog}
        onSubmit={handleSubmit}
        loading={loading}
      />

    </div>
  );
}