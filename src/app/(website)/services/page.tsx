import type { Metadata } from "next";
import ServicesClient from "@/app/components/ServicesClient";

export const metadata: Metadata = {
  title:
    "Printer Rental, AMC Maintenance, Repair Services & Office Stationery UAE",
  description:
    "Professional printer rental, annual maintenance contracts (AMC), printer repair services, printer consumables, printer sales, and office stationery solutions across UAE for businesses and offices.",
};

export default function Page() {
  return <ServicesClient />;
}