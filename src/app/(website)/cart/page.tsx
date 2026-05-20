"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
export default function CartPage() {
    const [cart, setCart] = useState<any[]>([]);

    // Load cart
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(data);
    }, []);

    // Save helper
    const saveCart = (updated: any[]) => {
        setCart(updated);
        localStorage.setItem("cart", JSON.stringify(updated));
    };

    // Increase qty
    const increaseQty = (slug: string) => {
        const updated = cart.map((item) =>
            item.slug === slug ? { ...item, qty: item.qty + 1 } : item
        );
        saveCart(updated);
    };

    // Decrease qty
    const decreaseQty = (slug: string) => {
        const updated = cart
            .map((item) =>
                item.slug === slug
                    ? { ...item, qty: Math.max(1, item.qty - 1) }
                    : item
            )
            .filter((item) => item.qty > 0);

        saveCart(updated);
    };

    // Remove item
    const removeItem = (slug: string) => {
        const updated = cart.filter((item) => item.slug !== slug);
        saveCart(updated);
    };

    // Total
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    return (
       <section className="bg-[#f8fafc] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">

            {/* TITLE */}
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8">
                Shopping Cart
            </h1>

            {/* EMPTY STATE */}
            {cart.length === 0 ? (
                <div className="text-center py-20 text-slate-500">
                    Your cart is empty
                </div>
            ) : (
                <div className="space-y-6">

                    {cart.map((item) => (
                        <div
                            key={item.slug}
                            className="flex flex-col md:flex-row md:items-center justify-between gap-5 border border-slate-100 rounded-xl p-4 md:p-6 bg-white"
                        >

                            {/* PRODUCT */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    className="w-20 h-20 object-cover rounded-lg bg-slate-50"
                                />

                                <div>
                                    <h2 className="font-medium text-slate-900">
                                        {item.name}
                                    </h2>

                                    <p className="text-slate-500 text-sm mt-1">
                                        ${item.price}
                                    </p>
                                </div>
                            </div>

                            {/* QTY */}
                            <div className="flex items-center gap-3 border border-slate-200 rounded-full px-3 py-1 w-fit">

                                <button
                                    onClick={() => decreaseQty(item.slug)}
                                    className="text-slate-600 px-2"
                                >
                                    −
                                </button>

                                <span className="w-6 text-center text-slate-800">
                                    {item.qty}
                                </span>

                                <button
                                    onClick={() => increaseQty(item.slug)}
                                    className="text-slate-600 px-2"
                                >
                                    +
                                </button>
                            </div>

                            {/* PRICE */}
                            <div className="font-medium text-slate-900">
                                ${item.price * item.qty}
                            </div>

                            {/* REMOVE */}
                            <button
                                onClick={() => removeItem(item.slug)}
                                className="text-sm text-slate-400 hover:text-slate-700 transition"
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                    {/* SUMMARY */}
                    <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">

                        <div className="text-slate-700 text-lg font-medium">
                            Total: ${total}
                        </div>

                        <Link
                            href="/checkout"
                            className="w-full md:w-auto px-6 py-3 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition text-center"
                        >
                            Checkout
                        </Link>
                    </div>
                </div>
            )}
        </div>
        </section>
    );
}