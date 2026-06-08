// services/[slug]/page.tsx

import { notFound } from "next/navigation";
import ServiceClient from "@/app/components/ServiceClient";

async function getService(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/service/slug/${slug}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) return null;

  const data = await res.json();
console.log(data);

  return data.service;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = await getService(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title:
      service.seo?.metaTitle ||
      service.name,

    description:
      service.seo?.metaDescription ||
      service.shortDescription,

    keywords:
      service.seo?.metaKeywords || [],

    alternates: {
      canonical:
        service.seo?.canonicalUrl ||
        `https://yourdomain.com/services/${service.slug}`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = await getService(slug);

  if (!service) {
    notFound();
  }
  

  return (
    <ServiceClient service={service} />
  );
}