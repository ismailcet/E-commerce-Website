import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ProductFilter from "../components/ProductFilter";
import ProductsList from "../components/ProductsList";

import { Link, useParams } from "react-router-dom";
const Products = () => {
  const { category } = useParams();
  const [categoryId, setCategoryId] = useState(0);

  useEffect(() => {
    if (category === "female") {
      setCategoryId(0);
    } else if (category === "male") {
      setCategoryId(1);
    } else if (category === "kids") {
      setCategoryId(2);
    } else {
      setCategoryId(0);
    }
  }, [category]);

  return (
    <div className="home_page">
      <Header />
      <div className="prev">
        <Link to="/">Homepage - </Link>
        <Link to={`/products/${category}`}>{`${category} Product`}</Link>
      </div>
      <div className="products-content">
        <div className="category-side">
          <ProductFilter />
        </div>
        <div className="products-list">
          <ProductsList categoryId={categoryId} />
        </div>
      </div>
    </div>
  );
};

export default Products;
