import React from "react";
import Empty from "../Images/empty_cart.svg";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <div className="empty-cart-container">
        <img src={Empty} alt="Empty Cart" className="empty-img" />
        <h3 className="empty-title">Your cart is empty</h3>
        <p className="empty-info">
          Looks like you haven’t made your choice yet. Let’s shop!
        </p>
        <Link to="/products/female" className="empty-btn btn">
          Shop
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
