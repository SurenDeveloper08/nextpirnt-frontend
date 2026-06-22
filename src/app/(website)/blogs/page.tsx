"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  image: string;
  shortDescription: string;
  createdAt: string;
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blogs`
      );

      setBlogs(data.blogs || []);
    } catch (error) {
      console.log(error);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl overflow-hidden shadow-sm"
              >
                <div className="h-60 bg-gray-200 animate-pulse" />
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-gray-200 rounded animate-pulse" />
                  <div className="h-6 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-slate-50 min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900">
            Latest Blogs
          </h1>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Printer tips, office equipment guides, maintenance advice,
            business solutions and technology insights from Nexprint.
          </p>
        </div>

        {/* No Blogs */}
        {blogs.length === 0 && (
          <div className="bg-white rounded-3xl shadow-sm p-12 text-center">
            <h2 className="text-2xl font-bold text-slate-900">
              No Blogs Found
            </h2>

            <p className="mt-3 text-slate-500">
              We haven't published any blog articles yet.
              Please check back later.
            </p>
          </div>
        )}

        {/* Blog Grid */}
        {blogs.length > 0 && (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {blogs.map((blog) => (
              <Link
                key={blog._id}
                href={`/blogs/${blog.slug}`}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">

                  {/* <p className="text-sm text-gray-500 mb-3">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </p> */}

                  <h2 className="text-2xl font-bold mb-3 line-clamp-2 group-hover:text-[#e63946] transition-colors">
                    {blog.title}
                  </h2>

                  <p className="text-slate-600 line-clamp-3 mb-5">
                    {blog.shortDescription}
                  </p>

                  <span className="inline-flex items-center gap-2 text-[#e63946] font-bold">
                    Read More →
                  </span>

                </div>
              </Link>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}