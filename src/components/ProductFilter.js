import React, { useState } from "react";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
const ProductFilter = () => {
  //Category Filter
  const [isCategory, setIsCategory] = useState(false);
  const [category, setCategory] = useState("");

  //Price Filter
  const [isPrice, setIsPrice] = useState(false);
  const [price, setPrice] = useState("");

  //Condition Filter
  const [isCondition, setIsCondition] = useState(false);
  const [condition, setCondition] = useState([]);

  //Rate Filter
  const [isRate, setIsRate] = useState(false);
  const [rate, setRate] = useState([]);

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

  //Condition Functions
  const changeCondition = (e) => {
    if (condition.includes(e.target.getAttribute("value"))) {
      const deleteItem = condition.indexOf(e.target.getAttribute("value"));
      condition.splice(deleteItem, 1);
    } else {
      setCondition([...condition, e.target.getAttribute("value")]);
    }
  };

  const openCondition = () => {
    isCondition ? setIsCondition(false) : setIsCondition(true);
  };

  //Rate Functions
  const changeRate = (e) => {
    if (rate.includes(e.target.getAttribute("value"))) {
      const deleteRate = rate.indexOf(e.target.getAttribute("value"));
      rate.splice(deleteRate, 1);
    } else {
      setRate([...rate, e.target.getAttribute("value")]);
    }
  };
  const openRate = () => {
    isRate ? setIsRate(false) : setIsRate(true);
  };

  return (
    <div className="products-filter">
      <div className="category-filter">
        <a
          className="filter-title"
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
          className="filter-title"
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
      <div className="condition-filter">
        <a
          className="filter-title"
          onClick={openCondition}
          style={{ cursor: "pointer" }}
        >
          PRODUCT CONDITION{" "}
          <span>{isCondition ? <RiArrowDownSFill /> : <RiArrowUpSFill />}</span>
        </a>
        <div
          className={`condition-options ${isCondition ? "" : "closeCondition"}`}
        >
          <div className="option">
            <input
              type="checkbox"
              id="options1"
              className="condition-option"
              value="new"
              onClick={(e) => changeCondition(e)}
            />
            <label htmlFor="options1">New Product</label>
          </div>
          <div className="option">
            <input
              type="checkbox"
              id="options2"
              className="condition-option"
              value="second"
              onClick={(e) => changeCondition(e)}
            />
            <label htmlFor="options2">Second-hand</label>
          </div>
        </div>
      </div>
      <div className="rate-filter">
        <a
          className="filter-title"
          onClick={openRate}
          style={{ cursor: "pointer" }}
        >
          PRODUCT RATE
          <span>{isRate ? <RiArrowDownSFill /> : <RiArrowUpSFill />}</span>
        </a>
        <div className={`rate-options ${isRate ? "" : "closeRate"}`}>
          <div className="rate-option">
            <input
              type="checkbox"
              id="fiveStar"
              className="starCheckbox"
              value="five"
              onClick={(e) => changeRate(e)}
            />
            <label htmlFor="fiveStar">
              <div className="stars">
                <AiFillStar className="fill" />
                <AiFillStar className="fill" />
                <AiFillStar className="fill" />
                <AiFillStar className="fill" />
                <AiFillStar className="fill" />
              </div>
              <p className="star-rate">5</p>
            </label>
          </div>
          <div className="rate-option">
            <input
              type="checkbox"
              id="fourStar"
              className="starCheckbox"
              value="four"
              onClick={(e) => changeRate(e)}
            />
            <label htmlFor="fourStar">
              <div className="stars">
                <AiFillStar className="fill" />
                <AiFillStar className="fill" />
                <AiFillStar className="fill" />
                <AiFillStar className="fill" />
                <AiFillStar className="empty" />
              </div>
              <p className="star-rate">4</p>
            </label>
          </div>
          <div className="rate-option">
            <input
              type="checkbox"
              id="threeStar"
              className="starCheckbox"
              value="three"
              onClick={(e) => changeRate(e)}
            />
            <label htmlFor="threeStar">
              <div className="stars">
                <AiFillStar className="fill" />
                <AiFillStar className="fill" />
                <AiFillStar className="fill" />
                <AiFillStar className="empty" />
                <AiFillStar className="empty" />
              </div>
              <p className="star-rate">3</p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
