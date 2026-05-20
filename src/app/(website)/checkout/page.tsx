"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingBag, ShieldCheck } from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();

  const [cart, setCart] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  // LOAD CART
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(data);
  }, []);

  // TOTAL
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // INPUT CHANGE
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // PLACE ORDER
  const placeOrder = async () => {
    if (!form.name || !form.phone || !form.address) {
      alert("Please fill required fields");
      return;
    }

    setLoading(true);

    const order = {
      customer: form,
      items: cart,
      total,
    };

    try {
      await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      localStorage.removeItem("cart");

      window.dispatchEvent(new Event("cartUpdated"));

      router.push("/success");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#f8fafc] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        {/* HEADER */}
        <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8">
          Shopping Cart
        </h1>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-start">

          {/* LEFT FORM */}
          <div className="bg-white rounded-[28px] border border-slate-200 p-5 md:p-8 shadow-sm">

            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-[#e63946]">
                <ShoppingBag size={22} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Billing Details
                </h2>

                <p className="text-sm text-slate-500">
                  Please enter your delivery details
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">

              {/* NAME */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Full Name *
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="
                    w-full h-12 rounded-xl border border-slate-200
                    px-4 outline-none
                    focus:border-[#e63946]
                    transition
                  "
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number *
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+971 50 000 0000"
                  className="
                    w-full h-12 rounded-xl border border-slate-200
                    px-4 outline-none
                    focus:border-[#e63946]
                    transition
                  "
                />
              </div>

              {/* EMAIL */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="
                    w-full h-12 rounded-xl border border-slate-200
                    px-4 outline-none
                    focus:border-[#e63946]
                    transition
                  "
                />
              </div>

              {/* ADDRESS */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Delivery Address *
                </label>

                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  rows={5}
                  className="
                    w-full rounded-xl border border-slate-200
                    p-4 outline-none resize-none
                    focus:border-[#e63946]
                    transition
                  "
                />
              </div>

            </div>
          </div>

          {/* ORDER SUMMARY */}
          <div className="lg:sticky lg:top-24">

            <div className="bg-white rounded-[28px] border border-slate-200 p-5 md:p-6 shadow-sm">

              <div className="flex items-center justify-between mb-6">

                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Order Summary
                  </h2>

                  <p className="text-sm text-slate-500">
                    {cart.length} Products
                  </p>
                </div>

                <div className="w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center">
                  <ShieldCheck size={20} className="text-slate-700" />
                </div>

              </div>

              {/* PRODUCTS */}
              <div className="space-y-4 max-h-[350px] overflow-y-auto pr-1">

                {cart.length === 0 ? (
                  <div className="text-sm text-slate-500">
                    Your cart is empty
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.slug}
                      className="flex gap-4 border-b border-slate-100 pb-4"
                    >

                      {/* IMAGE */}
                      <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center overflow-hidden shrink-0">

                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-[80%] h-[80%] object-contain"
                        />

                      </div>

                      {/* INFO */}
                      <div className="flex-1 min-w-0">

                        <h3 className="text-sm font-semibold text-slate-800 line-clamp-2">
                          {item.name}
                        </h3>

                        <div className="flex items-center justify-between mt-3">

                          <p className="text-sm text-slate-500">
                            Qty: {item.qty}
                          </p>

                          <p className="text-sm font-bold text-slate-900">
                            AED {(item.price * item.qty).toLocaleString()}
                          </p>

                        </div>

                      </div>

                    </div>
                  ))
                )}

              </div>

              {/* TOTAL */}
              <div className="border-t border-slate-200 mt-6 pt-6">

                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-500">
                    Subtotal
                  </span>

                  <span className="font-semibold text-slate-900">
                    AED {total.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-5">
                  <span className="text-slate-500">
                    Delivery
                  </span>

                  <span className="font-semibold text-green-600">
                    Free
                  </span>
                </div>

                <div className="flex items-center justify-between text-lg font-black text-slate-900">
                  <span>Total</span>

                  <span>
                    AED {total.toLocaleString()}
                  </span>
                </div>

                {/* BUTTON */}
                <button
                  onClick={placeOrder}
                  disabled={loading || cart.length === 0}
                  className="
                    w-full h-14 rounded-2xl
                    bg-[#e63946]
                    text-white font-semibold
                    mt-6
                    hover:bg-red-700
                    disabled:bg-slate-300
                    disabled:cursor-not-allowed
                    transition-all
                  "
                >
                  {loading ? "Processing Order..." : "Place Order"}
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}