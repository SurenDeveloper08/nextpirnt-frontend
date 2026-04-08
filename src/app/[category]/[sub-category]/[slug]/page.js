"use client";

import React, { useState } from 'react';
import { 
  ChevronRight, ShoppingBag, MessageCircle, 
  Minus, Plus, FileText, ShieldCheck, Check 
} from 'lucide-react';

const ProductPage = () => {
  const [qty, setQty] = useState(1);
  const [selectedTab, setSelectedTab] = useState('description');

  const product = {
    brand: "Canon",
    model: "DX C5840i",
    name: "imageRUNNER ADVANCE DX C5840i",
    category: "Multifunction Color Photocopier",
    price: "14,200",
    sku: "CAN-DX-5840I",
    whatsappNumber: "+971500000000", // Replace with your actual number
    description: "The Canon iR-ADV DX C5840i is a high-performance color A3 multifunction printer designed for demanding office environments in the UAE. Featuring advanced cloud connectivity and high-speed scanning, it ensures seamless workflow integration.",
    specs: [
      { label: "Function", value: "Print, Copy, Scan, Send, Store" },
      { label: "Print Speed", value: "40 ppm (A4)" },
      { label: "Resolution", value: "1200 x 1200 dpi" },
      { label: "Toner Code", value: "GPR-61 / C-EXV 58" }
    ]
  };

  const handleWhatsAppInquiry = () => {
    const message = `Hi, I am interested in the ${product.brand} ${product.model}. SKU: ${product.sku}. Quantity: ${qty}. Please provide a quote.`;
    window.open(`https://wa.me/${product.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen text-[#101828] font-sans">
      {/* 1. BREADCRUMBS & SEO HIERARCHY */}
      <nav className="max-w-[1400px] mx-auto px-6 pt-24 pb-6">
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
          <span>Home</span> <ChevronRight size={10} /> 
          <span>{product.brand}</span> <ChevronRight size={10} /> 
          <span className="text-[#e63946]">{product.category}</span>
        </div>
      </nav>

      <main className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        
        {/* 2. IMAGE GALLERY */}
        <div className="sticky top-24">
          <div className="aspect-square bg-[#F9FAFB] rounded-[3rem] p-12 flex items-center justify-center border border-gray-50 group overflow-hidden">
            <img 
              src="https://digitalcopier.ae/wp-content/uploads/2024/08/bizhub-c450i-brousher-370x475.jpg" 
              className="max-h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105" 
              alt={`${product.brand} ${product.model}`}
            />
          </div>
        </div>

        {/* 3. PRODUCT INFO & ACTIONS */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-4">
             <span className="bg-red-50 text-[#e63946] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Genuine Unit</span>
             <span className="text-green-600 text-[10px] font-black uppercase flex items-center gap-1">
               <div className="h-1.5 w-1.5 bg-green-500 rounded-full animate-pulse" /> In Stock UAE
             </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-[950] tracking-tighter uppercase leading-[0.9] mb-4">
            {product.name}
          </h1>
          <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-8">
            Model: {product.model} | SKU: {product.sku}
          </p>

          <div className="flex items-baseline gap-2 mb-10">
            <span className="text-sm font-black text-[#e63946]">AED</span>
            <span className="text-5xl font-[950] tracking-tighter">{product.price}</span>
            <span className="text-gray-400 text-[10px] font-bold uppercase ml-2">Excl. VAT</span>
          </div>

          {/* QUANTITY & ADD TO CART */}
          <div className="space-y-4 mb-8">
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Select Quantity</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-gray-50 rounded-2xl p-1 border border-gray-100">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="h-12 w-12 flex items-center justify-center hover:bg-white rounded-xl transition-all"><Minus size={16}/></button>
                <span className="w-12 text-center font-black">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="h-12 w-12 flex items-center justify-center hover:bg-white rounded-xl transition-all"><Plus size={16}/></button>
              </div>
              <button className="flex-1 bg-[#101828] text-white rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:bg-[#e63946] transition-all shadow-xl active:scale-95">
                <ShoppingBag size={18} /> Add to Inquiry
              </button>
            </div>
          </div>

          {/* WHATSAPP CTA */}
          <button 
            onClick={handleWhatsAppInquiry}
            className="w-full border-2 border-[#25D366] text-[#25D366] py-5 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:bg-[#25D366] hover:text-white transition-all mb-10"
          >
            <MessageCircle size={20} fill="currentColor" /> Inquiry via WhatsApp
          </button>

          {/* TABS (Description / Specs) */}
          <div className="border-t border-gray-100 pt-10">
            <div className="flex gap-8 mb-6 border-b border-gray-50">
              {['description', 'specs'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`pb-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all relative ${selectedTab === tab ? 'text-[#e63946]' : 'text-gray-400'}`}
                >
                  {tab}
                  {selectedTab === tab && <div className="absolute bottom-0 left-0 w-full h-1 bg-[#e63946] rounded-full" />}
                </button>
              ))}
            </div>
            
            <div className="animate-in fade-in duration-500">
              {selectedTab === 'description' ? (
                <p className="text-gray-500 leading-relaxed text-sm font-medium italic">"{product.description}"</p>
              ) : (
                <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                  <table className="w-full text-left">
                    <tbody>
                      {product.specs.map((spec, i) => (
                        <tr key={i} className="border-b border-white last:border-0">
                          <td className="py-4 px-6 text-[9px] font-black uppercase text-gray-400">{spec.label}</td>
                          <td className="py-4 px-6 text-[11px] font-bold text-gray-800">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;