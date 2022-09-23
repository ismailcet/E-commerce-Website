import React from "react";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const price = useSelector((state) => state.cart.totalPrice);

  return (
    <div className="summary">
      <p className="items-price">$ {price} </p>
      <p className="delivery-price"></p>
      <hr />
      <p className="total-price"></p>
      <hr />
    </div>
  );
};

export default CartSummary;
