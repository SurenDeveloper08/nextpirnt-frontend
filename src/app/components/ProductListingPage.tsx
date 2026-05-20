"use client";

import React, { useMemo, useState } from "react";
import ProductFilters from "./ProductFilters";
import ProductGrid from "./ProductGrid";
import Breadcrumbs from "./Breadcrumbs";
import { Product } from "@/types/product";

interface ProductListingProps {
  title: string;
  category?: string;
  products: Product[];
}

export default function ProductListing({
  title,
  category,
  products,
}: ProductListingProps) {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return (products || []).filter((p) => {
      return (
        (!category ||
          p.category.toLowerCase() === category.toLowerCase()) &&
        (!selectedBrand || p.brand === selectedBrand) &&
        (!selectedType || p.type === selectedType) &&
        (!selectedColor || p.color === selectedColor)
      );
    });
  }, [products, category, selectedBrand, selectedType, selectedColor]);

  const brands = [...new Set(products.map((p) => p.brand))];
  const types = [...new Set(products.map((p) => p.type))];
  const colors = [...new Set(products.map((p) => p.color))];

  return (
    <section className="bg-[#f8fafc] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-slate-900">
          {title}
        </h1>
        <Breadcrumbs />
        {/* MOBILE FILTER BUTTON */}
        <div className="xl:hidden mt-4 mb-4">
          <button
            onClick={() => setFilterOpen(true)}
            className="w-full h-12 bg-slate-900 text-white rounded-xl"
          >
            Filter Products
          </button>
        </div>

        {/* MAIN LAYOUT */}
        {/* MAIN LAYOUT */}
        <div
          className="
    flex flex-col xl:flex-row
    gap-6 lg:gap-8
    mt-6
    items-start
  "
        >

          {/* DESKTOP FILTER */}
          <aside
            className="
      hidden xl:block
      w-[280px]
      shrink-0
      sticky
      top-24
      self-start
    "
          >
            <ProductFilters
              brands={brands}
              categories={types}
              colors={colors}
              selectedBrand={selectedBrand}
              selectedCategory={selectedType}
              selectedColor={selectedColor}
              setBrand={setSelectedBrand}
              setCategory={setSelectedType}
              setColor={setSelectedColor}
            />
          </aside>

          {/* PRODUCTS */}
          <div className="flex-1 min-w-0">
            <ProductGrid products={filteredProducts} />
          </div>

        </div>
      </div>

      {/* MOBILE FILTER DRAWER */}
      {filterOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 xl:hidden">

          <div
            className="absolute inset-0"
            onClick={() => setFilterOpen(false)}
          />

          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-5 max-h-[85vh] overflow-y-auto">

            <div className="flex justify-between mb-4">
              <h2 className="font-bold text-lg">Filters</h2>

              <button onClick={() => setFilterOpen(false)}>
                ✕
              </button>
            </div>

            <ProductFilters
              brands={brands}
              categories={types}
              colors={colors}
              selectedBrand={selectedBrand}
              selectedCategory={selectedType}
              selectedColor={selectedColor}
              setBrand={setSelectedBrand}
              setCategory={setSelectedType}
              setColor={setSelectedColor}
            />

            <button
              onClick={() => setFilterOpen(false)}
              className="w-full mt-6 h-12 bg-[#e63946] text-white rounded-xl"
            >
              Apply Filters
            </button>

          </div>
        </div>
      )}
    </section>
  );
}