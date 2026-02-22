"use client";

import React from 'react';
// Aliasing to 'NextImage' prevents the "Failed to construct Image" error
import NextImage from 'next/image';
import { ShoppingCart, Eye } from 'lucide-react';
import img from '../../assets/product.png'
const FeaturedProducts = () => {
    const products = [
        {
            id: 1,
            brand: "Canon",
            name: "imageRUNNER Advance DX 2625i Multi-Function Monochrome Laser Printer",
            price: "AED 4,500",
            image: img,
        },
        {
            id: 2,
            brand: "HP",
            name: "LaserJet Enterprise E60165dn",
            price: "Quote Required",
            image: img,
        },
        {
            id: 3,
            brand: "Epson",
            name: "EcoTank L6270 Wi-Fi All-in-One Ink Tank",
            price: "AED 1,200",
            image: img,
        },
        {
            id: 4,
            brand: "Brother",
            name: "MFC-L2710DW Compact Multi-Function",
            price: "AED 850",
            image: img,
        }
    ];

    return (
        <section className="w-full py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">

              <div className="mb-[61px] text-center lg:text-left">
    <h3 className="
        text-[32px] md:text-[42px] lg:text-[48px] 
        font-[800] 
        text-gray-900  
        tracking-[-0.05em]   
        leading-[1.1]       
        inline-block         
        relative
    ">
        Featured Products
        
        <span className="block h-[3px] w-12 bg-[#e63946] mt-3 mx-auto lg:mx-0 rounded-full" />
    </h3>
</div>
                {/* --- Product Grid --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {products.map((product) => (
                        <article key={product.id} className="group flex flex-col">

                            {/* Image Container with Fixed Aspect Ratio */}
                            <div className="relative aspect-[4/5] mb-6 rounded-2xl overflow-hidden bg-[#f9f9f9] flex items-center justify-center p-8 transition-all duration-500 group-hover:bg-[#f3f3f3]">

                                {/* Properly using NextImage for performance */}
                                <NextImage
                                    src={product.image}
                                    alt={`${product.brand} ${product.name}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    className="object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Hover Quick View Button */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                    <button className="bg-white text-gray-900 p-4 rounded-full shadow-2xl hover:bg-[#e63946] hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0">
                                        <Eye size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Information Section */}
                            <div className="flex flex-col flex-grow px-2">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                        {product.brand}
                                    </span>
                                    <span className="text-[#e63946] font-black text-sm tracking-tight">
                                        {product.price}
                                    </span>
                                </div>

                                {/* Name handles long/short text perfectly with line-clamp */}
                                <h4 className="text-gray-900 font-bold text-lg leading-snug tracking-tight mb-6 line-clamp-2 min-h-[3.2rem]">
                                    {product.name}
                                </h4>

                                {/* Primary CTA */}
                                <button className="mt-auto w-full py-4 border border-gray-200 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:bg-gray-900 hover:text-white hover:border-gray-900 group/btn shadow-sm active:scale-[0.98]">
                                    <ShoppingCart size={18} className="group-hover/btn:animate-pulse" />
                                    <span className="text-[11px] font-black uppercase tracking-widest">Add to Inquiry</span>
                                </button>
                            </div>

                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;