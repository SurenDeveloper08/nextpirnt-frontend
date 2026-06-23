import type { Metadata } from "next";
import Link from "next/link";

async function getAbout() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/about`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();
  return data.about;
}

export async function generateMetadata(): Promise<Metadata> {
  const about = await getAbout();

  return {
    title: about?.metaTitle || about?.title || "About Us",
    description:
      about?.metaDescription || about?.description || "",
    keywords: about?.metaKeywords || "",
    openGraph: {
      title: about?.metaTitle || about?.title,
      description:
        about?.metaDescription || about?.description,
      images: about?.image
        ? [
            {
              url: about.image,
            },
          ]
        : [],
    },
  };
}

export default async function AboutPage() {
  const about = await getAbout();

  if (!about) {
    return (
      <div className="py-32 text-center">
        About information not found
      </div>
    );
  }

  return (
     <section className="bg-white">

      {/* HERO */}
      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            <div>

              <span className="inline-flex px-5 py-2 rounded-full bg-red-50 text-[#e63946] font-semibold text-sm mb-5">
                {about.subtitle}
              </span>

              <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-slate-900 leading-tight mb-6">
                {about.title}
              </h1>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                {about.description}
              </p>

              <Link
                href="/contact"
                className="inline-flex mt-8 px-8 py-3 bg-[#e63946] text-white rounded-full font-semibold hover:bg-slate-900 transition"
              >
                Contact Us
              </Link>

            </div>

            <div>
              <img
                src={about.image}
                alt={about.title}
                className="w-full h-[300px] md:h-[500px] object-cover rounded-[32px] shadow-xl"
              />
            </div>

          </div>

        </div>
      </div>

     

      {/* VISION & MISSION */}
      <div className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="bg-slate-50 rounded-[32px] p-8 lg:p-10">
              <h2 className="text-3xl font-black text-slate-900 mb-5">
                Our Vision
              </h2>

              <p className="text-slate-600 leading-relaxed">
                {about.vision}
              </p>
            </div>

            <div className="bg-[#e63946] rounded-[32px] p-8 lg:p-10 text-white">
              <h2 className="text-3xl font-black mb-5">
                Our Mission
              </h2>

              <p className="leading-relaxed text-white/90">
                {about.mission}
              </p>
            </div>

          </div>

        </div>
      </div>

    
      <section className="py-20 bg-[#e63946] relative overflow-hidden">

        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">


            <div >

              <h3 className="text-4xl lg:text-5xl font-black text-white">
                {about.experienceYears}+
              </h3>

              <p className="text-white/90 mt-3 text-sm md:text-base">
                  Years Experience
              </p>

            </div>
            <div >

              <h3 className="text-4xl lg:text-5xl font-black text-white">
                {about.customersServed}+
              </h3>

              <p className="text-white/90 mt-3 text-sm md:text-base">
                  Customers Served
              </p>

            </div>
           
            <div >

              <h3 className="text-4xl lg:text-5xl font-black text-white">
                {about.customersServed}+
              </h3>

              <p className="text-white/90 mt-3 text-sm md:text-base">
                  Customers Served
              </p>

           </div>
           <div>

              <h3 className="text-4xl lg:text-5xl font-black text-white">
                {about.supportAvailable}
              </h3>

              <p className="text-white/90 mt-3 text-sm md:text-base">
                Support Available
              </p>

            </div>
          </div>

        </div>
      </section>

      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Need a Reliable Printing Partner?
        </h2>
        <p className="text-slate-600 mb-8">
          Contact Nexprint today for sales, rental, or service across the UAE.
        </p>

        <a
          href="/contact"
          className="inline-block bg-[#e63946] text-white px-8 py-3 font-bold hover:opacity-90 rounded-2xl transition shadow-md"
        >
          CONTACT US
        </a>
      </div>
    </section>
  );
}