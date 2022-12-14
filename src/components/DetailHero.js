import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addItems, addPrice } from "../Redux/Slice/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const DetailHero = ({ product }) => {
  const [headerImg, setHeaderImg] = useState(product.header_img);
  const [size, setSize] = useState("");
  const notify = () => toast.success("Added to cart.");

  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.totalPrice);

  const changeSize = (e) => {
    setSize(e.target.getAttribute("value"));
  };

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
                <img
                  src={require(`${image}`)}
                  className="product-small-img"
                  alt="Product Small Images"
                />
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
                className="product-headerImg"
                alt="Product Detail Header Images"
              />
            )}
          </div>
          <div className="product-info">
            <h2 className="info-name">{product.name}</h2>
            <div className="sizes">
              <h3 className="sizes-title">Select Size</h3>
              <div className="size-selects">
                <a
                  className={` size ${size === "xs" && "active-size"}`}
                  value="xs"
                  onClick={(e) => changeSize(e)}
                >
                  xs
                </a>
                <a
                  className={` size ${size === "s" && "active-size"}`}
                  value="s"
                  onClick={(e) => changeSize(e)}
                >
                  s
                </a>
                <a
                  className={` size ${size === "m" && "active-size"}`}
                  value="m"
                  onClick={(e) => changeSize(e)}
                >
                  m
                </a>
                <a
                  className={` size ${size === "l" && "active-size"}`}
                  value="l"
                  onClick={(e) => changeSize(e)}
                >
                  l
                </a>
                <a
                  className={` size ${size === "xl" && "active-size"}`}
                  value="xl"
                  onClick={(e) => changeSize(e)}
                >
                  xl
                </a>
              </div>
            </div>
            <div className="info-price">
              <a
                className="btn-cart btn"
                onClick={() => {
                  const title = document.getElementsByClassName("sizes-title");
                  if (size === "") {
                    title[0].classList.add("danger");
                  } else {
                    title[0].classList.remove("danger");
                    dispatch(addItems({ product, size }));
                    dispatch(addPrice(product.price));
                    notify();
                  }
                }}
              >
                <Toaster
                  position="bottom-right"
                  reverseOrder={false}
                  gutter={24}
                  toastOptions={{
                    // Define default options
                    className: "",
                    duration: 5000,
                    style: {
                      background: "transparent",
                      color: "#212121",
                      border: "2px solid green",
                    },

                    // Default options for specific types
                    success: {
                      duration: 3000,
                    },
                  }}
                />
                <AiOutlineShoppingCart /> Add to Cart
              </a>
              <h3 className="price">$ {product.price}.00</h3>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailHero;
