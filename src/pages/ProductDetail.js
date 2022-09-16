import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import DetailHero from "../components/DetailHero";
import DetailComment from "../components/DetailComment";
import Footer from "../components/Footer";
import SHOP_DATA from "../shop_data";
const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    SHOP_DATA.forEach((item) => {
      item.items.find((i) => i.id === Number(id) && setProduct(i));
    });
  }, [, id]);

  return (
    <div className="home_page">
      <Header />
      <div className="prev">
        <Link to="/">Homepage - </Link>
        <Link to={`/product/${id}`}>{`Product Details`}</Link>
      </div>
      <div className="detail-content">
        <DetailHero product={product} />
        <DetailComment />
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
