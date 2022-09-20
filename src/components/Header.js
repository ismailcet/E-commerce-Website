import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.svg";
import ProfilePhoto from "../Images/user.png";
import Cart from "../Images/Cart.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="header">
        <nav>
          <div className="nav-logo">
            <Link to="/">
              <img src={Logo} alt="Logo" className="nav_logo" />
            </Link>
          </div>
          <ul className="nav-items">
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
          <a className="hamburger-icon" onClick={toggleNav}>
            {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </a>
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
      <ul className={`menu-items ${isOpen && "open-items"}`}>
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
    </>
  );
};

export default Header;
