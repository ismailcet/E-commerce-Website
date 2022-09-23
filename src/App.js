import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import ShoppingCart from "./pages/ShoppingCart";
import "./App.css";
function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="products/:category" element={<Products />} />
        <Route
          path="product/:id"
          element={<ProductDetail cart={cart} setCart={setCart} />}
        />
        <Route
          path="/shopping"
          element={<ShoppingCart cart={cart} setCart={setCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;
