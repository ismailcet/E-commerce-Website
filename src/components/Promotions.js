import React from "react";
import GrayImg from "../Images/prom1.png";
import PinkImg from "../Images/prom2.png";
import GreenImg from "../Images/prom3.png";
import RightArrow from "../Images/right_arrow.svg";
import { Link } from "react-router-dom";
const Promotions = () => {
  return (
    <div className="promotions">
      <p className="promotions-title-blue">Promotions</p>
      <h3 className="promotions-title">Our Promotions Events</h3>
      <div className="promotions-events">
        <div className="promotions-left">
          <div className="gray">
            <div className="gray-text">
              <p className="gray-title">
                GET UP TO <span>60%</span>
              </p>
              <p className="gray-info">For the summer season</p>
            </div>
            <div className="gray-img">
              <img src={GrayImg} alt="Gray Img" className="grayImg" />
            </div>
          </div>
          <div className="black">
            <p className="black-title">GET 30% Off</p>
            <p className="black-info">USE PROMO CODE</p>
            <p className="black-code">DINEWEEKENDSALE</p>
          </div>
        </div>
        <div className="promotions-right">
          <div className="pink">
            <p className="pink-title">Flex Sweatshirt</p>
            <p className="price">
              <span className="old-price">$100.00</span>
              <span className="new-price">$75.00</span>
            </p>
            <div className="pink-img">
              <img src={PinkImg} alt="Pink İmage" className="pinkImg" />
              <Link to="/product/11" className="btn-arrow">
                <img src={RightArrow} alt="Right Arrow" />
              </Link>
            </div>
          </div>
          <div className="green">
            <p className="green-title">Flex Push Button Bomber</p>
            <p className="price">
              <span className="old-price">$225.00</span>
              <span className="new-price">$190.00</span>
            </p>
            <div className="green-img">
              <img src={GreenImg} alt="Green Image" className="greenImg" />
              <Link to="/product/15" className="btn-arrow">
                <img src={RightArrow} alt="Right Arrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
