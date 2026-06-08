"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import Link from "next/link";

import {
  Search,
  X,
} from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SearchModal({
  open,
  onClose,
}: Props) {
  const modalRef =
    useRef<HTMLDivElement>(null);

  const [query, setQuery] =
    useState("");

  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (
      e: KeyboardEvent
    ) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [onClose]);

  // Disable body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow =
        "auto";
    }

    return () => {
      document.body.style.overflow =
        "auto";
    };
  }, [open]);

  // Outside click close
  useEffect(() => {
    const handleClick = (
      e: MouseEvent
    ) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(
          e.target as Node
        )
      ) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener(
        "mousedown",
        handleClick
      );
    }

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClick
      );
    };
  }, [open, onClose]);

  // Search API
  useEffect(() => {
    if (query.length < 2) {
      setProducts([]);
      return;
    }

    const timer = setTimeout(
      async () => {
        try {
          setLoading(true);

          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/v1/product/search?q=${query}`
          );

          const data =
            await res.json();

          setProducts(
            data.products || []
          );
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      },
      300
    );

    return () =>
      clearTimeout(timer);
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex justify-center items-start p-4 sm:p-6">

      <div
        ref={modalRef}
        className="
          w-full
          max-w-3xl
          bg-white
          rounded-2xl
          shadow-2xl
          overflow-hidden
          mt-10
          animate-in
          fade-in
          zoom-in-95
        "
      >
        {/* TOP */}

        <div className="h-16 border-b flex items-center px-4 sm:px-6">

          <Search
            size={20}
            className="text-gray-400"
          />

          <input
            autoFocus
            value={query}
            onChange={(e) =>
              setQuery(e.target.value)
            }
            placeholder="Search products..."
            className="
              flex-1
              px-4
              outline-none
              text-sm
              sm:text-base
            "
          />

          <button
            onClick={onClose}
            className="
              h-10
              w-10
              rounded-full
              hover:bg-gray-100
              flex
              items-center
              justify-center
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* RESULTS */}

        <div className="max-h-[70vh] overflow-y-auto">

          {/* Loading */}

          {loading && (
            <div className="p-5 space-y-3">
              {[1, 2, 3, 4].map(
                (item) => (
                  <div
                    key={item}
                    className="
                      h-20
                      bg-gray-100
                      animate-pulse
                      rounded-xl
                    "
                  />
                )
              )}
            </div>
          )}

          {/* Results */}

          {!loading &&
            products.map(
              (
                product: any
              ) => (
                <Link
                  key={product._id}
                  href={`/product/${product.slug}`}
                  onClick={onClose}
                  className="
                    flex
                    items-center
                    gap-4
                    p-4
                    border-b
                    hover:bg-gray-50
                    transition
                  "
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      w-16
                      h-16
                      object-contain
                      border
                      rounded-lg
                      bg-white
                    "
                  />

                  <div className="flex-1">
                    <h3 className="font-medium text-sm sm:text-base line-clamp-2">
                      {product.name}
                    </h3>

                    {product.brand?.name && (
                      <p className="text-xs text-gray-500 mt-1">
                        {
                          product.brand
                            .name
                        }
                      </p>
                    )}
                  </div>
                </Link>
              )
            )}

          {/* Empty */}

          {!loading &&
            query.length >= 2 &&
            products.length === 0 && (
              <div className="py-16 text-center">
                <Search
                  size={40}
                  className="mx-auto text-gray-300"
                />

                <p className="mt-4 text-gray-500">
                  No products found
                </p>
              </div>
            )}

          {/* Initial */}

          {!loading &&
            query.length === 0 && (
              <div className="py-16 text-center text-gray-400">
                Start typing to search products...
              </div>
            )}
        </div>
      </div>
    </div>
  );
}