import Image from "next/image";
import dynamic from "next/dynamic";

import Hero from "../components/hero/page";
import AboutSection from "../components/AboutUsSection";
import Services from "../components/ServicesSection";

// const AboutUs = dynamic(() => import("./components/AboutUs"), {
//   ssr: true,
//   loading: () => null,
// });

import HomeProductsSection from "../components/HomeProductsSection";

import WhyChooseUs from "../components/WhyChooseUs";

import BrandsSupport from "../components/BrandsSupport";

import PrinterProducts from "../components/PrinterProducts";
// const AMCPlans = dynamic(() => import("./components/AMCPlans"), {
//   ssr: true,
//   loading: () => null,
// });

// const ProcessSection = dynamic(() => import("./components/ProcessSection"), {
//   ssr: true,
//   loading: () => null,
// });

import ContactSection from "../components/ContactSection";
// const Service = dynamic(() => import("./components/service/page"), {
//   ssr: true,
//   loading: () => null,
// });

// const Features = dynamic(() => import("./components/features/page"), {
//   ssr: true,
//   loading: () => null,
// });

// const AboutUs = dynamic(() => import("./components/about/page"), {
//   ssr: true,
//   loading: () => null,
// });

// const FeaturedProducts = dynamic(() => import("./components/featured/page"), {
//   ssr: true,
//   loading: () => null,
// });

// const BrandShowcase = dynamic(() => import("./components/brand/page"), {
//   ssr: true,
//   loading: () => null,
// });

export default function Home() {
  return (
    <main
    // className="flex min-h-screen items-center justify-center bg-white"
    >
      <Hero />
      <BrandsSupport />
      <AboutSection />
      <Services />

      {/* <AMCPlans/> */}
      <PrinterProducts />
      {/* <AboutUs/>
      <ProductShowcase /> */}
      <WhyChooseUs />
      <ContactSection />
      {/* <ProcessSection />
      <LeadCaptureForm /> */}
      {/* <AboutUs />
      <Service />
      <FeaturedProducts />
      <BrandShowcase/>
      <Features /> */}
    </main>
  );
}
