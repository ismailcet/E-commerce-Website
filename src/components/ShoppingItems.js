import React from "react";

const ShoppingItems = ({ cart }) => {
  return (
    <div className="cart-page">
      <h2 className="cart-title">Shopping Cart</h2>
      <hr />
      <div className="cart-container">
        <div className="items-lists"></div>
        <div className="cart-sum"></div>
      </div>
    </div>
  );
};

export default ShoppingItems;
