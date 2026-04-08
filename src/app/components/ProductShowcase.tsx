"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    brand: "Canon",
    model: "imageRUNNER ADVANCE C5535i",
    image: "/products/canon-c5535i.png",
  },
  {
    brand: "Ricoh",
    model: "IM C3000",
    image: "/products/ricoh-imc3000.png",
  },
  {
    brand: "Konica Minolta",
    model: "bizhub C360i",
    image: "/products/konica-c360i.png",
  }
];

export default function ProductShowcase() {
  return (
    <section className="py-20 md:py-28 bg-white" aria-labelledby="top-selling-title">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Left Aligned with Brand #e63946 */}
        <header className="mb-16 border-l-4 pl-6" style={{ borderColor: '#e63946' }}>
          <h2 className="text-[11px] font-black tracking-[0.3em] uppercase mb-2" style={{ color: '#e63946' }}>
            Market Favorites
          </h2>
          <h3 id="top-selling-title" className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 leading-none">
            Top Selling <span style={{ color: '#e63946' }}>Machines</span>
          </h3>
        </header>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col border border-slate-100 bg-slate-50 transition-all duration-500 hover:shadow-2xl hover:bg-white"
            >
              {/* Image Container - Square & Padded */}
              <div className="relative aspect-square w-full p-10 md:p-14 overflow-hidden bg-white">
               
                <Image 
                  src={product.image} 
                  alt={`${product.brand} ${product.model} professional photocopier`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Product Details - Left Aligned */}
              <div className="p-8 flex flex-col flex-grow border-t border-slate-100">
                <div className="mb-10">
                  <span className="block text-[11px] font-black uppercase tracking-[0.2em] mb-2" style={{ color: '#e63946' }}>
                    {product.brand}
                  </span>
                  <h4 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight leading-tight">
                    {product.model}
                  </h4>
                </div>

                {/* Professional Action Button */}
                <button 
                  className="mt-auto w-full group/btn flex items-center justify-between bg-slate-900 text-white py-5 px-8 font-black uppercase text-[12px] tracking-[0.2em] transition-all duration-300 rounded-none overflow-hidden relative"
                >
                  <span className="relative z-10">Get Best Quote</span>
                  <ArrowUpRight className="w-5 h-5 relative z-10 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  
                  {/* Hover Background Slide */}
                  <div 
                    className="absolute inset-0 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" 
                    style={{ backgroundColor: '#e63946' }}
                  ></div>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}