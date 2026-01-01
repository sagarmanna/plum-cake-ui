import React, { useEffect, useState } from "react";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";

function App() {
  const [cart, setCart] = useState([]);
  const [dark, setDark] = useState(false);

  // Persist theme
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  // Load saved theme
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDark(true);
    }
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-black min-h-screen transition-colors">
      {/* Theme Toggle */}
      <button
        onClick={() => setDark(!dark)}
        className="fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 p-2 rounded-full shadow"
      >
        {dark ? "☀️" : "🌙"}
      </button>

      {cart.length === 0 ? (
        <ProductPage cart={cart} setCart={setCart} />
      ) : (
        <CartPage cart={cart} setCart={setCart} />
      )}
    </div>
  );
}

export default App;
