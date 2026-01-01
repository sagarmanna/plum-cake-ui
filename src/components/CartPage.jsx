import React from "react";

export default function CartPage({ cart, setCart }) {
  const updateQty = (id, type) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              qty:
                type === "inc"
                  ? item.qty + 1
                  : item.qty > 1
                  ? item.qty - 1
                  : 1,
            }
          : item
      )
    );
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black pb-28">

      {/* Header */}
      <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 p-4 font-semibold shadow text-black dark:text-white">
        Cart
      </div>

      {/* Cart Items */}
      <div className="p-4 space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-900 rounded-2xl p-4 flex gap-4 items-center shadow-sm"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-xl object-cover"
            />

            {/* Info */}
            <div className="flex-1">
              <h3 className="font-semibold text-sm text-black dark:text-white">
                {item.name}
              </h3>
              <p className="text-green-600 dark:text-green-400 font-semibold text-sm">
                ₹{item.price * item.qty}
              </p>
            </div>

            {/* Quantity Control */}
            <div className="flex items-center gap-1 bg-gray-200 dark:bg-gray-800 rounded-full px-1">
              <button
                onClick={() => updateQty(item.id, "dec")}
                className="w-8 h-8 flex items-center justify-center rounded-full 
                           text-black dark:text-white 
                           hover:bg-gray-300 dark:hover:bg-gray-700"
              >
                −
              </button>

              <span className="w-6 text-center font-semibold text-sm text-black dark:text-white">
                {item.qty}
              </span>

              <button
                onClick={() => updateQty(item.id, "inc")}
                className="w-8 h-8 flex items-center justify-center rounded-full 
                           text-black dark:text-white 
                           hover:bg-gray-300 dark:hover:bg-gray-700"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Checkout Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t dark:border-gray-700 p-4 flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Total Amount
          </p>
          <p className="text-lg font-bold text-black dark:text-white">
            ₹{totalAmount}
          </p>
        </div>

        <button className="bg-[#fc8019] text-white px-6 py-3 rounded-full font-semibold active:scale-95">
          Checkout
        </button>
      </div>
    </div>
  );
}
