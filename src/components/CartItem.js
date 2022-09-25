import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const CartItem = ({ product }) => {
  return (
    <>
      <div className="cart-item">
        <div className="cart-image">
          <img
            src={require(`${product.product.header_img}`)}
            alt="Cart Item Image"
            className="cart-img"
          />
        </div>
        <div className="cart-info">
          <div className="info-up">
            {" "}
            <h3 className="cart-name">{product.product.name}</h3>
            <a className="delete-btn">
              <RiDeleteBinLine />
            </a>
          </div>
          <div className="cartItem-info">
            <div className="delivery">
              <p className="delivery-title">Delivery Estimation</p>
              <p className="delivery-time">5 Working Days</p>
            </div>
            <p className="size-info">
              Size: <span>{product.size}</span>
            </p>
          </div>
          <div className="info-down">
            <p className="price-info">$ {product.product.price}</p>

            <div className="up-down">
              <a className="decrease">
                <AiOutlineMinus />
              </a>
              <p className="item-length">1</p>
              <a className="increase">
                <AiOutlinePlus />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CartItem;
