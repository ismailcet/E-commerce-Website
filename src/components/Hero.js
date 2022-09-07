import React from "react";
import HeroImg from "../Images/header_img.png";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/fontawesome-free-solid";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_text">
        <h2 className="hero_title">
          An Industrial Take <br /> on Streetwear
        </h2>
        <p className="hero_p">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Link to="/products" className="btn btn-shopping">
          <FontAwesomeIcon icon={faShoppingCart} /> Start Shopping
        </Link>
      </div>
      <div className="hero_image">
        <img src={HeroImg} alt="Hero Image" className="hero_img" />
      </div>
    </div>
  );
};

export default Hero;
