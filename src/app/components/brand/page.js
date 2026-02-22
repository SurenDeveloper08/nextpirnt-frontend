"use client";

import React from 'react';
// Import NextImage to fix potential "Failed to construct Image" conflicts
import NextImage from 'next/image';

// Import your assets
import Canon from '../../assets/brands/canon.jpg'
import Sharp from '../../assets/brands/Sharp.jpg' // Changed variable name to match file
import Epson from '../../assets/brands/epson.jpg'
import Develop from '../../assets/brands/develop.jpg' // Changed variable name to match file
import KonicaMinolta from '../../assets/brands/konica-monolta.jpg'
import Kyocera from '../../assets/brands/kyocera.jpg' // Changed variable name to match file

const BrandShowcase = () => {
  const brands = [
    { name: "Canon", logo: Canon },
    { name: "Sharp", logo: Sharp },
    { name: "Epson", logo: Epson },
    { name: "Develop", logo: Develop },
    { name: "Konica Minolta", logo: KonicaMinolta },
    { name: "Kyocera", logo: Kyocera },
  ];

  return (
    <section className="w-full bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="group relative flex items-center justify-center h-32 px-8 transition-all duration-500"
            >
              <div className="relative w-full h-16 opacity-100 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                 <NextImage
                  src={brand.logo}
                  alt={`${brand.name} authorized printer machines`}
                  fill
                  className="object-contain"
                  placeholder="blur" // Optional: adds a nice blur-up effect while loading
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;