import React, { useState } from "react";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
const ProductFilter = () => {
  const [category, setCategory] = useState("");
  const changeCategory = (e) => {
    setCategory(e.target.getAttribute("value"));
  };

  return (
    <div className="products-filter">
      <div className="product-catergory">
        <a className="catergory-section">
          PRODUCT CATEGORY{" "}
          <span>
            <RiArrowUpSFill />
          </span>
        </a>
        <div className="category-options">
          <a
            className="category-btn"
            value="all"
            onClick={(e) => changeCategory(e)}
          >
            All Products{" "}
            <span>
              <RiArrowUpSFill />
            </span>
          </a>
          <a
            className="category-btn"
            value="tshirts"
            onClick={(e) => changeCategory(e)}
          >
            T Shirts{" "}
            <span>
              <RiArrowUpSFill />
            </span>
          </a>
          <a
            className="category-btn"
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
            className="category-btn"
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
            className="category-btn"
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
            className="category-btn"
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
            className="category-btn"
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
            className="category-btn"
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
            className="category-btn"
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
    </div>
  );
};

export default ProductFilter;
