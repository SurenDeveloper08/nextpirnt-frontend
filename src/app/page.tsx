import Image from "next/image";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./components/hero/page"), {
  ssr: true,
  loading: () => null,
});

const Services = dynamic(() => import("./components/ServicesSection"), {
  ssr: true,
  loading: () => null,
});

const WhyChooseUs = dynamic(() => import("./components/WhyChooseUs"), {
  ssr: true,
  loading: () => null,
});

const BrandsSupport = dynamic(() => import("./components/BrandsSupport"), {
  ssr: true,
  loading: () => null,
});

const ProductShowcase = dynamic(() => import("./components/ProductShowcase"), {
  ssr: true,
  loading: () => null,
});

const ProcessSection = dynamic(() => import("./components/ProcessSection"), {
  ssr: true,
  loading: () => null,
});

const LeadCaptureForm = dynamic(() => import("./components/LeadCaptureForm"), {
  ssr: true,
  loading: () => null,
});

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
      <Services />
      <ProductShowcase />
      <WhyChooseUs />
      <ProcessSection />
      <LeadCaptureForm />
      {/* <AboutUs />
      <Service />
      <FeaturedProducts />
      <BrandShowcase/>
      <Features /> */}
    </main>
  );
}
