"use client";

import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/blogs`
      );

      setBlogs(data.blogs || []);
    } catch (error) {
      toast.error("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const deleteBlog = async (id: string) => {
    if (!confirm("Delete this blog?")) return;

    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/blog/${id}`
      );

      setBlogs((prev) =>
        prev.filter((blog) => blog._id !== id)
      );

      toast.success("Blog deleted");
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  const toggleStatus = async (id: string) => {
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/blog/status/${id}`
      );

      setBlogs((prev) =>
        prev.map((blog) =>
          blog._id === id
            ? {
                ...blog,
                status: !blog.status,
              }
            : blog
        )
      );

      toast.success("Status updated");
    } catch (error) {
      toast.error("Update failed");
    }
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="h-10 w-48 rounded bg-gray-200 animate-pulse" />

        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-16 rounded bg-gray-100 animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Blogs
        </h1>

        <Link
          href="/admin/blogs/create"
          className="bg-blue-600 text-white px-5 py-3 rounded-xl"
        >
          Add Blog
        </Link>
      </div>

      <input
        type="text"
        placeholder="Search blog..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full border rounded-xl px-4 py-3"
      />

      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>
              <th className="p-4 text-left">
                Image
              </th>

              <th className="p-4 text-left">
                Title
              </th>

              <th className="p-4 text-left">
                Category
              </th>

              <th className="p-4 text-left">
                Views
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-left">
                Actions
              </th>
            </tr>

          </thead>

          <tbody>

            {filteredBlogs.map((blog) => (
              <tr
                key={blog._id}
                className="border-t"
              >
                <td className="p-4">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-14 w-14 rounded-xl object-cover"
                  />
                </td>

                <td className="p-4">
                  <div>
                    <p className="font-medium">
                      {blog.title}
                    </p>

                    <p className="text-xs text-gray-500">
                      {blog.slug}
                    </p>
                  </div>
                </td>

                <td className="p-4">
                  {blog.category}
                </td>

                <td className="p-4">
                  {blog.views || 0}
                </td>

                <td className="p-4">
                  <button
                    onClick={() =>
                      toggleStatus(blog._id)
                    }
                    className={`relative flex h-7 w-14 items-center rounded-full p-1 transition ${
                      blog.status
                        ? "bg-green-500"
                        : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`h-5 w-5 rounded-full bg-white transition ${
                        blog.status
                          ? "translate-x-7"
                          : ""
                      }`}
                    />
                  </button>
                </td>

                <td className="p-4">
                  <div className="flex gap-4">

                    <Link
                      href={`/admin/blogs/edit/${blog._id}`}
                      className="text-blue-600"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() =>
                        deleteBlog(blog._id)
                      }
                      className="text-red-600"
                    >
                      Delete
                    </button>

                  </div>
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
}