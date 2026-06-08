import React from "react";
import ServicesSection from "./ServicesSection";
import Breadcrumbs from "./Breadcrumbs";

const ServicesClient = () => {
  return (
    <section className="bg-[#f8fafc] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        {/* HEADER SECTION */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900">
            Our Services
          </h1>

          {/* Breadcrumb spacing */}
          <div className="mt-3">
            <Breadcrumbs />
          </div>
        </div>
  </div>
        {/* SERVICES CONTENT */}
        <div className="mt-6">
          <ServicesSection />
        </div>

    
    </section>
  );
};

export default ServicesClient;