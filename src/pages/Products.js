import React from "react";
import Header from "../components/Header";
import ProductFilter from "../components/ProductFilter";
import ProductsList from "../components/ProductsList";

import { Link, useParams } from "react-router-dom";
const Products = () => {
  const { category } = useParams();

  return (
    <div className="home_page">
      <Header />
      <div className="prev">
        <Link to="/">Homepage - </Link>
        <Link to={`/${category}`} style={{ textTransform: "capitalize" }}>
          {category}
        </Link>
      </div>
      <div className="products-content">
        <div className="category-side">
          <ProductFilter />
        </div>
        <div className="products-list">
          <ProductsList />
        </div>
      </div>
    </div>
  );
};

export default Products;
