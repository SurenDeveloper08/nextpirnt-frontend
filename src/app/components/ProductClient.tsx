"use client";

import Image from "next/image";
import {
  CheckCircle2,
  ShoppingCart,
  Package,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { addToCart } from "@/lib/cart";
import type { Product } from "@/types/product";

/* =========================================================
   TYPES
========================================================= */

interface Specification {
  title: string;
  value: string;
}

interface ProductWithDetails extends Product {
  salePrice?: number;
  specifications?: Specification[];
}

interface ProductClientProps {
  product: ProductWithDetails;
}

/* =========================================================
   COMPONENT
========================================================= */

export default function ProductClient({
  product,
}: ProductClientProps) {
  if (!product) return null;

  const price = Number(product.price) || 0;
  const salePrice = Number(product.salePrice) || 0;

  const hasPrice = price > 0;
  const hasSalePrice = salePrice > 0;

  const cartPrice = hasSalePrice
    ? salePrice
    : hasPrice
      ? price
      : 0;

  const mainImage =
    product.image || product.images?.[0];

  const features = Array.isArray(product.features)
    ? product.features.filter(Boolean)
    : [];

  const specifications =
    Array.isArray(product.specifications)
      ? product.specifications.filter(
          (spec) =>
            spec?.title &&
            spec?.value !== undefined &&
            spec?.value !== null &&
            String(spec.value).trim() !== ""
        )
      : [];

  const whatsappMessage = encodeURIComponent(
    `Hello Nexprint Office Equipments LLC, I'm interested in ${product.name}. Please provide more details.`
  );

  const whatsappUrl =
    `https://wa.me/971555328978?text=${whatsappMessage}`;

  /* =========================================================
     CART
  ========================================================= */

  const handleAddToCart = () => {
    addToCart({
      _id: product._id,
      slug: product.slug,
      name: product.name,
      image: mainImage || "",
      price: cartPrice,
      qty: 1,
    });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white pb-[82px] md:pb-0">

      {/* =====================================================
          PRODUCT SECTION
      ===================================================== */}

      <section
        className="
          py-6
          sm:py-8
          md:py-10
          lg:py-14
          xl:py-16
          2xl:py-20
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1600px]
            px-4
            sm:px-6
            md:px-8
            lg:px-12
            xl:px-16
            2xl:px-20
          "
        >
          <div
            className="
              grid
              grid-cols-1
              items-start
              gap-7
              sm:gap-8
              md:gap-10
              lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]
              lg:gap-12
              xl:gap-16
              2xl:gap-20
            "
          >

            {/* =================================================
                PRODUCT IMAGE
            ================================================= */}

            <div className="min-w-0">
              <div
                className="
                  relative
                  mx-auto
                  aspect-square
                  w-full
                  max-w-[620px]
                  overflow-hidden
                  rounded-[16px]
                  border
                  border-[#eaecf0]
                  bg-[#f8f9fa]

                  sm:rounded-[18px]
                  md:max-w-[680px]
                  lg:sticky
                  lg:top-28
                  lg:max-w-none
                  lg:rounded-[20px]
                "
              >
                {mainImage ? (
                  <Image
                    src={mainImage}
                    alt={product.name || "Nexprint product"}
                    fill
                    priority
                    sizes="
                      (max-width: 639px) 100vw,
                      (max-width: 1023px) 80vw,
                      52vw
                    "
                    className="
                      object-contain
                      p-4
                      sm:p-6
                      md:p-8
                      lg:p-10
                      xl:p-12
                    "
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-2.5 text-[#98a2b3]">
                    <Package
                      size={28}
                      strokeWidth={1.4}
                    />

                    <span className="text-[12px]">
                      No Product Image
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* =================================================
                PRODUCT INFO
            ================================================= */}

            <div className="min-w-0 lg:py-2">

              {/* Brand */}

              {product.brand?.name && (
                <p
                  className="
                    mb-2
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.14em]
                    text-[#e63946]
                    sm:mb-3
                    sm:text-[11px]
                    md:text-[12px]
                  "
                >
                  {product.brand.name}
                </p>
              )}

              {/* Product Name */}

              <h1
                className="
                  max-w-[720px]
                  text-[25px]
                  font-semibold
                  leading-[1.22]
                  tracking-[-0.025em]
                  text-[#27303f]

                  sm:text-[29px]
                  md:text-[34px]
                  lg:text-[38px]
                  xl:text-[42px]
                  2xl:text-[44px]
                "
              >
                {product.name}
              </h1>

              {/* =================================================
                  PRICE
              ================================================= */}

              {(hasPrice || hasSalePrice) && (
                <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 sm:mt-5">

                  {hasSalePrice && (
                    <span
                      className="
                        text-[22px]
                        font-semibold
                        tracking-[-0.02em]
                        text-[#e63946]
                        sm:text-[25px]
                        md:text-[27px]
                      "
                    >
                      AED{" "}
                      {salePrice.toLocaleString(
                        "en-AE"
                      )}
                    </span>
                  )}

                  {hasPrice && (
                    <span
                      className={
                        hasSalePrice
                          ? `
                            text-[14px]
                            text-[#98a2b3]
                            line-through
                            sm:text-[15px]
                          `
                          : `
                            text-[22px]
                            font-semibold
                            text-[#27303f]
                            sm:text-[25px]
                            md:text-[27px]
                          `
                      }
                    >
                      AED{" "}
                      {price.toLocaleString(
                        "en-AE"
                      )}
                    </span>
                  )}

                </div>
              )}

              {/* =================================================
                  SHORT DESCRIPTION
              ================================================= */}

              {product.shortDescription && (
                <p
                  className="
                    mt-4
                    max-w-[680px]
                    text-[13.5px]
                    leading-[1.75]
                    text-[#667085]

                    sm:text-[14px]
                    sm:leading-[1.8]
                    md:mt-5
                    md:text-[15px]
                  "
                >
                  {product.shortDescription}
                </p>
              )}

              {/* Divider */}

              <div className="my-6 border-t border-[#eaecf0] sm:my-7" />

              {/* =================================================
                  TABLET + DESKTOP BUTTONS
              ================================================= */}

              <div
                className="
                  hidden
                  md:grid
                  md:grid-cols-2
                  md:gap-3
                  xl:flex
                  xl:flex-wrap
                "
              >

                {/* Add To Cart */}

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="
                    inline-flex
                    min-h-[50px]
                    w-full
                    items-center
                    justify-center
                    gap-2.5
                    rounded-full
                    bg-[#e63946]
                    px-6
                    text-[13.5px]
                    font-medium
                    text-white
                    transition-all
                    duration-300

                    hover:bg-[#cf303d]
                    hover:shadow-[0_10px_28px_rgba(230,57,70,0.18)]

                    xl:w-auto
                    xl:px-8
                  "
                >
                  <ShoppingCart
                    size={18}
                    strokeWidth={1.8}
                  />

                  Add to Cart
                </button>

                {/* WhatsApp */}

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Chat on WhatsApp about ${product.name}`}
                  className="
                    inline-flex
                    min-h-[50px]
                    w-full
                    items-center
                    justify-center
                    gap-2.5
                    rounded-full
                    bg-[#25D366]
                    px-6
                    text-[13.5px]
                    font-medium
                    text-white
                    transition-all
                    duration-300

                    hover:bg-[#20bd5a]
                    hover:shadow-[0_10px_28px_rgba(37,211,102,0.22)]

                    xl:w-auto
                    xl:px-8
                  "
                >
                  <FaWhatsapp className="h-[20px] w-[20px]" />

                  Chat on WhatsApp
                </a>

              </div>

              {/* =================================================
                  FEATURES
              ================================================= */}

              {features.length > 0 && (
                <div
                  className="
                    mt-2
                    md:mt-8
                    lg:mt-9
                  "
                >
                  <h2
                    className="
                      text-[16px]
                      font-semibold
                      tracking-[-0.01em]
                      text-[#27303f]
                      sm:text-[17px]
                      md:text-[18px]
                    "
                  >
                    Key Features
                  </h2>

                  <div
                    className="
                      mt-4
                      grid
                      grid-cols-1
                      gap-x-6
                      gap-y-3

                      sm:grid-cols-2
                      lg:grid-cols-1
                      xl:grid-cols-2
                    "
                  >
                    {features.map(
                      (feature, index) => (
                        <div
                          key={`${feature}-${index}`}
                          className="flex min-w-0 items-start gap-2.5"
                        >
                          <CheckCircle2
                            className="
                              mt-[2px]
                              h-[17px]
                              w-[17px]
                              shrink-0
                              text-[#e63946]
                            "
                            strokeWidth={1.8}
                          />

                          <span
                            className="
                              min-w-0
                              text-[13px]
                              leading-[1.65]
                              text-[#667085]
                              sm:text-[13.5px]
                              md:text-[14px]
                            "
                          >
                            {feature}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DESCRIPTION
      ===================================================== */}

      {product.description && (
        <section
          className="
            border-t
            border-[#eaecf0]
            bg-[#fafafa]
            py-10
            sm:py-12
            md:py-14
            lg:py-16
            xl:py-20
          "
        >
          <div
            className="
              mx-auto
              w-full
              max-w-[1200px]
              px-4
              sm:px-6
              md:px-8
              lg:px-10
            "
          >
            <SectionHeading
              label="Product Information"
              title="Product Description"
            />

            <div
              className="
                prose
                prose-slate
                mt-6
                max-w-none

                prose-headings:font-semibold
                prose-headings:tracking-[-0.02em]
                prose-headings:text-[#27303f]

                prose-p:text-[13.5px]
                prose-p:leading-[1.8]
                prose-p:text-[#667085]

                sm:prose-p:text-[14px]
                md:prose-p:text-[15px]

                prose-li:text-[13.5px]
                prose-li:leading-[1.75]
                prose-li:text-[#667085]

                sm:prose-li:text-[14px]

                prose-strong:font-medium
                prose-strong:text-[#344054]

                prose-a:text-[#e63946]
              "
              dangerouslySetInnerHTML={{
                __html: product.description,
              }}
            />
          </div>
        </section>
      )}

      {/* =====================================================
          SPECIFICATIONS
      ===================================================== */}

      {specifications.length > 0 && (
        <section
          className="
            border-t
            border-[#eaecf0]
            bg-white
            py-10
            sm:py-12
            md:py-14
            lg:py-16
            xl:py-20
          "
        >
          <div
            className="
              mx-auto
              w-full
              max-w-[1200px]
              px-4
              sm:px-6
              md:px-8
              lg:px-10
            "
          >
            <SectionHeading
              label="Product Details"
              title="Technical Specifications"
            />

            <dl
              className="
                mt-6
                overflow-hidden
                rounded-[14px]
                border
                border-[#eaecf0]
                bg-white
                sm:mt-7
                sm:rounded-[18px]
              "
            >
              {specifications.map(
                (spec, index) => (
                  <div
                    key={`${spec.title}-${index}`}
                    className={`
                      grid
                      grid-cols-1
                      gap-1.5
                      px-4
                      py-4

                      sm:grid-cols-[180px_minmax(0,1fr)]
                      sm:gap-5
                      sm:px-5

                      md:grid-cols-[220px_minmax(0,1fr)]
                      md:px-6

                      lg:px-7

                      ${
                        index % 2 === 0
                          ? "bg-[#fafafa]"
                          : "bg-white"
                      }

                      ${
                        index !==
                        specifications.length - 1
                          ? "border-b border-[#eaecf0]"
                          : ""
                      }
                    `}
                  >
                    <dt
                      className="
                        text-[12px]
                        font-medium
                        text-[#475467]
                        sm:text-[13px]
                        md:text-[13.5px]
                      "
                    >
                      {spec.title}
                    </dt>

                    <dd
                      className="
                        break-words
                        text-[12.5px]
                        leading-[1.65]
                        text-[#667085]
                        sm:text-[13px]
                        md:text-[13.5px]
                      "
                    >
                      {String(spec.value)}
                    </dd>
                  </div>
                )
              )}
            </dl>
          </div>
        </section>
      )}

      {/* =====================================================
          MOBILE FIXED ACTION BAR
      ===================================================== */}

      <div
        className="
          fixed
          bottom-0
          left-0
          right-0
          z-50
          border-t
          border-[#eaecf0]
          bg-white/95
          px-3
          py-2.5
          shadow-[0_-8px_30px_rgba(16,24,40,0.08)]
          backdrop-blur-md
          md:hidden
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[600px]
            grid-cols-2
            gap-2
          "
        >

          {/* Add to Cart */}

          <button
            type="button"
            onClick={handleAddToCart}
            className="
              inline-flex
              h-12
              min-w-0
              items-center
              justify-center
              gap-1.5
              rounded-full
              bg-[#e63946]
              px-3
              text-[12.5px]
              font-medium
              text-white
              transition
              active:scale-[0.98]
              sm:gap-2
              sm:text-[13px]
            "
          >
            <ShoppingCart
              className="h-[17px] w-[17px] shrink-0"
              strokeWidth={1.8}
            />

            <span className="truncate">
              Add to Cart
            </span>
          </button>

          {/* WhatsApp */}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chat on WhatsApp about ${product.name}`}
            className="
              inline-flex
              h-12
              min-w-0
              items-center
              justify-center
              gap-1.5
              rounded-full
              bg-[#25D366]
              px-3
              text-[12.5px]
              font-medium
              text-white
              transition
              active:scale-[0.98]
              sm:gap-2
              sm:text-[13px]
            "
          >
            <FaWhatsapp className="h-[18px] w-[18px] shrink-0" />

            <span className="truncate">
              WhatsApp
            </span>
          </a>

        </div>
      </div>

    </main>
  );
}

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div>
      <div className="mb-2.5 flex items-center gap-2.5 sm:mb-3">
        <span className="h-[2px] w-6 rounded-full bg-[#e63946] sm:w-7" />

        <span
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.15em]
            text-[#e63946]
            sm:text-[11px]
          "
        >
          {label}
        </span>
      </div>

      <h2
        className="
          text-[24px]
          font-semibold
          leading-[1.2]
          tracking-[-0.025em]
          text-[#27303f]

          sm:text-[27px]
          md:text-[30px]
          lg:text-[34px]
        "
      >
        {title}
      </h2>
    </div>
  );
}