"use client";

import { useEffect, useState } from "react";

export function useCartCount() {
  const [count, setCount] = useState(0);

  const update = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCount(cart.length);
  };

  useEffect(() => {
    update();

    // 1️⃣ same tab update
    window.addEventListener("cartUpdated", update);

    // 2️⃣ cross-tab update (REAL localStorage event)
    window.addEventListener("storage", update);

    // 3️⃣ safety interval sync (fix missed updates)
    const interval = setInterval(update, 1000);

    return () => {
      window.removeEventListener("cartUpdated", update);
      window.removeEventListener("storage", update);
      clearInterval(interval);
    };
  }, []);

  return count;
}