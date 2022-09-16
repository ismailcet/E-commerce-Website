import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
const DetailHero = ({ product }) => {
  const [headerImg, setHeaderImg] = useState(product.header_img);
  const [size, setSize] = useState("");

  useEffect(() => {
    Object.keys(product).length !== 0 && setHeaderImg(product.header_img);
  }, [, product]);

  return (
    <div className="product-detail-hero">
      {Object.keys(product).length === 0 ? (
        <h1>Loading ... </h1>
      ) : (
        <>
          <div className="images-list">
            {product.img.map((image, i) => (
              <a
                key={i}
                className="product-images-list"
                onClick={() => setHeaderImg(image)}
              >
                <img src={require(`${image}`)} className="product-small-img" />
              </a>
            ))}
          </div>
          <div className="product-image">
            {Object.keys(product).length === 0 ? (
              <h3>Loading ...</h3>
            ) : (
              <img
                src={
                  headerImg !== undefined
                    ? require(`${headerImg}`)
                    : require(`${product.header_img}`)
                }
                alt=""
              />
            )}
          </div>
          <div className="product-info">
            <h2 className="info-name">{product.name}</h2>
            <div className="sizes">
              <a className="size">xs</a>
              <a className="size">s</a>
              <a className="size">m</a>
              <a className="size">l</a>
              <a className="size">xl</a>
            </div>
            <div className="info-price">
              <a className="btn-cart">
                <AiOutlineShoppingCart /> Add to Cart
              </a>
              <h3 className="price">$ {product.price}</h3>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailHero;
