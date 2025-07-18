
import { useCart } from "../context/CartContext";

const CartSummary = () => {
  const { cartItems, removeFromCart, increment, decrement, total } = useCart();

  const handleBuyNow = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert("Proceeding to checkout...");
  };

  return (
    <div className="w-full md:w-1/4 bg-white shadow rounded p-4 h-fit">
      <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">₹{item.price} × {item.quantity}</p>
                <div className="flex gap-2 mt-1">
                  <button onClick={() => decrement(item.id)} className="px-2 bg-gray-200 rounded">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increment(item.id)} className="px-2 bg-gray-200 rounded">+</button>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
            </div>
          ))}
          <hr />
          <p className="text-lg font-bold">Total: ₹{total}</p>
          <button
            onClick={handleBuyNow}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
};

export default CartSummary;
