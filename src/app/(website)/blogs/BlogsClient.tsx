"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Newspaper,
} from "lucide-react";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  image?: string;
  shortDescription?: string;
  createdAt: string;
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  /* =========================================================
     FETCH BLOGS
  ========================================================= */

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blogs`
        );

        setBlogs(
          Array.isArray(data?.blogs)
            ? data.blogs.filter(Boolean)
            : []
        );
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  /* =========================================================
     LOADING
  ========================================================= */

  if (loading) {
    return <BlogSkeleton />;
  }

  return (
    <main className="min-h-[70vh] overflow-hidden bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative border-b border-[#eaecf0] bg-[#fafafa] py-14 sm:py-16 md:py-20 lg:py-24">
        {/* Subtle Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#e63946]/[0.025] blur-3xl"
        />

        <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
          <div className="mx-auto max-w-[760px] text-center">

            {/* Label */}
            <div className="mb-4 flex items-center justify-center gap-2.5">
              <span className="h-[2px] w-7 rounded-full bg-[#e63946]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#e63946] sm:text-[12px]">
                Nexprint Insights
              </span>

              <span className="h-[2px] w-7 rounded-full bg-[#e63946]" />
            </div>

            {/* Heading */}
            <h1 className="text-[34px] font-semibold leading-[1.13] tracking-[-0.03em] text-[#27303f] sm:text-[40px] md:text-[46px] lg:text-[50px]">
              Latest{" "}
              <span className="text-[#e63946]">
                Blogs
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-[660px] text-[14.5px] leading-[1.8] text-[#667085] sm:text-[15.5px] lg:text-[16px]">
              Printer tips, office equipment guides, maintenance
              advice and useful insights to help your business
              make better printing decisions.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          BLOGS
      ===================================================== */}

      <section className="relative bg-white py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full bg-[#e63946]/[0.02] blur-3xl"
        />

        <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16 2xl:px-20">

          {/* No Blogs */}

          {blogs.length === 0 && (
            <div className="mx-auto max-w-[620px] rounded-[20px] border border-[#eaecf0] bg-[#fafafa] px-6 py-14 text-center sm:px-10">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#e63946]/[0.07] text-[#e63946]">
                <Newspaper
                  size={22}
                  strokeWidth={1.7}
                />
              </div>

              <h2 className="mt-5 text-[21px] font-semibold tracking-[-0.02em] text-[#27303f] sm:text-[23px]">
                No Blogs Available Yet
              </h2>

              <p className="mx-auto mt-3 max-w-[430px] text-[14px] leading-[1.7] text-[#667085]">
                We&apos;re preparing helpful articles and
                printing insights. Please check back again soon.
              </p>
            </div>
          )}

          {/* Blog Grid */}

          {blogs.length > 0 && (
            <div className="grid items-stretch gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:gap-7">
              {blogs.map((blog) => (
                <BlogCard
                  key={blog._id}
                  blog={blog}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   BLOG CARD
========================================================= */

function BlogCard({ blog }: { blog: Blog }) {
  if (!blog?.slug) return null;

  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[18px] border border-[#eaecf0] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#e63946]/20 hover:shadow-[0_18px_45px_rgba(16,24,40,0.07)] sm:rounded-[20px]"
    >

      {/* Image */}

      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f5f6f7]">
        {blog.image ? (
          <img
            src={blog.image}
            alt={blog.title || "Nexprint Blog"}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Newspaper
              className="text-[#c5c9d0]"
              size={30}
              strokeWidth={1.4}
            />
          </div>
        )}

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#e63946] transition-all duration-300 group-hover:w-full" />
      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-5 sm:p-6">

        {/* Date */}

        {blog.createdAt && (
          <div className="mb-3 flex items-center gap-2 text-[11.5px] text-[#98a2b3] sm:text-[12px]">
            <CalendarDays
              size={14}
              strokeWidth={1.7}
            />

            <span>
              {formatDate(blog.createdAt)}
            </span>
          </div>
        )}

        {/* Title */}

        <h2 className="line-clamp-2 text-[18px] font-semibold leading-[1.4] tracking-[-0.015em] text-[#27303f] transition-colors duration-300 group-hover:text-[#e63946] sm:text-[19px] lg:text-[20px]">
          {blog.title}
        </h2>

        {/* Description */}

        {blog.shortDescription && (
          <p className="mt-3 line-clamp-3 text-[13.5px] leading-[1.7] text-[#667085] sm:text-[14px]">
            {blog.shortDescription}
          </p>
        )}

        {/* Read More */}

        <div className="mt-auto pt-5">
          <span className="inline-flex items-center gap-2 text-[13px] font-medium text-[#e63946] sm:text-[13.5px]">
            Read Article

            <ArrowRight
              size={15}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}

/* =========================================================
   LOADING SKELETON
========================================================= */

function BlogSkeleton() {
  return (
    <main className="min-h-[70vh] bg-white">

      {/* Hero Skeleton */}

      <section className="border-b border-[#eaecf0] bg-[#fafafa] py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[760px] px-5 text-center">
          <div className="mx-auto h-3 w-32 animate-pulse rounded-full bg-[#eaecf0]" />

          <div className="mx-auto mt-5 h-10 w-[260px] max-w-full animate-pulse rounded-[8px] bg-[#e5e7eb] sm:w-[340px]" />

          <div className="mx-auto mt-5 h-4 w-[500px] max-w-full animate-pulse rounded bg-[#eaecf0]" />

          <div className="mx-auto mt-2 h-4 w-[380px] max-w-[80%] animate-pulse rounded bg-[#eaecf0]" />
        </div>
      </section>

      {/* Cards */}

      <section className="py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:gap-7">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[20px] border border-[#eaecf0] bg-white"
              >
                <div className="aspect-[16/10] animate-pulse bg-[#f1f2f4]" />

                <div className="p-5 sm:p-6">
                  <div className="h-3 w-28 animate-pulse rounded bg-[#eaecf0]" />

                  <div className="mt-4 h-5 w-full animate-pulse rounded bg-[#e5e7eb]" />

                  <div className="mt-2 h-5 w-[75%] animate-pulse rounded bg-[#e5e7eb]" />

                  <div className="mt-5 h-3.5 w-full animate-pulse rounded bg-[#f0f1f3]" />

                  <div className="mt-2 h-3.5 w-[90%] animate-pulse rounded bg-[#f0f1f3]" />

                  <div className="mt-6 h-4 w-24 animate-pulse rounded bg-[#f0f1f3]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   DATE FORMAT
========================================================= */

function formatDate(date: string) {
  try {
    return new Intl.DateTimeFormat("en-AE", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(date));
  } catch {
    return "";
  }
}