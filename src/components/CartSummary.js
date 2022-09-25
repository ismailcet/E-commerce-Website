import React from "react";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const price = useSelector((state) => state.cart.totalPrice);

  return (
    <div className="summary">
      <h3 className="sum-title">Order Summary</h3>
      <hr />
      <p className="items-price">
        <span>Subtotal</span>
        <span className="num">$ {price}.00</span>{" "}
      </p>
      <p className="delivery-price">
        <span>Delivery</span>
        <span className="num">$ 6.00</span>
      </p>
      <hr />
      <p className="total-price">
        <span>Total Order</span>
        <span className="num">$ {price + 6}.00</span>
      </p>
      <hr />
      <a className="checkout-btn btn">Process to Checkout</a>
    </div>
  );
};

export default CartSummary;
