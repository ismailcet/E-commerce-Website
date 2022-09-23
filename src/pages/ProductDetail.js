import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import DetailHero from "../components/DetailHero";
import DetailInformation from "../components/DetailInformation";
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
    window.scrollTo(0, 0);
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
        <DetailInformation />
        <DetailComment product={product} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
