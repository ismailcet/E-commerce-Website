import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Promotions from "../components/Promotions";
import ProductsSlide from "../components/ProductsSlide";
import ProductOverview from "../components/ProductOverview";
import EmailSubs from "../components/EmailSubs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home_page">
      <Header />
      <Hero />
      <Promotions />
      <ProductsSlide />
      <ProductOverview />
      <EmailSubs />
      <Footer />
    </div>
  );
};

export default Home;
