import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShoppingItems from "../components/ShoppingItems";
const ShoppingCart = ({ cart, setCart }) => {
  return (
    <div className="home-page">
      <Header />
      <ShoppingItems cart={cart} />
      <Footer />
    </div>
  );
};

export default ShoppingCart;
