"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Search,
  X,
} from "lucide-react";

import type { Product } from "@/types/product";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchModal({
  open,
  onClose,
}: SearchModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const trimmedQuery = query.trim();

  /* =========================================================
     OPEN / CLOSE BEHAVIOUR
  ========================================================= */

  useEffect(() => {
    if (!open) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 100);

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.clearTimeout(timer);

      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open, onClose]);

  /* =========================================================
     SEARCH
  ========================================================= */

  useEffect(() => {
    if (!open) return;

    if (trimmedQuery.length < 2) {
      setProducts([]);
      setLoading(false);
      setError(false);
      return;
    }

    const controller = new AbortController();

    const timer = window.setTimeout(
      async () => {
        try {
          setLoading(true);
          setError(false);

          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL
            }/api/v1/product/search?q=${encodeURIComponent(
              trimmedQuery
            )}`,
            {
              signal: controller.signal,
            }
          );

          if (!response.ok) {
            throw new Error(
              "Failed to search products"
            );
          }

          const data = await response.json();

          setProducts(
            Array.isArray(data?.products)
              ? data.products
              : []
          );
        } catch (error) {
          if (
            error instanceof Error &&
            error.name === "AbortError"
          ) {
            return;
          }

          console.error(
            "Product search error:",
            error
          );

          setProducts([]);
          setError(true);
        } finally {
          if (!controller.signal.aborted) {
            setLoading(false);
          }
        }
      },
      350
    );

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [trimmedQuery, open]);

  /* =========================================================
     CLOSE + RESET
  ========================================================= */

  const handleClose = () => {
    setQuery("");
    setProducts([]);
    setLoading(false);
    setError(false);

    onClose();
  };

  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-start
        justify-center
        bg-[#101828]/35
        px-3
        py-3
        backdrop-blur-[4px]

        sm:px-5
        sm:py-8

        md:px-6
        md:py-12
      "
      role="dialog"
      aria-modal="true"
      aria-label="Search products"
    >
      {/* =====================================================
          MODAL
      ===================================================== */}

      <div
        ref={modalRef}
        className="
          flex
          max-h-[calc(100dvh-24px)]
          w-full
          max-w-[760px]
          flex-col
          overflow-hidden
          rounded-[18px]
          border
          border-white/70
          bg-white
          shadow-[0_24px_80px_rgba(16,24,40,0.16)]

          sm:max-h-[82vh]
          sm:rounded-[22px]
        "
        onClick={(event) =>
          event.stopPropagation()
        }
      >

        {/* ===================================================
            SEARCH HEADER
        =================================================== */}

        <div
          className="
            flex
            min-h-[64px]
            shrink-0
            items-center
            gap-2
            border-b
            border-[#eaecf0]
            px-3

            sm:min-h-[72px]
            sm:gap-3
            sm:px-5
          "
        >
          {/* Search Icon */}

          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#e63946]/[0.07]
              text-[#e63946]

              sm:h-10
              sm:w-10
            "
          >
            <Search
              className="h-[17px] w-[17px] sm:h-[18px] sm:w-[18px]"
              strokeWidth={1.8}
            />
          </div>

          {/* Input */}

          <input
            ref={inputRef}
            value={query}
            onChange={(event) =>
              setQuery(event.target.value)
            }
            placeholder="Search printers, consumables..."
            className="
              h-12
              min-w-0
              flex-1
              bg-transparent
              px-1
              text-[14px]
              font-normal
              text-[#27303f]
              outline-none
              placeholder:text-[#98a2b3]

              sm:text-[15px]
            "
          />

          {/* Clear Search */}

          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setProducts([]);
                inputRef.current?.focus();
              }}
              className="
                hidden
                rounded-full
                px-3
                py-1.5
                text-[11px]
                font-medium
                text-[#98a2b3]
                transition-colors
                hover:bg-[#f8f9fa]
                hover:text-[#667085]

                sm:block
              "
            >
              Clear
            </button>
          )}

          {/* Close */}

          <button
            type="button"
            onClick={handleClose}
            aria-label="Close search"
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[#eaecf0]
              text-[#667085]
              transition-all
              duration-200

              hover:border-[#e63946]/20
              hover:bg-[#e63946]/[0.05]
              hover:text-[#e63946]

              sm:h-10
              sm:w-10
            "
          >
            <X
              className="h-[17px] w-[17px] sm:h-[18px] sm:w-[18px]"
              strokeWidth={1.8}
            />
          </button>
        </div>

        {/* ===================================================
            RESULTS AREA
        =================================================== */}

        <div
          className="
            min-h-[280px]
            flex-1
            overflow-y-auto
            overscroll-contain

            sm:min-h-[350px]
          "
        >

          {/* =================================================
              INITIAL STATE
          ================================================= */}

          {!loading &&
            trimmedQuery.length < 2 && (
              <div
                className="
                  flex
                  min-h-[280px]
                  flex-col
                  items-center
                  justify-center
                  px-6
                  py-12
                  text-center

                  sm:min-h-[350px]
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-[14px]
                    bg-[#e63946]/[0.07]
                    text-[#e63946]
                  "
                >
                  <Search
                    size={21}
                    strokeWidth={1.7}
                  />
                </div>

                <h2 className="mt-4 text-[17px] font-semibold tracking-[-0.015em] text-[#27303f] sm:text-[18px]">
                  Search Products
                </h2>

                <p className="mt-2 max-w-[340px] text-[12.5px] leading-[1.7] text-[#98a2b3] sm:text-[13.5px]">
                  Enter at least 2 characters to
                  find printers, consumables and
                  office products.
                </p>
              </div>
            )}

          {/* =================================================
              LOADING
          ================================================= */}

          {loading && (
            <div className="p-3 sm:p-4">
              <div className="mb-3 px-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[#98a2b3]">
                Searching products
              </div>

              <div className="space-y-1">
                {[1, 2, 3, 4].map(
                  (item) => (
                    <SearchSkeleton
                      key={item}
                    />
                  )
                )}
              </div>
            </div>
          )}

          {/* =================================================
              RESULTS
          ================================================= */}

          {!loading &&
            !error &&
            trimmedQuery.length >= 2 &&
            products.length > 0 && (
              <div>
                {/* Result Count */}

                <div
                  className="
                    sticky
                    top-0
                    z-10
                    flex
                    items-center
                    justify-between
                    border-b
                    border-[#f2f4f7]
                    bg-white/95
                    px-4
                    py-3
                    backdrop-blur-md

                    sm:px-5
                  "
                >
                  <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#98a2b3]">
                    Search Results
                  </span>

                  <span className="text-[11.5px] text-[#98a2b3]">
                    {products.length}{" "}
                    {products.length === 1
                      ? "product"
                      : "products"}
                  </span>
                </div>

                {/* Products */}

                <div className="p-2 sm:p-3">
                  {products.map(
                    (product) => (
                      <SearchProduct
                        key={
                          product._id ||
                          product.id ||
                          product.slug
                        }
                        product={product}
                        onSelect={handleClose}
                      />
                    )
                  )}
                </div>
              </div>
            )}

          {/* =================================================
              EMPTY
          ================================================= */}

          {!loading &&
            !error &&
            trimmedQuery.length >= 2 &&
            products.length === 0 && (
              <div
                className="
                  flex
                  min-h-[300px]
                  flex-col
                  items-center
                  justify-center
                  px-6
                  py-12
                  text-center
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-[14px]
                    bg-[#f8f9fa]
                    text-[#98a2b3]
                  "
                >
                  <Search
                    size={21}
                    strokeWidth={1.7}
                  />
                </div>

                <h2 className="mt-4 text-[17px] font-semibold text-[#27303f]">
                  No Products Found
                </h2>

                <p className="mt-2 max-w-[340px] text-[13px] leading-[1.7] text-[#98a2b3]">
                  We couldn&apos;t find anything
                  matching{" "}
                  <span className="font-medium text-[#667085]">
                    &ldquo;{trimmedQuery}&rdquo;
                  </span>
                  . Try another product name or
                  brand.
                </p>
              </div>
            )}

          {/* =================================================
              ERROR
          ================================================= */}

          {!loading && error && (
            <div
              className="
                flex
                min-h-[300px]
                flex-col
                items-center
                justify-center
                px-6
                py-12
                text-center
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-[14px]
                  bg-[#e63946]/[0.07]
                  text-[#e63946]
                "
              >
                <Search
                  size={21}
                  strokeWidth={1.7}
                />
              </div>

              <h2 className="mt-4 text-[17px] font-semibold text-[#27303f]">
                Search Unavailable
              </h2>

              <p className="mt-2 max-w-[340px] text-[13px] leading-[1.7] text-[#98a2b3]">
                Something went wrong while
                searching. Please try again.
              </p>
            </div>
          )}

        </div>
      </div>

      {/* BACKDROP CLICK */}
      <button
        type="button"
        aria-label="Close search"
        className="absolute inset-0 -z-10 cursor-default"
        onClick={handleClose}
      />
    </div>
  );
}

/* =========================================================
   PRODUCT RESULT
========================================================= */

function SearchProduct({
  product,
  onSelect,
}: {
  product: Product;
  onSelect: () => void;
}) {
  if (!product?.slug) return null;

  return (
    <Link
      href={`/products/${product.category?.slug}/${product.slug}`}
      onClick={onSelect}
      className="
        group
        flex
        min-w-0
        items-center
        gap-3
        rounded-[14px]
        p-2.5
        transition-all
        duration-200

        hover:bg-[#f8f9fa]

        sm:gap-4
        sm:p-3
      "
    >
      {/* Image */}

      <div
        className="
          relative
          h-[66px]
          w-[66px]
          shrink-0
          overflow-hidden
          rounded-[11px]
          border
          border-[#eaecf0]
          bg-[#f8f9fa]

          sm:h-[76px]
          sm:w-[76px]
          sm:rounded-[12px]
        "
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name || "Product"}
            fill
            sizes="76px"
            className="object-contain p-2"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Search
              size={17}
              className="text-[#c5c9d0]"
            />
          </div>
        )}
      </div>

      {/* Information */}

      <div className="min-w-0 flex-1">
        {product.brand?.name && (
          <p
            className="
              mb-1
              truncate
              text-[9.5px]
              font-medium
              uppercase
              tracking-[0.1em]
              text-[#e63946]

              sm:text-[10px]
            "
          >
            {product.brand.name}
          </p>
        )}

        <h3
          className="
            line-clamp-2
            text-[13px]
            font-medium
            leading-[1.45]
            text-[#27303f]
            transition-colors
            group-hover:text-[#e63946]

            sm:text-[14px]
          "
        >
          {product.name}
        </h3>
      </div>

      {/* Arrow */}

      <div
        className="
          hidden
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-full
          text-[#98a2b3]
          transition-all

          group-hover:bg-white
          group-hover:text-[#e63946]

          sm:flex
        "
      >
        <ArrowRight
          size={15}
          strokeWidth={1.8}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </div>
    </Link>
  );
}

/* =========================================================
   SKELETON
========================================================= */

function SearchSkeleton() {
  return (
    <div className="flex animate-pulse items-center gap-3 rounded-[14px] p-2.5 sm:gap-4 sm:p-3">
      <div className="h-[66px] w-[66px] shrink-0 rounded-[11px] bg-[#f2f4f7] sm:h-[76px] sm:w-[76px]" />

      <div className="min-w-0 flex-1">
        <div className="h-2.5 w-20 rounded-full bg-[#f2f4f7]" />

        <div className="mt-2.5 h-3.5 w-[85%] rounded-full bg-[#f2f4f7]" />

        <div className="mt-2 h-3.5 w-[55%] rounded-full bg-[#f2f4f7]" />
      </div>
    </div>
  );
}