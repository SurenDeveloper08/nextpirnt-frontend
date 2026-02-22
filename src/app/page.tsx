import Image from "next/image";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./components/hero/page"), {
  ssr: true,
  loading: () => null,
});

const Service = dynamic(() => import("./components/service/page"), {
  ssr: true,
  loading: () => null,
});

const Features = dynamic(() => import("./components/features/page"), {
  ssr: true,
  loading: () => null,
});

const AboutUs = dynamic(() => import("./components/about/page"), {
  ssr: true,
  loading: () => null,
});

const FeaturedProducts = dynamic(() => import("./components/featured/page"), {
  ssr: true,
  loading: () => null,
});

const BrandShowcase = dynamic(() => import("./components/brand/page"), {
  ssr: true,
  loading: () => null,
});
export default function Home() {
  return (
    <main
    // className="flex min-h-screen items-center justify-center bg-white"
    >
      <Hero />
      <AboutUs />
      <Service />
      <FeaturedProducts />
      <BrandShowcase/>
      <Features />
    </main>
  );
}
