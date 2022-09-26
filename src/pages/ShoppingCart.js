import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShoppingItems from "../components/ShoppingItems";
import EmptyCart from "../components/EmptyCart";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const carts = useSelector((state) => state.cart.items);

  return (
    <div className="home-page">
      <Header />
      {carts.length <= 0 ? <EmptyCart /> : <ShoppingItems />}
      <Footer />
    </div>
  );
};

export default ShoppingCart;
