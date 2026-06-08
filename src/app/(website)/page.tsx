import Hero from "../components/hero/page";
import AboutSection from "../components/AboutUsSection";
import Services from "../components/ServicesSection";

// const AboutUs = dynamic(() => import("./components/AboutUs"), {
//   ssr: true,
//   loading: () => null,
// });

import WhyChooseUs from "../components/WhyChooseUs";

import BrandsSupport from "../components/BrandsSupport";

import FeaturedProducts from "../components/FeaturedProducts";
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
async function getFeaturedProducts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/featured/products`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  return data.data;
}


export default async function HomePage() {
  const products = await getFeaturedProducts();
  return (
    <main
    // className="flex min-h-screen items-center justify-center bg-white"
    >
      <Hero />
      <BrandsSupport />
      <AboutSection />
      <Services />

      {/* <AMCPlans/> */}
      <FeaturedProducts products={products} />
      {/* <AboutUs/>
      <ProductShowcase /> */}
      <WhyChooseUs />
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
