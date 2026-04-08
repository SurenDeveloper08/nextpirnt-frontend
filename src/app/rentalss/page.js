"use client";

import React, { useState } from 'react';
import {
  SlidersHorizontal, X, Check,
  ArrowUpRight, ChevronRight, Search, ListFilter
} from 'lucide-react';

const ProductListing = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ["All", "New Printers", "Refurbished", "Production", "Consumables"];
  const brands = ["Canon", "HP", "Kyocera", "Konica"];

  const products = [
    { id: 1, name: "Canon iR-ADV DX C5840i", brand: "Canon", type: "Photocopier", img: "https://digitalcopier.ae/wp-content/uploads/2024/08/bizhub-c450i-brousher-370x475.jpg" },
    { id: 2, name: "HP LaserJet Managed E60165", brand: "HP", type: "Laser Printer", img: "https://digitalcopier.ae/wp-content/uploads/2024/08/bizhub-c450i-brousher-370x475.jpg" },
    { id: 3, name: "Kyocera TASKalfa 3554ci", brand: "Kyocera", type: "Multifunction", img: "https://digitalcopier.ae/wp-content/uploads/2024/08/bizhub-c450i-brousher-370x475.jpg" },
    { id: 4, name: "Konica Minolta AccurioPress", brand: "Konica", type: "Production", img: "https://digitalcopier.ae/wp-content/uploads/2024/08/bizhub-c450i-brousher-370x475.jpg" },
    { id: 5, name: "Canon imageRUNNER 2625i", brand: "Canon", type: "Photocopier", img: "https://digitalcopier.ae/wp-content/uploads/2024/08/bizhub-c450i-brousher-370x475.jpg" },
    { id: 6, name: "HP Color LaserJet E87650", brand: "HP", type: "Color MFP", img: "https://digitalcopier.ae/wp-content/uploads/2024/08/bizhub-c450i-brousher-370x475.jpg" },
    { id: 7, name: "Kyocera ECOSYS M3645dn", brand: "Kyocera", type: "Desktop MFP", img: "https://digitalcopier.ae/wp-content/uploads/2024/08/bizhub-c450i-brousher-370x475.jpg" },
    { id: 8, name: "Canon iPF PRO-2100", brand: "Canon", type: "Plotter", img: "https://digitalcopier.ae/wp-content/uploads/2024/08/bizhub-c450i-brousher-370x475.jpg" },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-[#101828] selection:bg-[#e63946] selection:text-white">

      {/* --- 1. HEADER (Filter Button replaced Count) --- */}
      <header className="pt-24 pb-8 px-6 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-3">
          <span>Home</span> <ChevronRight size={10} /> <span>Inventory</span> <ChevronRight size={10} /> <span className="text-[#e63946]">{activeCategory}</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-[950] tracking-tighter uppercase leading-[0.8] mb-4">
              The <span className="text-[#e63946]">Unit</span> Archive.
            </h1>
            <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-widest">
              Authorized B2B Printing Infrastructure • UAE
            </p>
          </div>

          {/* NEW: Top Right Filter Trigger */}
          <div className="hidden md:block">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="group flex items-center gap-3 bg-gray-50 hover:bg-[#101828] transition-all duration-300 pl-5 pr-2 py-2 rounded-full border border-gray-100 shadow-sm cursor-pointer active:scale-95"
            >
              {/* Minimal Label */}
              <span className="text-xs font-[950] group-hover:text-white uppercase tracking-widest transition-colors px-1">
                Filter
              </span>

              {/* Symmetrical Icon Box */}
              <div className="h-10 w-10 flex items-center justify-center group-hover:text-white transition-all duration-300">
                <ListFilter size={18} strokeWidth={2.5} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* --- 2. GRID SECTION (Same logic, ensured proper visibility) --- */}
      <main className="px-6 pb-40 max-w-[1400px] mx-auto mt-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-16">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="relative aspect-[4/5] bg-[#F8F8F8] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden mb-4 transition-all duration-700 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] group-hover:-translate-y-2">
                <div className="absolute inset-0 flex items-center justify-center p-6 md:p-10">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute top-5 left-5 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[8px] font-black uppercase tracking-widest shadow-sm">
                  {product.brand}
                </div>
                <div className="absolute bottom-5 right-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center shadow-xl hover:bg-[#e63946] hover:text-white transition-colors cursor-pointer">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
              <div className="space-y-1 px-1">
                <h3 className="text-xs md:text-base font-[900] tracking-tighter uppercase leading-tight group-hover:text-[#e63946] transition-colors line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between pt-1">
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{product.type}</p>
                  <span className="text-[9px] font-black uppercase text-[#e63946] tracking-tighter cursor-pointer">Quick Quote</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* --- 3. THE FLOATING NAV (Keeping it for mobile & convenience) --- */}
      {/* --- 3. THE FLOATING NAV (Mobile Only) --- */}
      {/* Added 'md:hidden' so it disappears on desktop for a cleaner look */}
      <div className="fixed bottom-8 left-0 w-full z-[100] px-6 flex justify-center pointer-events-none md:hidden">
        <div className="bg-[#101828]/95 backdrop-blur-xl px-2 py-2 rounded-full shadow-2xl flex items-center gap-1 pointer-events-auto border border-white/10">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 bg-white text-[#101828] px-5 py-3 rounded-full text-[9px] font-black uppercase tracking-widest active:scale-95 transition-all"
          >
            <SlidersHorizontal size={12} />
            Filters
          </button>
        </div>
      </div>

      {/* --- 4. FILTER SLIDE-OUT (Drawer) --- */}
      <div className={`fixed inset-0 z-[200] flex justify-end transition-all duration-700 ${isFilterOpen ? 'visible' : 'invisible'}`}>
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-700 ${isFilterOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsFilterOpen(false)}
        />
        <div className={`relative w-full max-w-sm bg-white h-full shadow-2xl transition-transform duration-700 transform ${isFilterOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-8 h-full flex flex-col">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-xl font-[950] tracking-tighter uppercase">Filter <span className="text-[#e63946]">Unit.</span></h2>
              <button onClick={() => setIsFilterOpen(false)} className="h-10 w-10 bg-gray-50 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 space-y-10 overflow-y-auto pr-2 no-scrollbar">
              <section>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300 mb-6">Manufacturer</p>
                <div className="grid grid-cols-2 gap-3">
                  {brands.map(b => (
                    <button key={b} className="group flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-[#e63946] hover:text-white transition-all">
                      <span className="text-[10px] font-black uppercase tracking-widest">{b}</span>
                      <div className="h-3 w-3 rounded-full border border-gray-300 group-hover:border-white transition-all" />
                    </button>
                  ))}
                </div>
              </section>

              <section>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300 mb-6">Unit Condition</p>
                <div className="space-y-3">
                  {["Brand New", "Certified Refurbished"].map(s => (
                    <label key={s} className="flex items-center justify-between p-4 border border-gray-100 rounded-2xl cursor-pointer hover:bg-gray-50 transition-all">
                      <span className="text-[10px] font-black uppercase tracking-widest">{s}</span>
                      <input type="checkbox" className="accent-[#e63946] h-4 w-4" />
                    </label>
                  ))}
                </div>
              </section>
            </div>

            <button onClick={() => setIsFilterOpen(false)} className="w-full bg-[#101828] text-white py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] hover:bg-[#e63946] transition-all mt-auto shadow-xl">
              Update Archive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;