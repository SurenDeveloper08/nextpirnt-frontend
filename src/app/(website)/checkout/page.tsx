"use client";

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ShoppingBag, ShieldCheck } from "lucide-react";

interface CartItem {
  _id?: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  qty: number;
}

interface CheckoutForm {
  name: string;
  phone: string;
  email: string;
  address: string;
}

export default function CheckoutPage() {
  const router = useRouter();

  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLTextAreaElement>(null);

  const [form, setForm] = useState<CheckoutForm>({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  // LOAD CART
  useEffect(() => {
    try {
      const stored = localStorage.getItem("cart");
      setCart(stored ? JSON.parse(stored) : []);
    } catch {
      setCart([]);
    }
  }, []);

  // TOTAL
  const total = cart.reduce(
    (sum, item) => sum + (item.price || 0) * item.qty,
    0
  );

  // HANDLE INPUT
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // VALID EMAIL
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // PLACE ORDER
  const placeOrder = async () => {
    if (loading) return;

    // VALIDATION
    if (!form.name.trim()) {
      toast.error("Full Name is required");
      nameRef.current?.focus();
      return;
    }

    if (!form.phone.trim()) {
      toast.error("Phone Number is required");
      phoneRef.current?.focus();
      return;
    }

    if (form.phone.replace(/\D/g, "").length < 8) {
      toast.error("Enter valid phone number");
      phoneRef.current?.focus();
      return;
    }

    if (form.email.trim() && !isValidEmail(form.email)) {
      toast.error("Enter valid email address");
      emailRef.current?.focus();
      return;
    }

    if (!form.address.trim()) {
      toast.error("Delivery Address is required");
      addressRef.current?.focus();
      return;
    }

    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        customer: form,
        items: cart.map((item) => ({
          productId: item._id,
          name: item.name,
          image: item.image,
          qty: item.qty,
          price: item.price,
        })),
        total,
      };

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/order`,
        payload
      );

      if (data?.success) {
        setOrderPlaced(true);

        toast.success("Order placed successfully!");

        localStorage.removeItem("cart");
        setCart([]);

        setTimeout(() => {
          router.replace("/success");
        }, 1200);
      }
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message || "Order failed"
      );
    } finally {
      setLoading(false);
    }
  };

  // EMPTY CART (safe)
  if (!loading && cart.length === 0 && !orderPlaced) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Your Cart is Empty</h2>
          <p className="mt-3 text-slate-500">
            Add products before checkout
          </p>
          <button
            onClick={() => router.push("/products")}
            className="mt-6 rounded-xl bg-[#e63946] px-6 py-3 text-white"
          >
            Continue Shopping
          </button>
        </div>
      </section>
    );
  }

  // SUCCESS SCREEN
  if (orderPlaced) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-3xl font-bold">Order Placed</h2>
          <p className="mt-2 text-slate-500">
            Redirecting...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#f8fafc] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        <h1 className="text-2xl md:text-3xl font-semibold mb-8">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-[1fr_420px] gap-8">

          {/* FORM */}
          <div className="bg-white p-6 rounded-3xl border shadow-sm">

            <div className="flex items-center gap-3 mb-6">
              <ShoppingBag />
              <div>
                <h2 className="font-bold">Billing Details</h2>
                <p className="text-sm text-gray-500">
                  Enter your details
                </p>
              </div>
            </div>

            {/* NAME */}
            <input
              ref={nameRef}
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full mb-3 p-3 border rounded-xl"
            />

            {/* PHONE */}
            <input
              ref={phoneRef}
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full mb-3 p-3 border rounded-xl"
            />

            {/* EMAIL */}
            <input
              ref={emailRef}
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email (optional)"
              className="w-full mb-3 p-3 border rounded-xl"
            />

            {/* ADDRESS */}
            <textarea
              ref={addressRef}
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full p-3 border rounded-xl"
              rows={4}
            />
          </div>

          {/* SUMMARY */}
          <div className="bg-white p-6 rounded-3xl border shadow-sm">

            <div className="flex justify-between mb-4">
              <h2 className="font-bold">Summary</h2>
              <ShieldCheck />
            </div>

            {cart.map((item) => (
              <div
                key={item.slug}
                className="flex justify-between py-2 border-b"
              >
                <span>{item.name}</span>
                <span>
                  AED {(item.price * item.qty).toFixed(2)}
                </span>
              </div>
            ))}

            <div className="mt-4 font-bold text-lg">
              Total: AED {total.toFixed(2)}
            </div>

            <button
              onClick={placeOrder}
              disabled={loading}
              className="w-full mt-6 bg-[#e63946] text-white py-3 rounded-2xl"
            >
              {loading ? "Processing..." : "Place Order"}
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}