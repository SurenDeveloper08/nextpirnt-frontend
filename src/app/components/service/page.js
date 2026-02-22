"use client";

import React from 'react';
import Image from 'next/image';
import Img from '../../assets/photocopy.avif'; // Update with your actual assets

const Service = () => {
    const services = [
        { title: "Sales & Rental", image: Img },
        { title: "IT Services", image: Img },
        { title: "Consumables", image: Img },
        { title: "Office Equipment", image: Img }
    ];

    return (
        <section className="w-full bg-[#f8f9fa] py-12 px-6 md:px-12">
            <div className="max-w-[1440px] mx-auto">


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
                        Our Services
                        <span className="block h-[3px] w-12 bg-[#e63946] mt-3 mx-auto lg:mx-0 rounded-full" />
                    </h3>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-white p-3 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] hover:-translate-y-2 cursor-pointer overflow-hidden"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/5] w-full rounded-[1.5rem] overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 25vw"
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                />

                                {/* Subtle Overlay to darken background slightly for text pop */}
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />

                                {/* Glass-morphism Label - Positioned Floating */}
                                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-xl py-5 px-2 rounded-2xl shadow-xl border border-white/50 transform transition-all duration-500 group-hover:bg-white group-hover:bottom-6">
                                    <h3 className="text-gray-900 font-black text-sm md:text-base uppercase tracking-widest text-center">
                                        {service.title}
                                    </h3>

                                    {/* Action Reveal */}
                                    <div className="h-0 overflow-hidden group-hover:h-5 transition-all duration-500 text-[#e63946] text-[10px] font-bold mt-0 opacity-0 group-hover:opacity-100 group-hover:mt-2 text-center uppercase tracking-[0.2em]">
                                        View Details
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Service;