"use client";

import axios from "axios";
import HeroForm from "@/app/components/admin/hero/HeroForm";
import {
  useEffect,
  useState,
} from "react";
import {
  useParams,
  useRouter,
} from "next/navigation";

export default function EditHero() {
  const { id } =
    useParams();

  const router =
    useRouter();

  const [hero, setHero] =
    useState(null);

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/hero/${id}`
      )
      .then((res) =>
        setHero(
          res.data.data
        )
      );
  }, [id]);

  const updateHero =
    async (
      formData: FormData
    ) => {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/hero/${id}`,
        formData
      );

      router.push(
        "/admin/hero"
      );
    };

  if (!hero)
    return (
      <p>Loading...</p>
    );

  return (
    <HeroForm
      initialData={hero}
      onSubmit={
        updateHero
      }
    />
  );
}