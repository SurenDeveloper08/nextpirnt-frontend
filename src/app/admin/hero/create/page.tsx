"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import HeroForm from "@/app/components/admin/hero/HeroForm";

export default function CreateHero() {
  const router =
    useRouter();

  const submitHero =
    async (
      formData: FormData
    ) => {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/hero/new`,
        formData
      );

      router.push(
        "/admin/hero"
      );
    };

  return (
    <HeroForm
      onSubmit={
        submitHero
      }
    />
  );
}