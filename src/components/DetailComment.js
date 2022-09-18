import React from "react";
import { AiFillStar } from "react-icons/ai";

const DetailComment = ({ product }) => {
  return (
    <div className="detail-comments">
      <h2 className="comments-title">Product Reviews</h2>
      <div className="stars">
        <AiFillStar className="fill" />
        <AiFillStar className="fill" />
        <AiFillStar className="fill" />
        <AiFillStar className="fill" />
        <AiFillStar className="empty" />
      </div>
      <hr />
      <div className="comments">
        <div className="comment">
          <div className="profile-info">
            <h3 className="person-name">Ryo a ramadhan</h3>
            <div className="stars">
              <AiFillStar className="fill" />
              <AiFillStar className="fill" />
              <AiFillStar className="fill" />
              <AiFillStar className="fill" />
              <AiFillStar className="fill" />
            </div>
            <p className="comment-date">January 22, 2021</p>
          </div>
          <div className="comments-info">
            <p className="comment-title">High quality product</p>
            <p className="comment-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              tellus cras sed risus. Egestas libero tortor ligula id nunc amet
              leo non Malesuada praesent tempus euismod vehicula nisl imperdiet.
              Aenean sed mauris, nulla dolor feugiat vel nec, ut vel.
            </p>
            <div className="comments-images">
              <img
                src={require(`${product.img[0]}`)}
                alt="comment small images"
                className="comment-image"
              />
              <img
                src={require(`${product.img[1]}`)}
                alt="comment small images"
                className="comment-image"
              />
            </div>
          </div>
        </div>
        <div className="comment">
          <div className="profile-info">
            <h3 className="person-name">Said r kurnia bahasyim</h3>
            <div className="stars">
              <AiFillStar className="fill" />
              <AiFillStar className="fill" />
              <AiFillStar className="fill" />
              <AiFillStar className="fill" />
              <AiFillStar className="empty" />
            </div>
            <p className="comment-date">Mei 1, 2020</p>
          </div>
          <div className="comments-info">
            <p className="comment-title">Quite satisfied with the service</p>
            <p className="comment-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              tellus cras sed risus. Egestas libero tortor ligula id nunc amet
              leo non Malesuada praesent tempus euismod vehicula nisl imperdiet.
              Aenean sed mauris, nulla dolor feugiat vel nec, ut vel.
            </p>
            <div className="comments-images">
              <img
                src={require(`${product.img[0]}`)}
                alt="comment small images"
                className="comment-image"
              />
              <img
                src={require(`${product.img[1]}`)}
                alt="comment small images"
                className="comment-image"
              />
              <img
                src={require(`${product.img[2]}`)}
                alt="comment small images"
                className="comment-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailComment;
