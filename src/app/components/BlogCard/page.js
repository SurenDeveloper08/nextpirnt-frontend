"use client";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ blog }) => {
  // 1. Safety Guard: This prevents the "Cannot read image of undefined" crash
  if (!blog) return null;

  return (
    <div className="bg-white border border-slate-200 overflow-hidden hover:shadow-xl transition-all rounded-none flex flex-col h-full">
      
      {/* Blog Image - No rounded corners */}
      <div className="relative w-full h-56 bg-slate-100">
        <Image
          src={blog.image || "/placeholder.jpg"} 
          alt={blog.title || "Nexprint Blog"}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content - Strictly Left Aligned */}
      <div className="p-6 md:p-8 flex flex-col items-start text-left flex-grow">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
          {blog.date}
        </p>

        <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight leading-tight mb-3">
          {blog.title}
        </h2>

        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
          {blog.excerpt}
        </p>

        <Link
          href={`/blog/${blog.slug}`}
          className="mt-auto inline-flex items-center text-[12px] font-black uppercase tracking-widest transition-colors"
          style={{ color: '#e63946' }}
        >
          Read Full Article <span className="ml-2">→</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;