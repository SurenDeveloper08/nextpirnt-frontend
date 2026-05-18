"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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

  // load cart
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(data);
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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

    await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });

    // clear cart
    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("cartUpdated"));

    setLoading(false);

    // go success page
    router.push("/success");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">

      {/* LEFT: FORM */}
      <div className="space-y-4">

        <h1 className="text-2xl font-semibold text-slate-900">
          Checkout
        </h1>

        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <input
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <input
          name="email"
          placeholder="Email (optional)"
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <textarea
          name="address"
          placeholder="Delivery Address"
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <button
          onClick={placeOrder}
          disabled={loading}
          className="w-full bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-800"
        >
          {loading ? "Processing..." : "Place Order"}
        </button>
      </div>

      {/* RIGHT: ORDER SUMMARY */}
      <div className="border rounded-xl p-6 bg-white">

        <h2 className="font-semibold mb-4">
          Order Summary
        </h2>

        {cart.map((item) => (
          <div
            key={item.slug}
            className="flex justify-between text-sm py-2"
          >
            <span>
              {item.name} × {item.qty}
            </span>

            <span>
              ${item.price * item.qty}
            </span>
          </div>
        ))}

        <div className="border-t mt-4 pt-4 font-bold">
          Total: ${total}
        </div>

      </div>

    </div>
  );
}