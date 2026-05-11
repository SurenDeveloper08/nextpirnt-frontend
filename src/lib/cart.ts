import toast from "react-hot-toast";

export const getCart = () => {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("cart") || "[]");
};

export const saveCart = (cart: any[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const addToCart = (product: any) => {
  const cart = getCart();

  const existing = cart.find((item: any) => item.slug === product.slug);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart(cart);

  // ✅ single toast only here
  toast.success("Added to cart 🛒");

  // 🔥 real-time update
  window.dispatchEvent(new Event("cartUpdated"));
};