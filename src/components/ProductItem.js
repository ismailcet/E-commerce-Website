import React from "react";

const ProductItem = ({ headerImg, item }) => {
  return (
    <div className="product-container">
      <div className="product-img-container">
        <img src={require(`${headerImg}`)} alt="" className="product-img" />
      </div>
      <p className="product-name">{item.name}</p>
      <p className="product-price">${item.price}</p>
    </div>
  );
};

export default ProductItem;
