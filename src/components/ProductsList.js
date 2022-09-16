import React, { useEffect } from "react";
import SHOP_DATA from "../shop_data";
import ProductItem from "./ProductItem";
const ProductsList = ({ categoryId }) => {
  return (
    <div className="products-list">
      {SHOP_DATA[categoryId].items.map((item) => (
        <ProductItem key={item.id} headerImg={item.header_img} item={item} />
      ))}
    </div>
  );
};

export default ProductsList;
