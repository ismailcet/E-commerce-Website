import React from "react";
import SHOP_DATA from "../shop_data";
const ProductsList = () => {
  return (
    <div className="products-list">
      {SHOP_DATA[0].items.map((item) => (
        <img src={require(`${item.header_img}`)} />
      ))}
    </div>
  );
};

export default ProductsList;
