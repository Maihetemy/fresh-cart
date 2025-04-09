/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import style from "./AllProducts.module.css";

import { Link } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails";
import useProducts from "./../../Hooks/useProducts";
import { cartContext } from "./../../context/CartContext";
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function AllProducts() {
  const [productsList, setProductsList] = useState([]);
  let { data } = useProducts();
  let { addToCart } = useContext(cartContext);
  useEffect(() => {
    if (data) {
      setProductsList(data);
    }
  }, [data]);
  async function addToCartFun(productId) {
    console.log(productId);
    
    let response = await addToCart(productId);
    console.log(response);
    if (response?.data?.status === "success") {
      toast.success(response?.data?.data?.message || "Successfully toasted!");
      console.log("done");
    } else {
      toast.error(response?.data?.data?.message || "Error adding to cart");
      console.log("error");
    }
  }
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {productsList?.map((product) => {
          return (
            <div
              className="flex flex-col p-3 justify-between bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
              key={product.id}
            >
              <Link to={`/product/${product.category.name}/${product.id}`}>
                <div className=" ">
                  <h1>{product.category.name}</h1>
                  <span href="#" className="flex justify-center w-full">
                    <img
                      className="rounded-t-lg w-1/2"
                      src={product.imageCover}
                      alt=""
                    />
                  </span>
                  <div className="p-1.5 flex flex-col flex-grow justify-between">
                    <div>
                      <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                        {product.title
                          ? product.title.split(" ").slice(0, 2).join(" ")
                          : "No title available"}
                      </h5>
                      <p className="mb-2 text-xs text-gray-700 dark:text-gray-400">
                        {product.description
                          ? product.description
                              .split(" ")
                              .slice(0, 5)
                              .join(" ") + " ..."
                          : "No description available"}
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
                </div>
              </Link>
              <button
                onClick={() => {
                  console.log("Product ID:", product.id);
                  addToCartFun(product.id);
                }}
                className="inline-flex justify-center items-center px-3 py-2 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
