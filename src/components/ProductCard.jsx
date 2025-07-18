import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col justify-between bg-white border rounded-2xl p-4 shadow-md hover:shadow-lg transition duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />

      <div>
        <h2 className="font-semibold text-lg">{product.name}</h2>
        <p className="text-sm text-gray-500 mb-4">₹{product.price}</p>
      </div>

      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
