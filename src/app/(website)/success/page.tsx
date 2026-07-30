export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-3xl font-bold text-green-600">
          Order Placed Successfully 🎉
        </h1>

        <p className="text-gray-500 mt-2">
          We will contact you soon
        </p>

        <a
          href="/"
          className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-lg"
        >
          Continue Shopping
        </a>
      </div>
    </div>
  );
}