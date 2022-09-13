import React, { useState } from "react";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
const ProductFilter = () => {
  //Category Filter
  const [isCategory, setIsCategory] = useState(false);
  const [category, setCategory] = useState("");

  //Price Filter
  const [isPrice, setIsPrice] = useState(false);
  const [price, setPrice] = useState("");

  //Category Functions
  const changeCategory = (e) => {
    e.preventDefault();
    setCategory(e.target.getAttribute("value"));
  };

  const openCategory = () => {
    isCategory ? setIsCategory(false) : setIsCategory(true);
  };

  //Price Functions
  const changePrice = (e) => {
    e.preventDefault();
    setPrice(e.target.getAttribute("value"));
  };

  const openPrice = () => {
    isPrice ? setIsPrice(false) : setIsPrice(true);
  };

  return (
    <div className="products-filter">
      <div className="product-category">
        <a
          className="category-section"
          onClick={openCategory}
          style={{ cursor: "pointer" }}
        >
          PRODUCT CATEGORY{" "}
          <span>{isCategory ? <RiArrowDownSFill /> : <RiArrowUpSFill />}</span>
        </a>
        <div
          className={`category-options ${isCategory ? "closeCategory" : ""}`}
        >
          <a
            className={`category-btn ${category === "all" ? "active-btn" : ""}`}
            value="all"
            onClick={(e) => changeCategory(e)}
          >
            All Products{" "}
            <span>
              <RiArrowUpSFill />
            </span>
          </a>
          <a
            className={`category-btn ${
              category === "tshirts" ? "active-btn" : ""
            }`}
            value="tshirts"
            onClick={(e) => changeCategory(e)}
          >
            T Shirts{" "}
            <span>
              <RiArrowUpSFill />
            </span>
          </a>
          <a
            className={`category-btn ${
              category === "sweater" ? "active-btn" : ""
            }`}
            value="sweater"
            onClick={(e) => changeCategory(e)}
          >
            {" "}
            Sweater{" "}
            <span>
              <RiArrowUpSFill />
            </span>
          </a>
          <a
            className={`category-btn ${
              category === "jackets" ? "active-btn" : ""
            }`}
            value="jackets"
            onClick={(e) => changeCategory(e)}
          >
            {" "}
            Jackets{" "}
            <span>
              <RiArrowUpSFill />
            </span>
          </a>
          <a
            className={`category-btn ${
              category === "dress" ? "active-btn" : ""
            }`}
            value="dress"
            onClick={(e) => changeCategory(e)}
          >
            {" "}
            Dress{" "}
            <span>
              <RiArrowUpSFill />
            </span>
          </a>
          <a
            className={`category-btn ${
              category === "pants" ? "active-btn" : ""
            }`}
            value="pants"
            onClick={(e) => changeCategory(e)}
          >
            {" "}
            Pants{" "}
            <span>
              <RiArrowUpSFill />
            </span>
          </a>
          <a
            className={`category-btn ${
              category === "coats" ? "active-btn" : ""
            }`}
            value="coats"
            onClick={(e) => changeCategory(e)}
          >
            {" "}
            Coats{" "}
            <span>
              <RiArrowUpSFill />
            </span>
          </a>
          <a
            className={`category-btn ${
              category === "underwear" ? "active-btn" : ""
            }`}
            value="underwear"
            onClick={(e) => changeCategory(e)}
          >
            {" "}
            Underwear{" "}
            <span>
              <RiArrowUpSFill />
            </span>
          </a>
          <a
            className={`category-btn ${
              category === "shoes" ? "active-btn" : ""
            }`}
            value="shoes"
            onClick={(e) => changeCategory(e)}
          >
            {" "}
            Shoes{" "}
            <span>
              <RiArrowUpSFill />
            </span>
          </a>
        </div>
      </div>
      <div className="price-filter">
        <a
          className="category-section"
          onClick={openPrice}
          style={{ cursor: "pointer" }}
        >
          PRODUCT PRICE{" "}
          <span>{isPrice ? <RiArrowDownSFill /> : <RiArrowUpSFill />}</span>
        </a>
        <div className={`price-options ${isPrice ? "" : "closePrice"}`}>
          <a
            className={`price-btn ${price === "low" && "activePrice"}`}
            value="low"
            onClick={(e) => changePrice(e)}
          >
            $
          </a>
          <a
            className={`price-btn ${price === "medium" && "activePrice"}`}
            value="medium"
            onClick={(e) => changePrice(e)}
          >
            $$
          </a>
          <a
            className={`price-btn ${price === "high" && "activePrice"}`}
            value="high"
            onClick={(e) => changePrice(e)}
          >
            $$$
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
