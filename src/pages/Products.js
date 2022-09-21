import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ProductFilter from "../components/ProductFilter";
import ProductsList from "../components/ProductsList";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import { IoOptionsOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
const Products = () => {
  const { category } = useParams();
  const [categoryId, setCategoryId] = useState(0);
  const [open, setOpen] = useState(false);

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

  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="home_page">
      <Header />
      <div className="filter-header">
        <div className="prev">
          <Link to="/">Homepage - </Link>
          <Link to={`/products/${category}`}>{`${category} Product`}</Link>
        </div>
        <div className="filter-btn">
          <a className="filter-open-btn" onClick={toggleOpen}>
            <span>{open ? "Close" : "Filter"}</span>
            {open ? <AiOutlineClose /> : <IoOptionsOutline />}
          </a>
        </div>
      </div>
      <div className="products-content">
        <div className={`category-side ${open ? "open-category" : ""}`}>
          <ProductFilter />
        </div>
        <div className="products-list">
          <ProductsList categoryId={categoryId} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
