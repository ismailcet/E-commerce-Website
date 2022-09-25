import { useEffect } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { useSelector } from "react-redux";

const ShoppingItems = () => {
  const cart = useSelector((state) => state.cart.items);

  return (
    <div className="cart-page">
      <h2 className="cart-title">Shopping Cart</h2>
      <hr />
      <div className="cart-container">
        <div className="items-lists">
          {cart.map((item, i) => (
            <CartItem product={item} key={i} />
          ))}
        </div>
        <div className="cart-sum">
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default ShoppingItems;
