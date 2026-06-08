"use client";

import Link from "next/link";
import axios from "axios";
import {
  useEffect,
  useState,
} from "react";

export default function HeroPage() {
  const [heroes, setHeroes] =
    useState<any[]>([]);

  const fetchData =
    async () => {
      const res =
        await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/hero/all`
        );

      setHeroes(
        res.data.data
      );
    };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Hero Management
        </h1>

        <Link
          href="/admin/hero/create"
          className="rounded-xl bg-blue-600 px-5 py-3 text-white"
        >
          Add Hero
        </Link>
      </div>

      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
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
                Phone
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
            {heroes.map(
              (item) => (
                <tr
                  key={
                    item._id
                  }
                  className="border-t"
                >
                  <td className="p-4">
                    <img
                      src={
                        item.desktopImage
                      }
                      className="h-16 w-20 rounded-lg object-cover"
                    />
                  </td>

                  <td className="p-4">
                    {
                      item.title
                    }
                  </td>

                  <td className="p-4">
                    {
                      item.phoneNumber
                    }
                  </td>

                  <td className="p-4">
                    {item.isActive
                      ? "Active"
                      : "Inactive"}
                  </td>

                  <td className="p-4">
                    <Link
                      href={`/admin/hero/edit/${item._id}`}
                      className="text-blue-600"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}