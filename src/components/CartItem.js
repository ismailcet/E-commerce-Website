import React from "react";

const CartItem = ({ product }) => {
  return (
    <>
      <div className="cart-item">
        <div className="cart-image">
          <img src={require(`${product.product.header_img}`)} alt="" />
        </div>
        <div className="cart-info">
          <h3 className="cart-name">{product.product.name}</h3>
          <div className="cartItem-info">
            <div className="delivery">
              <p className="delivery-title">Delivery Estimation</p>
              <p className="delivery-time">5 Working Days</p>
            </div>
            <p className="size-info">{product.size}</p>
          </div>
          <p className="price-info">{product.product.price}</p>
        </div>
        <div className="cart-buttons">
          <a className="delete-btn"></a>
          <div className="up-down">
            <a className="decrease"></a>
            <p className="item-length"></p>
            <a className="increase"></a>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CartItem;
