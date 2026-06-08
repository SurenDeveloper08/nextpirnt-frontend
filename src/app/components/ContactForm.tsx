"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    // Auto hide alerts after 5 seconds
    useEffect(() => {
        if (!success && !error) return;

        const timer = setTimeout(() => {
            setSuccess("");
            setError("");
        }, 5000);

        return () => clearTimeout(timer);
    }, [success, error]);

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

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setLoading(true);
        setSuccess("");
        setError("");

        try {
            const { data } = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/contact`,
                formData
            );

            setSuccess(
                data.message ||
                "Thank you! Your message has been sent successfully."
            );

            // Reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
        } catch (err: any) {
  setError(
    err.response?.data?.message ||
    err.message ||
    "Something went wrong. Please try again."
  );
} finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            {/* Heading */}
            <div className="mb-6">
                <h2 className="text-2xl font-black text-slate-900 uppercase">
                    Get in Touch
                </h2>

                <p className="text-slate-500 mt-3">
                    We provide fast printer services across Abu Dhabi, Dubai, and nearby
                    areas.
                </p>
            </div>

            {/* Success Message */}
            {success && (
                <div className="mb-5 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-700">
                    {success}
                </div>
            )}

            {/* Error Message */}
            {error && (
                <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-700">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        name="phone"
                        placeholder="+971 50 123 4567"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                </div>

                {/* Service */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Service Required
                    </label>

                    <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                    >
                        <option value="">Select Service</option>
                        <option value="Printer AMC">Printer AMC</option>
                        <option value="Printer Rental">Printer Rental</option>
                        <option value="Repair Services">Repair Services</option>
                        <option value="Consumables">Consumables</option>
                        <option value="Printer for Sale">Printer for Sale</option>
                        <option value="Office Stationery">Office Stationery</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Message */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        Message
                    </label>

                    <textarea
                        name="message"
                        rows={5}
                        placeholder="Tell us about your requirement..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;