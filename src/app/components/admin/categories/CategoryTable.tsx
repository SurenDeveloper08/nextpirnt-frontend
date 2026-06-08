"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  deleteCategory,
  getCategories,
} from "@/services/categoryService";

export default function CategoriesPage() {
  const [categories, setCategories] =
    useState([]);

  const fetchCategories =
    async () => {
      const data =
        await getCategories();

      setCategories(data);
    };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = async (
    id: string
  ) => {
    if (
      confirm(
        "Delete this category?"
      )
    ) {
      await deleteCategory(id);

      fetchCategories();
    }
  };

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <h1 className="text-3xl font-bold">
          Categories
        </h1>

        <Link
          href="/admin/categories/create"
          className="bg-blue-600 text-white px-5 py-3 rounded-xl"
        >
          Add Category
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-4">
                Name
              </th>

              <th className="text-left p-4">
                Featured
              </th>

              <th className="text-left p-4">
                Status
              </th>

              <th className="text-left p-4">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {categories.map((item: any) => (
              <tr
                key={item._id}
                className="border-t"
              >
                <td className="p-4">
                  {item.name}
                </td>

                <td className="p-4">
                  {item.isFeatured
                    ? "Yes"
                    : "No"}
                </td>

                <td className="p-4">
                  {item.isActive
                    ? "Active"
                    : "Inactive"}
                </td>

                <td className="p-4 flex gap-3">

                  <Link
                    href={`/admin/categories/edit/${item._id}`}
                    className="text-blue-600"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() =>
                      handleDelete(
                        item._id
                      )
                    }
                    className="text-red-600"
                  >
                    Delete
                  </button>

                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}