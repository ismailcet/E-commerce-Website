import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SHOP_DATA from "../shop_data";
import woman1 from "../assets/Woman/3/9833666084894.jpg";
import ProductItem from "./ProductItem";

import { Pagination, Navigation } from "swiper";
import "swiper/css";
const ProductsSlide = () => {
  return (
    <div className="products">
      <p className="products-title-blue">Products</p>
      <h3 className="products-title">Check What We Have</h3>
      <div className="swiper">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {SHOP_DATA[0].items.map((item) => (
            <SwiperSlide className="slider">
              <ProductItem womanImg={woman1} item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductsSlide;
