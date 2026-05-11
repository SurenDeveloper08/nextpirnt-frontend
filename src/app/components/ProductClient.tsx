"use client";

import Image from "next/image";
import { addToCart } from "@/lib/cart";

export default function ProductClient({ product }: any) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* TOP */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* IMAGE */}
        <div>
          <Image
            src={product.images[0]}
            alt={product.name}
            width={600}
            height={500}
            className="w-full h-[400px] object-cover bg-gray-100"
          />

          <div className="flex gap-3 mt-4">
            {product.images.map((img: string, i: number) => (
              <Image
                key={i}
                src={img}
                alt="thumb"
                width={80}
                height={80}
                className="border rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* INFO */}
        <div>
          <p className="text-gray-500">{product.brand}</p>

          <h1 className="text-3xl font-bold">{product.name}</h1>

          <p className="text-gray-600 mt-4">
            {product.description}
          </p>

          {/* FEATURES */}
          <div className="mt-6">
            <h2 className="font-semibold mb-2">Key Features</h2>
            <ul className="space-y-2">
              {product.features.map((f: string, i: number) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>
          </div>

          {/* ADD TO CART */}
          <button
            onClick={() =>
              addToCart({
                slug: product.slug,
                name: product.name,
                price: product.price,
                image: product.images[0],
              })
            }
            className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition"
          >
            Add to Cart
          </button>
        </div>
        
      </div>
       <div className="mt-14">
        <h2 className="text-xl font-bold mb-4">
          Technical Specifications
        </h2>

        <div className="grid md:grid-cols-2 gap-4 bg-gray-50 p-6 rounded-xl">
          {Object.entries(product.specs).map(([key, value]) => (
            <div key={key} className="flex justify-between border-b py-2">
              <span>{key}</span>
              <span>{value as string}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}