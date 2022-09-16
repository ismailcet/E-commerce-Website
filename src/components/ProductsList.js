import React from "react";
import { Link } from "react-router-dom";
import SHOP_DATA from "../shop_data";
import ProductItem from "./ProductItem";
const ProductsList = ({ categoryId }) => {
  return (
    <div className="product-list">
      {SHOP_DATA[categoryId].items.map((item) => (
        <Link to={`/product/${item.id}`} key={item.id}>
          <ProductItem headerImg={item.header_img} item={item} />
        </Link>
      ))}
    </div>
  );
};

export default ProductsList;
