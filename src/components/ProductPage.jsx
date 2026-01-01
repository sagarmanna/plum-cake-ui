import { useEffect, useState } from "react";
import cakeImg from "../assets/hq720.jpg";

const PRICE = 99;

export default function ProductPage({ cart, setCart }) {
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(false);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const addToCart = () => {
    setCart([
      ...cart,
      {
        id: 1,
        name: "Plum Brownie Cake",
        price: PRICE,
        qty,
        image: cakeImg,
      },
    ]);

    setToast(true);
    setTimeout(() => setToast(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black pb-28">

      {/* Header */}
      <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 px-4 py-3 shadow-sm">
        <h1 className="text-center font-semibold text-base text-black dark:text-white">
          Plum Brownie Cake
        </h1>
      </div>

      {/* Product Image */}
      <div className="bg-white dark:bg-gray-900">
        {loading ? (
          <div className="h-72 bg-gray-200 dark:bg-gray-800 animate-pulse" />
        ) : (
          <img
            src={cakeImg}
            alt="Plum Brownie Cake"
            className="w-full h-72 object-cover"
            onClick={() => setZoom(true)}
          />
        )}
      </div>

      {/* Product Details */}
      <div className="bg-white dark:bg-gray-900 mt-2 rounded-t-2xl px-4 py-5 space-y-4">

        {loading ? (
          <>
            <div className="h-6 bg-gray-200 dark:bg-gray-800 animate-pulse w-3/4" />
            <div className="h-4 bg-gray-200 dark:bg-gray-800 animate-pulse w-1/2" />
            <div className="h-16 bg-gray-200 dark:bg-gray-800 animate-pulse" />
          </>
        ) : (
          <>
            <div>
              <h2 className="text-lg font-bold text-black dark:text-white">
                Plum Brownie Cake
              </h2>
              <p className="text-green-600 dark:text-green-400 font-semibold">
                ₹{PRICE}
              </p>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              A decadent chocolate plum brownie crafted with premium cocoa and carefully soaked dry fruits.
  Soft, moist, and deeply flavorful, this indulgent bake offers a perfect balance of richness
  and sweetness in every bite.
            </p>

            {/* Quantity */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Quantity
              </span>

              <div className="flex items-center bg-gray-200 dark:bg-gray-800 rounded-full">
                <button
                  onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                  className="px-4 py-2 text-lg text-black dark:text-white"
                >
                  −
                </button>

                <span className="px-4 font-semibold text-black dark:text-white">
                  {qty}
                </span>

                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-4 py-2 text-lg text-black dark:text-white"
                >
                  +
                </button>
              </div>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Total
              </span>
              <span className="text-lg font-bold text-black dark:text-white">
                ₹{qty * PRICE}
              </span>
            </div>
          </>
        )}
      </div>

      {/* Bottom Bar */}
      {!loading && (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t dark:border-gray-700 px-4 py-3 flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Items</p>
            <p className="font-semibold text-black dark:text-white">
              {cart.length}
            </p>
          </div>

          <button
            onClick={addToCart}
            className="bg-[#fc8019] text-white px-6 py-3 rounded-full font-semibold"
          >
            Add to Cart
          </button>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg text-xs">
          ✅ Added to cart
        </div>
      )}

      {/* Zoom */}
      {zoom && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setZoom(false)}
        >
          <img src={cakeImg} alt="Zoom" className="max-w-full max-h-full" />
        </div>
      )}
    </div>
  );
}
