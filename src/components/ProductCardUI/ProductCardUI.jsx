/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
export default function ProductCardUi({ product, addToCartFun }) {
  useEffect(() => {}, []);
  const [isClick, setClick] = useState(false);
  return (
    <>
      <div className="h-full flex flex-col p-2 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <Link to={`/product/${product.category.name}/${product.id}`}>
          <div className="w-full flex justify-end">
            <FontAwesomeIcon
              icon={faHeart}
              onClick={() => setClick(!isClick)}
              className={`cursor-pointer transition-colors duration-300  ${
                isClick ? "text-red-600" : "text-gray-400"
              }`}
            />
          </div>
          <span href="#" className="flex justify-center w-full">
            <img
              className="rounded-t-lg w-1/2"
              src={product.imageCover}
              alt=""
            />
          </span>
          <div className="p-1.5 flex flex-col flex-grow justify-between">
            <div>
              <h5 className="mb-2 text-start font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
                {product.title || "No title available"}
              </h5>
              <p className="mb-2 text-start text-xs text-gray-700 dark:text-gray-400 line-clamp-1">
                {product.description || "No description available"}
              </p>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p className="mb-2 text-xs font-bold text-gray-700 dark:text-gray-400">
                  {product.price} EGP
                </p>
                <div className="flex">
                  <p className="mb-2 text-xs font-bold text-gray-700 dark:text-gray-400">
                    {product.ratingsAverage}
                  </p>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-yellow-300 text-sm ms-1"
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <button
          onClick={() => {
            console.log("Product ID:", product.id);
            addToCartFun(product.id);
          }}
          className="primary-btn"
        >
          Add To Cart
        </button>
      </div>
    </>
  );
}
// props type validation
ProductCardUi.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    imageCover: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    ratingsAverage: PropTypes.number,
    category: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
  }).isRequired,
  addToCartFun: PropTypes.func.isRequired,
};
