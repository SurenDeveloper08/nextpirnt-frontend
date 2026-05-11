"use client";

import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(data);
  }, []);

  const updateQty = (slug: string, qty: number) => {
    const updated = cart.map((item) =>
      item.slug === slug ? { ...item, qty } : item
    );

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeItem = (slug: string) => {
    const updated = cart.filter((item) => item.slug !== slug);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="space-y-4">

          {cart.map((item) => (
            <div
              key={item.slug}
              className="flex items-center justify-between border p-4 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  className="w-20 h-20 object-cover rounded"
                />

                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-red-600">${item.price}</p>
                </div>
              </div>

              {/* QTY */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    updateQty(item.slug, Math.max(1, item.qty - 1))
                  }
                  className="px-2 bg-gray-200"
                >
                  -
                </button>

                <span>{item.qty}</span>

                <button
                  onClick={() =>
                    updateQty(item.slug, item.qty + 1)
                  }
                  className="px-2 bg-gray-200"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeItem(item.slug)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}

          {/* TOTAL */}
          <div className="text-right text-xl font-bold mt-6">
            Total: ${total}
          </div>
        </div>
      )}
    </div>
  );
}