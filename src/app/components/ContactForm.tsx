"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  /* =========================================================
     AUTO HIDE ALERT
  ========================================================= */

  useEffect(() => {
    if (!success && !error) return;

    const timer = setTimeout(() => {
      setSuccess("");
      setError("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [success, error]);

  /* =========================================================
     HANDLE CHANGE
  ========================================================= */

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =========================================================
     HANDLE SUBMIT
  ========================================================= */

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/contact`,
        formData
      );

      setSuccess(
        data?.message ||
          "Thank you! Your enquiry has been sent successfully."
      );

      setFormData(initialFormData);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.message ||
            err.message ||
            "Something went wrong. Please try again."
        );
      } else {
        setError(
          "Something went wrong. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* =====================================================
          ALERTS
      ===================================================== */}

      {success && (
        <div
          role="status"
          className="mb-6 flex items-start gap-3 rounded-[12px] border border-emerald-200 bg-emerald-50 px-4 py-3.5"
        >
          <CheckCircle2
            className="mt-0.5 h-[18px] w-[18px] shrink-0 text-emerald-600"
            strokeWidth={1.8}
          />

          <p className="text-[13.5px] leading-[1.6] text-emerald-700">
            {success}
          </p>
        </div>
      )}

      {error && (
        <div
          role="alert"
          className="mb-6 flex items-start gap-3 rounded-[12px] border border-red-200 bg-red-50 px-4 py-3.5"
        >
          <AlertCircle
            className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#e63946]"
            strokeWidth={1.8}
          />

          <p className="text-[13.5px] leading-[1.6] text-red-700">
            {error}
          </p>
        </div>
      )}

      {/* =====================================================
          FORM
      ===================================================== */}

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        {/* NAME + EMAIL */}

        <div className="grid gap-5 md:grid-cols-2">
          <FormField
            label="Full Name"
            required
          >
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </FormField>

          <FormField
            label="Email Address"
            required
          >
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </FormField>
        </div>

        {/* PHONE + SERVICE */}

        <div className="grid gap-5 md:grid-cols-2">
          <FormField
            label="Phone Number"
            required
          >
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              placeholder="+971 50 000 0000"
              value={formData.phone}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </FormField>

          <FormField
            label="Service Required"
            required
          >
            <div className="relative">
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={`${inputClass} cursor-pointer appearance-none pr-11`}
              >
                <option value="">
                  Select a service
                </option>

                <option value="Printer Sales">
                  Printer Sales
                </option>

                <option value="Printer Rental">
                  Printer Rental
                </option>

                <option value="Printer AMC">
                  Printer AMC
                </option>

                <option value="Repair Services">
                  Printer Repair
                </option>

                <option value="Consumables">
                  Printer Consumables
                </option>

                <option value="Office Equipment">
                  Office Equipment
                </option>

                <option value="Office Stationery">
                  Office Stationery
                </option>

                <option value="Other">
                  Other
                </option>
              </select>

              {/* custom select arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 5.25L7 8.75L10.5 5.25"
                    stroke="#98a2b3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </FormField>
        </div>

        {/* MESSAGE */}

        <FormField
          label="Message"
          required
        >
          <textarea
            name="message"
            rows={5}
            placeholder="Tell us about your requirement..."
            value={formData.message}
            onChange={handleChange}
            required
            className={`${inputClass} min-h-[140px] resize-y`}
          />
        </FormField>

        {/* SUBMIT */}

        <div className="pt-1">
          <button
            type="submit"
            disabled={loading}
            className="
              group
              inline-flex
              min-h-[48px]
              w-full
              items-center
              justify-center
              gap-2.5
              rounded-full
              bg-[#e63946]
              px-7
              text-[14px]
              font-medium
              text-white
              transition-all
              duration-300
              hover:bg-[#cf303d]
              hover:shadow-[0_10px_30px_rgba(230,57,70,0.18)]
              disabled:cursor-not-allowed
              disabled:opacity-60
              sm:w-auto
            "
          >
            {loading ? (
              <>
                <Loader2
                  className="h-4 w-4 animate-spin"
                  strokeWidth={1.8}
                />

                Sending...
              </>
            ) : (
              <>
                Send Enquiry

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.8}
                />
              </>
            )}
          </button>

          <p className="mt-3 text-[11.5px] leading-[1.6] text-[#98a2b3]">
            Our team will contact you regarding your enquiry.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

/* =========================================================
   FIELD
========================================================= */

function FormField({
  label,
  required = false,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-[13px] font-medium text-[#475467]">
        {label}

        {required && (
          <span
            className="ml-1 text-[#e63946]"
            aria-hidden="true"
          >
            *
          </span>
        )}
      </label>

      {children}
    </div>
  );
}

/* =========================================================
   COMMON INPUT STYLE
========================================================= */

const inputClass = `
  w-full
  rounded-[12px]
  border
  border-[#dfe3e8]
  bg-white
  px-4
  py-3
  text-[14px]
  text-[#27303f]
  outline-none
  transition-all
  duration-200
  placeholder:text-[#a7adb7]
  hover:border-[#cfd4dc]
  focus:border-[#e63946]
  focus:ring-[3px]
  focus:ring-[#e63946]/[0.07]
`;