"use client";

import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  CalendarDays,
  Eye,
  ChevronRight,
} from "lucide-react";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  image?: string;
  imageAlt?: string;
  shortDescription?: string;
  content: string;
  views?: number;
  createdAt: string;
}

export default function BlogDetailsPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* =========================================================
     FETCH BLOG
  ========================================================= */

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError("");

        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blog/${slug}`
        );

        if (!data?.blog) {
          setError("Blog article not found.");
          setBlog(null);
          return;
        }

        setBlog(data.blog);
      } catch (err) {
        console.error("Failed to fetch blog:", err);

        setError(
          "We couldn't load this article. Please try again later."
        );

        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  /* =========================================================
     LOADING
  ========================================================= */

  if (loading) {
    return <BlogDetailsSkeleton />;
  }

  /* =========================================================
     ERROR / NOT FOUND
  ========================================================= */

  if (error || !blog) {
    return (
      <main className="flex min-h-[65vh] items-center justify-center bg-white px-5">
        <div className="max-w-[500px] text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#e63946]">
            Nexprint Blog
          </p>

          <h1 className="mt-3 text-[28px] font-semibold tracking-[-0.025em] text-[#27303f] sm:text-[32px]">
            Article Not Available
          </h1>

          <p className="mt-3 text-[14px] leading-[1.7] text-[#667085]">
            {error || "The requested blog article could not be found."}
          </p>

          <Link
            href="/blogs"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#e63946] px-6 py-3 text-[13.5px] font-medium text-white transition-colors hover:bg-[#cf303d]"
          >
            <ArrowLeft size={15} strokeWidth={1.8} />
            Back to Blogs
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="overflow-hidden bg-white">

      {/* =====================================================
          ARTICLE HEADER
      ===================================================== */}

      <section className="relative border-b border-[#eaecf0] bg-[#fafafa] py-12 sm:py-14 md:py-16 lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#e63946]/[0.025] blur-3xl"
        />

        <div className="relative mx-auto w-full max-w-[1050px] px-5 sm:px-7 md:px-10">

          {/* Breadcrumb */}

          <nav
            aria-label="Breadcrumb"
            className="mb-7 flex flex-wrap items-center gap-2 text-[12.5px] text-[#98a2b3]"
          >
            <Link
              href="/"
              className="transition-colors hover:text-[#e63946]"
            >
              Home
            </Link>

            <ChevronRight
              size={13}
              strokeWidth={1.8}
            />

            <Link
              href="/blogs"
              className="transition-colors hover:text-[#e63946]"
            >
              Blogs
            </Link>

            <ChevronRight
              size={13}
              strokeWidth={1.8}
            />

            <span className="max-w-[240px] truncate text-[#667085] sm:max-w-[400px]">
              {blog.title}
            </span>
          </nav>

          {/* Label */}

          <div className="mb-4 flex items-center gap-2.5">
            <span className="h-[2px] w-7 rounded-full bg-[#e63946]" />

            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#e63946] sm:text-[12px]">
              Nexprint Insights
            </span>
          </div>

          {/* Title */}

          <h1 className="max-w-[950px] text-[32px] font-semibold leading-[1.16] tracking-[-0.035em] text-[#27303f] sm:text-[38px] md:text-[44px] lg:text-[50px]">
            {blog.title}
          </h1>

          {/* Meta */}

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-[#667085] sm:text-[13px]">
            {blog.createdAt && (
              <div className="flex items-center gap-2">
                <CalendarDays
                  size={15}
                  className="text-[#e63946]"
                  strokeWidth={1.7}
                />

                <span>{formatDate(blog.createdAt)}</span>
              </div>
            )}

            {typeof blog.views === "number" && (
              <>
                <span
                  aria-hidden="true"
                  className="hidden h-1 w-1 rounded-full bg-[#c5c9d0] sm:block"
                />

                <div className="flex items-center gap-2">
                  <Eye
                    size={15}
                    className="text-[#e63946]"
                    strokeWidth={1.7}
                  />

                  <span>
                    {blog.views.toLocaleString()}{" "}
                    {blog.views === 1 ? "View" : "Views"}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          ARTICLE
      ===================================================== */}

      <article className="bg-white py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1050px] px-5 sm:px-7 md:px-10">

          {/* Featured Image */}

          {blog.image && (
            <div className="mb-10 overflow-hidden rounded-[18px] bg-[#f5f6f7] sm:mb-12 sm:rounded-[20px]">
              <img
                src={blog.image}
                alt={blog.imageAlt || blog.title}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          )}

          {/* Article Content */}

          <div
            className="
              prose
              prose-slate
              max-w-none

              prose-headings:font-semibold
              prose-headings:tracking-[-0.02em]
              prose-headings:text-[#27303f]

              prose-h2:mb-4
              prose-h2:mt-10
              prose-h2:text-[25px]
              sm:prose-h2:text-[29px]

              prose-h3:mb-3
              prose-h3:mt-8
              prose-h3:text-[20px]
              sm:prose-h3:text-[22px]

              prose-p:my-5
              prose-p:text-[15px]
              prose-p:leading-[1.85]
              prose-p:text-[#667085]
              sm:prose-p:text-[16px]

              prose-li:text-[15px]
              prose-li:leading-[1.8]
              prose-li:text-[#667085]
              sm:prose-li:text-[16px]

              prose-strong:font-semibold
              prose-strong:text-[#344054]

              prose-a:font-medium
              prose-a:text-[#e63946]
              prose-a:no-underline
              hover:prose-a:underline

              prose-blockquote:border-l-[#e63946]
              prose-blockquote:bg-[#fafafa]
              prose-blockquote:px-5
              prose-blockquote:py-3
              prose-blockquote:not-italic
              prose-blockquote:text-[#475467]

              prose-img:rounded-[16px]

              prose-hr:border-[#eaecf0]
            "
            dangerouslySetInnerHTML={{
              __html: blog.content || "",
            }}
          />

          {/* =================================================
              BACK TO BLOGS
          ================================================= */}

          <div className="mt-12 border-t border-[#eaecf0] pt-7 sm:mt-16">
            <Link
              href="/blogs"
              className="group inline-flex items-center gap-2 text-[13.5px] font-medium text-[#667085] transition-colors hover:text-[#e63946]"
            >
              <ArrowLeft
                size={16}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />

              Back to All Blogs
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

/* =========================================================
   DATE
========================================================= */

function formatDate(date: string) {
  try {
    return new Intl.DateTimeFormat("en-AE", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date(date));
  } catch {
    return "";
  }
}

/* =========================================================
   LOADING SKELETON
========================================================= */

function BlogDetailsSkeleton() {
  return (
    <main className="min-h-screen bg-white">

      {/* Header */}

      <section className="border-b border-[#eaecf0] bg-[#fafafa] py-12 sm:py-14 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1050px] px-5 sm:px-7 md:px-10">
          <div className="h-3 w-[180px] animate-pulse rounded bg-[#e5e7eb]" />

          <div className="mt-8 h-3 w-[130px] animate-pulse rounded bg-[#eaecf0]" />

          <div className="mt-5 h-9 w-full max-w-[800px] animate-pulse rounded-[7px] bg-[#e5e7eb]" />

          <div className="mt-3 h-9 w-[70%] animate-pulse rounded-[7px] bg-[#e5e7eb]" />

          <div className="mt-6 h-3 w-[240px] animate-pulse rounded bg-[#eaecf0]" />
        </div>
      </section>

      {/* Content */}

      <section className="py-10 sm:py-12 md:py-16">
        <div className="mx-auto w-full max-w-[1050px] px-5 sm:px-7 md:px-10">

          <div className="aspect-[16/9] w-full animate-pulse rounded-[20px] bg-[#f0f1f3]" />

          <div className="mt-10 space-y-4">
            <div className="h-4 w-full animate-pulse rounded bg-[#f0f1f3]" />
            <div className="h-4 w-full animate-pulse rounded bg-[#f0f1f3]" />
            <div className="h-4 w-[90%] animate-pulse rounded bg-[#f0f1f3]" />
            <div className="h-4 w-[95%] animate-pulse rounded bg-[#f0f1f3]" />
            <div className="h-4 w-[75%] animate-pulse rounded bg-[#f0f1f3]" />
          </div>
        </div>
      </section>
    </main>
  );
}