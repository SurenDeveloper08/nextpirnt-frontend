"use client";

import React, { useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

import ProductCard from "./ProductCard";


interface FeaturedProductsProps {
  products: any[];
}

export default function FeaturedProducts({
  products,
}: FeaturedProductsProps) {

  const sliderRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const updateScrollButtons = () => {
    if (!sliderRef.current) return;

    const {
      scrollLeft,
      scrollWidth,
      clientWidth,
    } = sliderRef.current;

    setCanScrollLeft(scrollLeft > 5);

    setCanScrollRight(
      scrollLeft + clientWidth < scrollWidth - 5
    );
  };

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });

    setTimeout(updateScrollButtons, 400);
  };

  React.useEffect(() => {

    updateScrollButtons();

    const slider = sliderRef.current;

    if (!slider) return;

    slider.addEventListener("scroll", updateScrollButtons);

    window.addEventListener("resize", updateScrollButtons);

    return () => {
      slider.removeEventListener(
        "scroll",
        updateScrollButtons
      );

      window.removeEventListener(
        "resize",
        updateScrollButtons
      );
    };

  }, []);

  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-70" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14">

          <span className="inline-flex px-5 py-2 rounded-full bg-red-50 text-[#e63946] text-sm font-semibold mb-5">
            Featured Products
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Latest{" "}
            <span className="text-[#e63946]">
              Printers
            </span>
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Explore professional office printers,
            multifunction devices, and business
            printing solutions.
          </p>

        </div>

        {/* Slider */}
        <div className="relative">

          {/* LEFT BUTTON */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`
              absolute left-0 top-1/2 -translate-y-1/2 z-20
              w-10 h-10 md:w-12 md:h-12 rounded-full
              flex items-center justify-center
              border transition-all duration-300

              ${canScrollLeft
                ? "bg-white text-slate-700 border-slate-200 shadow-lg hover:bg-[#e63946] hover:text-white hover:border-[#e63946]"
                : "bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed"
              }
            `}
          >
            <ChevronLeft size={20} />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`
              absolute right-0 top-1/2 -translate-y-1/2 z-20
              w-10 h-10 md:w-12 md:h-12 rounded-full
              flex items-center justify-center
              border transition-all duration-300

              ${canScrollRight
                ? "bg-white text-slate-700 border-slate-200 shadow-lg hover:bg-[#e63946] hover:text-white hover:border-[#e63946]"
                : "bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed"
              }
            `}
          >
            <ChevronRight size={20} />
          </button>

          {/* Products */}
          <div
            ref={sliderRef}
            className="flex gap-4 lg:gap-6
              overflow-x-auto
              overflow-y-visible
              scroll-smooth
              snap-x snap-mandatory
              no-scrollbar
              px-12 lg:px-14
              py-6
            "
          >

            {products.map((product, index) => (

              <motion.div
                key={product._id || product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                className="
                  snap-start
                  flex-shrink-0
                  w-[78%]
                  sm:w-[48%]
                  md:w-[31%]
                  lg:w-[25%]
                  xl:w-[20%]
                "
              >
                <ProductCard product={product} />
              </motion.div>

            ))}

          </div>
        </div>
      </div>
    </section>
  );
}