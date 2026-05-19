"use client";

import React, { useRef } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
} from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "HP LaserJet Enterprise M507dn Printer",
    image: "/products/product.png",
    category: "Laser Printer",
    price: "AED 1,299",
  },
  {
    id: 2,
    name: "Canon imageCLASS MF445dw Wireless Printer",
    image: "/products/product.png",
    category: "Color Printer",
    price: "AED 999",
  },
  {
    id: 3,
    name: "Epson EcoTank L6490 All-in-One Printer",
    image: "/products/product.png",
    category: "Ink Tank Printer",
    price: "AED 1,450",
  },
  {
    id: 4,
    name: "Brother MFC-L2750DW Multifunction Printer",
    image: "/products/product.png",
    category: "Multifunction Printer",
    price: "AED 1,799",
  },
  {
    id: 5,
    name: "Kyocera ECOSYS MA2100 Office Printer",
    image: "/products/product.png",
    category: "Office Printer",
    price: "AED 2,199",
  },
  {
    id: 6,
    name: "Ricoh IM C300 Professional Copier Printer",
    image: "/products/product.png",
    category: "Photocopier",
    price: "AED 3,299",
  },
];

export default function FeaturedProducts() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const updateScrollButtons = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

      setCanScrollLeft(scrollLeft > 10);

      setCanScrollRight(
        scrollLeft + clientWidth < scrollWidth - 10
      );
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });

      setTimeout(updateScrollButtons, 400);
    }
  };

  React.useEffect(() => {
    updateScrollButtons();

    const slider = sliderRef.current;

    if (slider) {
      slider.addEventListener("scroll", updateScrollButtons);

      return () => {
        slider.removeEventListener("scroll", updateScrollButtons);
      };
    }
  }, []);

  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-70"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex px-5 py-2 rounded-full bg-red-50 text-[#e63946] text-sm font-semibold mb-5">
            Featured Products
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Latest <span className="text-[#e63946]">Printers</span>
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Explore professional office printers, multifunction devices,
            and business printing solutions.
          </p>
        </div>

        {/* Slider Wrapper */}
        {/* Slider Wrapper */}
        <div className="relative">

          {/* LEFT BUTTON */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`
    absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-20
    w-10 h-10 md:w-12 md:h-12 rounded-full
    flex items-center justify-center
    border shadow-lg transition-all

    ${canScrollLeft
                ? "bg-white hover:bg-[#e63946] hover:text-white border-slate-200 hover:border-[#e63946]"
                : "bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed shadow-none"
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
    absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-20
    w-10 h-10 md:w-12 md:h-12 rounded-full
    flex items-center justify-center
    border shadow-lg transition-all

    ${canScrollRight
                ? "bg-white hover:bg-[#e63946] hover:text-white border-slate-200 hover:border-[#e63946]"
                : "bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed shadow-none"
              }
  `}
          >
            <ChevronRight size={20} />
          </button>

          {/* Products */}
          <div
            ref={sliderRef}
            className="
    flex gap-4 md:gap-5
    overflow-x-auto
    overflow-y-visible
    scroll-smooth
    snap-x snap-mandatory
    no-scrollbar
    px-12 md:px-4
    py-6
  "
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                className="
        snap-start
        group flex-shrink-0
        w-[75%]
        sm:w-[48%]
        md:w-[31%]
        lg:w-[23.5%]
        xl:w-[19.2%]
      "
              >

                {/* Product Card */}
                <div
                  className="
          bg-white rounded-[24px]
          border border-slate-200
          overflow-hidden
          shadow-sm
          hover:shadow-2xl
          hover:-translate-y-1
          transition-all duration-300
        "
                >

                  {/* Product Image */}
                  <div
                    className="
    relative
    bg-slate-50
    h-[220px] sm:h-[240px] md:h-[250px]
    flex items-center justify-center
    overflow-hidden
    p-6
  "
                  >
                    <Link href="/">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="
    w-full
    h-full
    max-w-[220px]
    max-h-[220px]
    object-contain
    object-center
    group-hover:scale-105
    transition-transform duration-500
  "
                      />
                    </Link>

                    {/* Add To Cart */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <button className="h-10 px-4 rounded-full bg-[#e63946] text-white text-sm font-medium hover:bg-slate-900 transition-colors flex items-center gap-2 whitespace-nowrap">
                        <ShoppingCart size={15} />
                        Add To Cart
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">

                    <p className="text-xs text-slate-400 mb-1">
                      {product.category}
                    </p>

                    <Link href="/">
                      <h3
                        className="
                text-sm md:text-[15px]
                font-semibold
                leading-[1.45]
                text-slate-800
                hover:text-[#e63946]
                transition-colors
                line-clamp-2
                min-h-[44px]
              "
                      >
                        {product.name}
                      </h3>
                    </Link>

                    <div className="mt-3 flex items-center justify-between">

                      <span className="text-base md:text-lg font-bold text-slate-900">
                        {product.price}
                      </span>

                      <Link
                        href="/"
                        className="text-xs md:text-sm text-slate-500 hover:text-[#e63946] transition-colors"
                      >
                        View
                      </Link>

                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}