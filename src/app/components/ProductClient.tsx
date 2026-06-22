"use client";

"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MessageCircle,
  CheckCircle,
  ShoppingCart,
} from "lucide-react";
import ProductGallery from "./ProductGallery";
import { addToCart } from "@/lib/cart";

export default function ProductClient({
  product,
}: any) {

  const whatsappMessage = encodeURIComponent(
    `Hello, I'm interested in ${product.name}. Please provide more details.`
  );
const hasPrice = Number(product.price) > 0;
const hasSalePrice = Number(product.salePrice) > 0;
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 pb-24 md:pb-12">
      {/* TOP SECTION */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

        <ProductGallery
          image={product.image}
          images={product.images}
          productName={product.name}
        />

        {/* PRODUCT INFO */}
        <div>
          {product.brand?.name && (
            <p className="text-red-600 font-semibold uppercase tracking-wide text-sm">
              {product.brand.name}
            </p>
          )}

          <h1 className="text-2xl md:text-4xl font-bold mt-2 leading-tight">
            {product.name}
          </h1>
      {(hasPrice || hasSalePrice) && (
  <div className="flex flex-wrap items-center gap-3">
    {hasSalePrice && (
      <span className="text-3xl font-bold text-red-600">
        AED {Number(product.salePrice).toLocaleString()}
      </span>
    )}

    {hasPrice && (
      <span
        className={
          hasSalePrice
            ? "text-lg text-gray-400 line-through"
            : "text-3xl font-bold text-slate-900"
        }
      >
        AED {Number(product.price).toLocaleString()}
      </span>
    )}
  </div>
)}
          {product.shortDescription && (
            <p className="mt-5 text-gray-600 leading-relaxed">
              {product.shortDescription}
            </p>
          )}

          {/* ACTION BUTTONS */}

          <div className="mt-8 hidden md:flex gap-4">

            <button
              onClick={() =>
                addToCart({
                  _id: product._id,
                  slug: product.slug,
                  name: product.name,
                  image: product.image,
                  price:
                    product.salePrice ||
                    product.price ||
                    0,
                  qty: 1,
                })
              }
              className="flex-1 h-14 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition"
            >
              <ShoppingCart size={20} />
              Add To Cart
            </button>

            <a
              href={`https://wa.me/9710527761348?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 h-14 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition"
            >
              <MessageCircle size={20} />
              WhatsApp Enquiry
            </a>

          </div>
          <div className="fixed bottom-0 left-0 right-0 md:hidden z-50 bg-white border-t shadow-lg safe-area-pb">

            <div className="max-w-7xl mx-auto p-3">
              <div className="grid grid-cols-2 gap-3">

                <button
                  onClick={() =>
                    addToCart({
                      _id: product._id,
                      slug: product.slug,
                      name: product.name,
                      image: product.image,
                      price:
                        product.salePrice ||
                        product.price ||
                        0,
                      qty: 1,
                    })
                  }
                  className="h-12 rounded-xl bg-red-600 text-white font-semibold text-sm flex items-center justify-center gap-2 active:scale-95 transition"
                >
                  <ShoppingCart size={18} />
                  Add To Cart
                </button>

                <a
                  href={`https://wa.me/9710527761348?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 rounded-xl bg-green-600 text-white font-semibold text-sm flex items-center justify-center gap-2 active:scale-95 transition"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>

              </div>
            </div>

          </div>
          {product.features?.length > 0 && (
            <div className="mt-8">
              <h2 className="font-semibold text-lg mb-4">
                Key Features
              </h2>

              <div className="space-y-3">
                {product.features.map(
                  (
                    feature: string,
                    index: number
                  ) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle
                        size={18}
                        className="text-green-600 mt-1"
                      />
                      <span>{feature}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          )}


        </div>
      </div>

      {/* DESCRIPTION */}

      {product.description && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">
            Product Description
          </h2>

          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{
              __html: product.description,
            }}
          />
        </section>
      )}

      {/* SPECIFICATIONS */}

      {product.specifications?.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">
            Technical Specifications
          </h2>

          <div className="border rounded-xl overflow-hidden">
            {product.specifications.map(
              (spec: any, index: number) => (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-2 px-4 md:px-6 py-4 ${index % 2 === 0
                    ? "bg-gray-50"
                    : "bg-white"
                    }`}
                >
                  <div className="font-medium">
                    {spec.title}
                  </div>

                  <div>{spec.value}</div>
                </div>
              )
            )}
          </div>
        </section>
      )}
    </div>
  );
}