import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Eye,
  Target,
  CheckCircle2,
  Users,
  Headphones,
  BriefcaseBusiness,
  MapPin,
} from "lucide-react";

/* =========================================================
   GET ABOUT
========================================================= */

async function getAbout() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/about`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return null;
    }

    const data = await res.json();

    return data?.about ?? null;
  } catch (error) {
    console.error("About fetch error:", error);
    return null;
  }
}

/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata(): Promise<Metadata> {
  const about = await getAbout();

  return {
    title:
      about?.metaTitle ||
      about?.title ||
      "About Nexprint Office Equipments LLC",

    description:
      about?.metaDescription ||
      about?.description ||
      "Learn more about Nexprint Office Equipments LLC and our printing solutions in Abu Dhabi, UAE.",

    keywords: about?.metaKeywords || "",

    openGraph: {
      title:
        about?.metaTitle ||
        about?.title ||
        "About Nexprint Office Equipments LLC",

      description:
        about?.metaDescription ||
        about?.description ||
        "",

      images: about?.image
        ? [
            {
              url: about.image,
            },
          ]
        : [],

      type: "website",
    },
  };
}

/* =========================================================
   ABOUT PAGE
========================================================= */

export default async function AboutPage() {
  const about = await getAbout();

  if (!about) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-white px-5">
        <div className="text-center">
          <p className="text-[15px] text-[#667085]">
            About information is currently unavailable.
          </p>

          <Link
            href="/"
            className="mt-5 inline-flex items-center gap-2 text-[14px] font-medium text-[#e63946]"
          >
            Return Home
            <ArrowRight size={15} strokeWidth={1.8} />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="overflow-hidden bg-white">
      {/* =====================================================
          HERO / ABOUT INTRO
      ===================================================== */}

      <section className="relative bg-white py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28">
        {/* Background Accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-48 top-0 h-[500px] w-[500px] rounded-full bg-[#e63946]/[0.025] blur-3xl"
        />

        <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
          <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14 xl:gap-20">
            {/* Content */}
            <div className="min-w-0 lg:max-w-[650px]">
              {/* Section Label */}
              <div className="mb-4 flex items-center gap-2.5">
                <span className="h-[2px] w-7 rounded-full bg-[#e63946]" />

                <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#e63946] sm:text-[12px]">
                  About Nexprint
                </span>
              </div>

              {/* Optional Subtitle */}
              {about.subtitle && (
                <p className="mb-3 text-[13px] font-medium text-[#e63946] sm:text-[14px]">
                  {about.subtitle}
                </p>
              )}

              {/* Heading */}
              <h1 className="max-w-[680px] text-[34px] font-semibold leading-[1.13] tracking-[-0.03em] text-[#27303f] sm:text-[40px] md:text-[46px] lg:text-[50px] xl:text-[54px]">
                {about.title}
              </h1>

              {/* Description */}
              <p className="mt-5 max-w-[620px] text-[14.5px] font-normal leading-[1.8] text-[#667085] sm:text-[15.5px] lg:text-[16px]">
                {about.description}
              </p>

              {/* Small Highlights */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <AboutPoint text="Printer Sales & Rental" />
                <AboutPoint text="Repair & AMC Support" />
                <AboutPoint text="Genuine Consumables" />
                <AboutPoint text="Office Equipment Solutions" />
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#e63946] px-6 text-[13.5px] font-medium text-white transition-all duration-300 hover:bg-[#cf303d] hover:shadow-[0_10px_30px_rgba(230,57,70,0.18)] sm:px-7 sm:text-[14px]"
                >
                  Contact Us

                  <ArrowRight
                    size={16}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative mx-auto w-full min-w-0 max-w-[720px] lg:mx-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-[#f8f9fa] sm:rounded-[24px]">
                {about.image ? (
                  <img
                    src={about.image}
                    alt={about.title || "About Nexprint"}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-[13px] text-[#98a2b3]">
                    Nexprint
                  </div>
                )}
              </div>

              {/* subtle decoration */}
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -left-4 -z-10 h-[45%] w-[45%] rounded-[20px] bg-[#e63946]/[0.05]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VISION & MISSION
      ===================================================== */}

      {(about.vision || about.mission) && (
        <section className="bg-[#fafafa] py-14 sm:py-16 md:py-20 lg:py-24">
          <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
            {/* Heading */}
            <div className="mx-auto max-w-[720px] text-center">
              <div className="mb-3 flex items-center justify-center gap-2.5">
                <span className="h-[2px] w-7 rounded-full bg-[#e63946]" />

                <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#e63946] sm:text-[12px]">
                  Our Direction
                </span>

                <span className="h-[2px] w-7 rounded-full bg-[#e63946]" />
              </div>

              <h2 className="text-[29px] font-semibold leading-[1.18] tracking-[-0.025em] text-[#27303f] sm:text-[34px] md:text-[38px] lg:text-[44px]">
                Built Around{" "}
                <span className="text-[#e63946]">
                  Reliable Service
                </span>
              </h2>
            </div>

            {/* Cards */}
            <div className="mx-auto mt-9 grid max-w-[1200px] gap-5 md:mt-11 md:grid-cols-2 lg:gap-6">
              {/* Vision */}
              {about.vision && (
                <div className="rounded-[20px] border border-[#eaecf0] bg-white p-6 sm:p-7 lg:p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#e63946]/[0.07] text-[#e63946]">
                    <Eye size={20} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-5 text-[20px] font-semibold tracking-[-0.02em] text-[#27303f] sm:text-[22px]">
                    Our Vision
                  </h3>

                  <p className="mt-3 text-[14px] font-normal leading-[1.8] text-[#667085] sm:text-[15px]">
                    {about.vision}
                  </p>
                </div>
              )}

              {/* Mission */}
              {about.mission && (
                <div className="rounded-[20px] border border-[#eaecf0] bg-white p-6 sm:p-7 lg:p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#e63946]/[0.07] text-[#e63946]">
                    <Target size={20} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-5 text-[20px] font-semibold tracking-[-0.02em] text-[#27303f] sm:text-[22px]">
                    Our Mission
                  </h3>

                  <p className="mt-3 text-[14px] font-normal leading-[1.8] text-[#667085] sm:text-[15px]">
                    {about.mission}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          COMPANY NUMBERS
      ===================================================== */}

      {(about.experienceYears ||
        about.customersServed ||
        about.supportAvailable) && (
        <section className="border-y border-[#eaecf0] bg-white">
          <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {/* Experience */}
              <StatItem
                icon={<BriefcaseBusiness size={18} strokeWidth={1.7} />}
                value={
                  about.experienceYears
                    ? `${about.experienceYears}+`
                    : "—"
                }
                label="Years Experience"
              />

              {/* Customers */}
              <StatItem
                icon={<Users size={18} strokeWidth={1.7} />}
                value={
                  about.customersServed
                    ? `${about.customersServed}+`
                    : "—"
                }
                label="Customers Served"
              />

              {/* Location */}
              <StatItem
                icon={<MapPin size={18} strokeWidth={1.7} />}
                value="UAE"
                label="Business Support"
              />

              {/* Support */}
              <StatItem
                icon={<Headphones size={18} strokeWidth={1.7} />}
                value={about.supportAvailable || "—"}
                label="Support Available"
              />
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#fafafa] py-14 sm:py-16 md:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e63946]/[0.025] blur-3xl"
        />

        <div className="relative mx-auto max-w-[760px] px-5 text-center sm:px-7">
          <div className="mb-3 flex items-center justify-center gap-2.5">
            <span className="h-[2px] w-7 rounded-full bg-[#e63946]" />

            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#e63946] sm:text-[12px]">
              Let&apos;s Work Together
            </span>

            <span className="h-[2px] w-7 rounded-full bg-[#e63946]" />
          </div>

          <h2 className="text-[29px] font-semibold leading-[1.18] tracking-[-0.025em] text-[#27303f] sm:text-[34px] md:text-[38px] lg:text-[42px]">
            Need a Reliable{" "}
            <span className="text-[#e63946]">
              Printing Partner?
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[600px] text-[14px] leading-[1.75] text-[#667085] sm:text-[15px]">
            Contact Nexprint for printer sales, rental, repair,
            AMC and office equipment solutions across Abu Dhabi
            and the UAE.
          </p>

          <Link
            href="/contact"
            className="group mt-7 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#e63946] px-7 text-[14px] font-medium text-white transition-all duration-300 hover:bg-[#cf303d] hover:shadow-[0_10px_30px_rgba(230,57,70,0.18)]"
          >
            Contact Us

            <ArrowRight
              size={16}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   SMALL ABOUT POINT
========================================================= */

function AboutPoint({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e63946]/[0.07] text-[#e63946]">
        <CheckCircle2 size={14} strokeWidth={1.8} />
      </span>

      <span className="text-[13.5px] font-medium text-[#475467] sm:text-[14px]">
        {text}
      </span>
    </div>
  );
}

/* =========================================================
   STAT ITEM
========================================================= */

function StatItem({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string | number;
  label: string;
}) {
  return (
    <div className="relative flex min-h-[150px] flex-col items-center justify-center px-4 py-8 text-center sm:min-h-[170px]">
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#e63946]/[0.07] text-[#e63946]">
        {icon}
      </div>

      <p className="text-[26px] font-semibold tracking-[-0.03em] text-[#27303f] sm:text-[30px] lg:text-[34px]">
        {value}
      </p>

      <p className="mt-1.5 text-[12px] font-normal text-[#667085] sm:text-[13px]">
        {label}
      </p>
    </div>
  );
}