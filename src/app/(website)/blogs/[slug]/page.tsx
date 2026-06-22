"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogDetailsPage() {
  const { slug } = useParams();

  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  const fetchBlog = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blog/${slug}`
    );

    setBlog(data.blog);
  };

  if (!blog) return null;

  return (
    <section className="py-20 bg-white">

      <div className="max-w-4xl mx-auto px-5">

        <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6">
          {blog.title}
        </h1>

        <div className="flex items-center gap-4 text-gray-500 mb-8">
          <span>
            {new Date(blog.createdAt).toDateString()}
          </span>

          <span>•</span>

          <span>
            {blog.views} Views
          </span>
        </div>

        <img
          src={blog.image}
          alt={blog.imageAlt}
          className="w-full rounded-3xl mb-10"
        />

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{
            __html: blog.content,
          }}
        />

      </div>

    </section>
  );
}