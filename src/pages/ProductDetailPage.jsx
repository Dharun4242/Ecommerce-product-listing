import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id.toString() === id);

  if (!product) return <p className="text-center mt-10">Product not found</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-600 hover:underline mb-4"
      >
        <span className="text-2xl mr-1">←</span> Back
      </button>

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded"
      />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-lg text-gray-700 mt-2">₹{product.price}</p>
      <p className="text-sm mt-2">{product.description}</p>
      <p
        className={`mt-2 ${
          product.inStock ? "text-green-600" : "text-red-600"
        }`}
      >
        {product.inStock ? "In Stock" : "Out of Stock"}
      </p>

      {/* 🛒 Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>

        <button
          onClick={() => alert("Proceeding to Buy Now")}
          className="bg-green-600 text-white py-2 px-4 rounded-xl hover:bg-green-700 transition"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
