import React from "react";
import woman2 from "./assets/Woman/2/9784915886110.jpg";
const ProductOverview = () => {
  return (
    <div className="productOverview">
      <h1 className="overview-title">
        Unique and Authentic Vintage Designer Jewellery
      </h1>
      <div className="overview-content">
        <div className="overview-info">
          <div className="info">
            <h4 className="info-title">Using Good Quality Materials</h4>
            <p className="info-text">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className="info">
            {" "}
            <h4 className="info-title">100% Handmade Products</h4>
            <p className="info-text">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className="info">
            {" "}
            <h4 className="info-title">Modern Fashion Design</h4>
            <p className="info-text">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className="info">
            {" "}
            <h4 className="info-title">Discount for Bulk Orders</h4>
            <p className="info-text">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="overview-image">
          <img src={woman2} alt="Overview Image" className="overview-img" />
        </div>
        <div className="overview-image-info">
          <p className="image-info-text">
            This piece is ethically crafted in our small family-owned workshop
            in Peru with unmatched attention to detail and care. The Natural
            color is the actual natural color of the fiber, undyed and 100%
            traceable.
          </p>
          <a href="#" className="btn">
            See All Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
