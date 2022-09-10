import React from "react";

const ProductItem = ({ womanImg, item }) => {
  return (
    <>
      {" "}
      <div className="product-img-container">
        <img src={womanImg} alt="" className="product-img" />
      </div>
      <p className="product-name">{item.name}</p>
      <p className="product-price">${item.price}</p>
    </>
  );
};

export default ProductItem;
