"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
    ShoppingCart,
    Trash2,
    Plus,
    Minus,
} from "lucide-react";

export default function CartPage() {
    const [cart, setCart] = useState<any[]>([]);

    useEffect(() => {
        const storedCart = JSON.parse(
            localStorage.getItem("cart") || "[]"
        );
        setCart(storedCart);
    }, []);

    const saveCart = (updatedCart: any[]) => {
        setCart(updatedCart);
        localStorage.setItem(
            "cart",
            JSON.stringify(updatedCart)
        );

        window.dispatchEvent(
            new Event("cartUpdated")
        );
    };

    const increaseQty = (slug: string) => {
        const updated = cart.map((item) =>
            item.slug === slug
                ? {
                    ...item,
                    qty: item.qty + 1,
                }
                : item
        );

        saveCart(updated);
    };

    const decreaseQty = (slug: string) => {
        const updated = cart.map((item) =>
            item.slug === slug
                ? {
                    ...item,
                    qty: Math.max(
                        1,
                        item.qty - 1
                    ),
                }
                : item
        );

        saveCart(updated);
    };

    const removeItem = (slug: string) => {
        const updated = cart.filter(
            (item) => item.slug !== slug
        );

        saveCart(updated);
    };

    const total = cart.reduce(
        (sum, item) =>
            sum +
            ((item.price || 0) *
                item.qty),
        0
    );

    const hasPriceItems = cart.some(
        (item) => typeof item.price === "number"
    );

    return (
        <section className="bg-slate-50 min-h-screen py-10 md:py-14">
            <div className="max-w-7xl mx-auto px-4">

                {/* TITLE */}

                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900">
                        Shopping Cart
                    </h1>

                    <p className="text-slate-500 mt-2">
                        Review your selected products
                    </p>
                </div>

                {/* EMPTY CART */}

                {cart.length === 0 ? (
                    <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">

                        <ShoppingCart
                            size={60}
                            className="mx-auto text-slate-300"
                        />

                        <h2 className="text-xl font-semibold mt-5">
                            Your cart is empty
                        </h2>

                        <p className="text-slate-500 mt-2">
                            Browse products and add
                            them to your cart.
                        </p>

                        <Link
                            href="/products"
                            className="inline-flex mt-6 px-6 py-3 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-[1fr_350px] gap-8">

                        {/* CART ITEMS */}

                        <div className="space-y-4">

                            {cart.map((item) => (
                                <div
                                    key={item.slug}
                                    className="bg-white border border-slate-200 rounded-2xl p-4 md:p-5"
                                >
                                    <div className="flex flex-col md:flex-row gap-5">

                                        {/* IMAGE */}

                                        <div className="shrink-0">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-24 h-24 md:w-28 md:h-28 rounded-xl object-cover bg-slate-100"
                                            />
                                        </div>

                                        {/* CONTENT */}

                                        <div className="flex-1 min-w-0">

                                            <h3 className="font-semibold text-slate-900 text-base md:text-lg leading-6">
                                                {item.name}
                                            </h3>

                                            {item.price > 0 ? (
                                                <p className="mt-2 text-red-600 font-semibold">
                                                    AED{" "}
                                                    {item.price.toLocaleString()}
                                                </p>
                                            ) : (
                                                <p className="mt-2 text-orange-600 font-medium">
                                                    Enquiry Product
                                                </p>
                                            )}

                                            {/* MOBILE CONTROLS */}

                                            <div className="flex items-center justify-between mt-4 md:hidden">

                                                <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden">

                                                    <button
                                                        onClick={() =>
                                                            decreaseQty(
                                                                item.slug
                                                            )
                                                        }
                                                        className="w-10 h-10 flex items-center justify-center hover:bg-slate-100"
                                                    >
                                                        <Minus size={16} />
                                                    </button>

                                                    <span className="w-10 text-center font-medium">
                                                        {item.qty}
                                                    </span>

                                                    <button
                                                        onClick={() =>
                                                            increaseQty(
                                                                item.slug
                                                            )
                                                        }
                                                        className="w-10 h-10 flex items-center justify-center hover:bg-slate-100"
                                                    >
                                                        <Plus size={16} />
                                                    </button>

                                                </div>

                                                <button
                                                    onClick={() =>
                                                        removeItem(
                                                            item.slug
                                                        )
                                                    }
                                                    className="text-red-600"
                                                >
                                                    <Trash2 size={18} />
                                                </button>

                                            </div>
                                        </div>

                                        {/* DESKTOP ACTIONS */}

                                        <div className="hidden md:flex flex-col items-end justify-between">

                                            <button
                                                onClick={() =>
                                                    removeItem(
                                                        item.slug
                                                    )
                                                }
                                                className="text-red-600 hover:text-red-700"
                                            >
                                                <Trash2 size={18} />
                                            </button>

                                            <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden">

                                                <button
                                                    onClick={() =>
                                                        decreaseQty(
                                                            item.slug
                                                        )
                                                    }
                                                    className="w-10 h-10 flex items-center justify-center hover:bg-slate-100"
                                                >
                                                    <Minus size={16} />
                                                </button>

                                                <span className="w-12 text-center font-medium">
                                                    {item.qty}
                                                </span>

                                                <button
                                                    onClick={() =>
                                                        increaseQty(
                                                            item.slug
                                                        )
                                                    }
                                                    className="w-10 h-10 flex items-center justify-center hover:bg-slate-100"
                                                >
                                                    <Plus size={16} />
                                                </button>

                                            </div>

                                            {item.price > 0 && (
                                                <div className="font-bold text-slate-900">
                                                    AED{" "}
                                                    {(
                                                        item.price *
                                                        item.qty
                                                    ).toLocaleString()}
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                </div>
                            ))}

                        </div>

                        {/* ORDER SUMMARY */}

                        <div>

                            <div className="bg-white border border-slate-200 rounded-2xl p-6 sticky top-24">

                                <h2 className="text-xl font-bold mb-6">
                                    Order Summary
                                </h2>

                                <div className="flex justify-between mb-4">
                                    <span>
                                        Items
                                    </span>

                                    <span>
                                        {cart.length}
                                    </span>
                                </div>

                                <div className="border-t border-slate-200 pt-4">

                                    {hasPriceItems ? (
                                        <>
                                            <div className="flex justify-between text-lg font-bold">

                                                <span>
                                                    Total
                                                </span>

                                                <span>
                                                    AED{" "}
                                                    {total.toLocaleString()}
                                                </span>

                                            </div>

                                            <Link
                                                href="/checkout"
                                                className="mt-6 w-full h-12 rounded-xl bg-red-600 hover:bg-red-700 text-white flex items-center justify-center font-semibold transition"
                                            >
                                                Proceed to Checkout
                                            </Link>
                                        </>
                                    ) : (
                                        <>
                                            <p className="text-slate-500 text-sm">
                                                Contact us for
                                                pricing and
                                                availability.
                                            </p>

                                            <Link
                                                href="/contact"
                                                className="mt-6 w-full h-12 rounded-xl bg-red-600 hover:bg-red-700 text-white flex items-center justify-center font-semibold transition"
                                            >
                                                Request Quote
                                            </Link>
                                        </>
                                    )}

                                </div>

                            </div>

                        </div>

                    </div>
                )}

            </div>
        </section>
    );
}