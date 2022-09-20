import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SHOP_DATA from "../shop_data";

import ProductItem from "./ProductItem";

import { Pagination, Navigation } from "swiper";
import "swiper/css";
const ProductsSlide = () => {
  const [windowSize, SetWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    SetWindowSize(window.innerWidth);
  }, [window.innerWidth]);
  return (
    <div className="products">
      <p className="products-title-blue">Products</p>
      <h3 className="products-title">Check What We Have</h3>
      <div className="swiper">
        <Swiper
          spaceBetween={50}
          slidesPerView={windowSize < 500 ? 1 : 3}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {SHOP_DATA[0].items.map((item) => (
            <SwiperSlide className="slider" key={item.id}>
              <ProductItem headerImg={item.header_img} item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductsSlide;
