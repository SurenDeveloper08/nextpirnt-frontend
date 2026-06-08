"use client";
import { useState } from "react";

const CommentForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    comment: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Comment submitted successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 py-8"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        onChange={handleChange}
        className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#e63946]"
      />
      <textarea
        name="comment"
        placeholder="Write your comment..."
        rows="5"
        required
        onChange={handleChange}
        className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#e63946]"
      ></textarea>

      <button
        type="submit"
        className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-[#e63946] transition-all"
      >
        Submit Comment
      </button>
    </form>
  );
};

export default CommentForm;