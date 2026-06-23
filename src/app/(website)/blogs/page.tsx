import type { Metadata } from "next";
import BlogsClient from "./BlogsClient";

export const metadata: Metadata = {
  title: "Blogs | NexPrint UAE",
  description:
    "Read the latest printer guides, office equipment tips, printer maintenance advice, business printing solutions, and technology insights from NexPrint UAE.",
  keywords: [
    "Printer Blog UAE",
    "Printer Maintenance Tips",
    "Office Equipment Guide",
    "Printer Rental UAE",
    "Printer Repair Abu Dhabi",
    "NexPrint Blog",
  ],

  openGraph: {
    title: "Blogs | NexPrint UAE",
    description:
      "Latest printer guides, maintenance tips and office technology insights.",
    url: "https://nexprint.ae/blogs",
    siteName: "NexPrint UAE",
    images: [
      {
        url: "/images/blog-banner.jpg",
        width: 1200,
        height: 630,
        alt: "NexPrint UAE Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Blogs | NexPrint UAE",
    description:
      "Latest printer guides, maintenance tips and office technology insights.",
    images: ["/images/blog-banner.jpg"],
  },

  alternates: {
    canonical: "https://nexprint.ae/blogs",
  },
};

export default function Page() {
  return <BlogsClient />;
}