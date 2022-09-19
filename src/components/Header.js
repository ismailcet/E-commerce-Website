import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.svg";
import ProfilePhoto from "../Images/user.png";
import Cart from "../Images/Cart.svg";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="nav-logo">
          <Link to="/">
            <img src={Logo} alt="Logo" className="nav_logo" />
          </Link>
        </div>
        <ul className="nav-items">
          <li className="hamburger-icon">
            <GiHamburgerMenu />
          </li>

          <ul className="nav-links">
            <li className="nav-item">
              <Link to="/products/female">Female</Link>
            </li>
            <li className="nav-item">
              <Link to="/products/male">Male</Link>
            </li>
            <li className="nav-item">
              <Link to="/products/kids">Kids</Link>
            </li>
            <li className="nav-item">
              <Link to="/products/popular">Popular Product</Link>
            </li>
          </ul>
        </ul>
      </nav>
      <div className="left_side">
        <div className="profile">
          <p className="profile_text">
            <span className="hello">Hello</span>
            <span className="name">Eda Bilgili</span>
          </p>
          <div className="profiles_img">
            <img src={ProfilePhoto} alt="User Photo" className="user_img" />
            <img src={Cart} alt="Cart Img" className="cart_img" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
