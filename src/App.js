import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="products/:category" element={<Products />} />
        <Route path="product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
