"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  image?: string;
  images?: string[];
  productName: string;
}

export default function ProductGallery({
  image,
  images = [],
  productName,
}: ProductGalleryProps) {
  const galleryImages = [image, ...images]
    .filter(
      (img): img is string => typeof img === "string" && img.length > 0
    )
    .filter(
      (img, index, self) =>
        self.indexOf(img) === index
    );

  const [selectedImage, setSelectedImage] = useState<string>(
    galleryImages[0] ?? "/placeholder.jpg"
  );

  return (
    <div>
      {/* Main Image */}
      <div className="bg-white border rounded-2xl p-4 md:p-6 overflow-hidden">

        <Image
          src={selectedImage}
          alt={productName}
          width={800}
          height={800}
          priority
          unoptimized
          className="w-full h-[280px] sm:h-[400px] lg:h-[550px] object-contain"
        />

      </div>

      {/* Thumbnails */}

      {galleryImages.map((img, index) => (
        <button
          key={index}
          onClick={() => setSelectedImage(img)}
          className={`
      shrink-0
      w-[80px]
      h-[80px]
      md:w-[90px]
      md:h-[90px]
      border-2
      rounded-xl
      overflow-hidden
      bg-white
      transition
      ${selectedImage === img
              ? "border-red-600"
              : "border-gray-200"
            }
    `}
        >
          <Image
            src={img}
            alt={`${productName}-${index}`}
            width={90}
            height={90}
            unoptimized
            className="w-full h-full object-cover"
          />
        </button>
      ))}
    </div>
  );
}