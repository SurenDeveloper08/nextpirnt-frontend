"use client";

import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function AdminLoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const loginHandler = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/login`,
        formData,
        {
          withCredentials: true,
        }
      );

      if (data.success) {
        router.push("/admin");
      }
    } catch (err: any) {
      console.log( err?.response?.data?.message);
      
      setError(
        err?.response?.data?.message ||
        "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <div className="text-center mb-8">

          <h1 className="text-3xl font-bold text-slate-900">
            Admin Login
          </h1>

          <p className="text-slate-500 mt-2">
            Nexprint Admin Dashboard
          </p>
          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3">
              <p className="text-sm text-red-600 font-medium">
                {error}
              </p>
            </div>
          )}
        </div>

        <form
          onSubmit={loginHandler}
          className="space-y-5"
        >
          {/* Email */}

          <div>
            <label className="text-sm font-medium text-slate-700">
              Email Address
            </label>

            <div className="mt-2 relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="admin@nexprint.ae"
                className="w-full h-12 pl-11 pr-4 border rounded-xl outline-none focus:border-blue-600"
              />
            </div>
          </div>

          {/* Password */}

          <div>
            <label className="text-sm font-medium text-slate-700">
              Password
            </label>

            <div className="mt-2 relative">
              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter password"
                className="w-full h-12 pl-11 pr-12 border rounded-xl outline-none focus:border-blue-600"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Submit */}

          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading
              ? "Signing In..."
              : "Login"}
          </button>
        </form>

      </div>
    </div>
  );
}