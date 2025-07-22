/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import useWishList from "../../Hooks/useWishList";
import Spinner from "../Spinner/Spinner";
import PrimaryButton from "./../PrimaryButton/PrimaryButton";
export default function ProductCardUi({ product, addToCartFun }) {
  const { wishList, addToWishList, removeFromWishList } = useWishList();

  const initialFav = wishList?.data?.some((item) => product.id === item._id);

  const [isFav, setIsFav] = useState(initialFav);

  useEffect(() => {
    setIsFav(wishList?.data?.some((item) => product.id === item._id));
  }, [product.id, wishList]);

  const toggleWishHeart = async (productId) => {
    if (isFav) {
      await removeFromWishList(productId);
    } else {
      await addToWishList(productId);
    }
    setIsFav(!isFav);
  };
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <div className="relative h-full flex flex-col  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full flex justify-end absolute right-3 top-3">
          <FontAwesomeIcon
            icon={faHeart}
            onClick={() => {
              toggleWishHeart(product.id);
            }}
            className={`cursor-pointer transition-colors duration-300  ${
              isFav ? "text-red-600" : "text-gray-400"
            }`}
          />
        </div>
        <Link to={`/product/${product.category.name}/${product.id}`}>
          <span href="#" className="flex justify-center w-full">
            <img className="rounded-t-lg" src={product.imageCover} alt="" />
          </span>
          <div className="flex flex-col flex-grow justify-between p-2">
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
        <PrimaryButton fun={() => addToCartFun(product.id)} text="add to cart" />
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
