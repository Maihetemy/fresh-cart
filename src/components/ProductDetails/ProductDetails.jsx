/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import style from "./ProductDetails.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function ProductDetails() {
  let { id } = useParams();
  var productDetailsSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  // var relatedProductsSliderSettings = {
  //   slidesToShow: 3,
  //   slidesToScroll: 2,
  // };

  let [productDetails, setProductDetails] = useState(null);
  // const [relatedProductsList, setRelatedProductsList] = useState([]);
  function GetProductDetails(id) {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then(({ data }) => {
        setProductDetails(data.data);
        console.log(data.data);
      })
      .catch(() => {});
  }
  // function getRelatedProducts(category) {
  //   axios
  //     .get("https://ecommerce.routemisr.com/api/v1/products")
  //     .then(({ data }) => {
  //       let filteredProductsList = data.data.filter(
  //         (product) => product.category?.name === category
  //       );

  //       setRelatedProductsList(filteredProductsList);
  //     })
  //     .catch((error) => {});
  // }
  useEffect(() => {
    GetProductDetails(id);
    // getRelatedProducts(category);
  }, [id]);

  return (
    <>
      <div className="product-details flex flex-wrap items-center sm:m-2 md:m-7 lg:m-10">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Slider {...productDetailsSliderSettings}>
            {productDetails?.images.map((src, index) => (
              <div key={index} className="flex justify-center">
                <img src={src} alt={productDetails?.title} className="w-full" />
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-3/4 text-start ps-8">
          <h2 className="font-semibold text-xl py-2">
            {productDetails?.title}
          </h2>
          <p className=" text-gray-500 py-2">{productDetails?.description}</p>
          <p className="text-sm font-bold text-gray-700 dark:text-gray-400 my-2">
            {productDetails?.category?.name}
          </p>
          <div className="flex flex-wrap justify-between my-5">
            <span className="text-sm font-black">
              {productDetails?.price} EGP
            </span>
            <p className="text-xs font-bold text-gray-700 dark:text-gray-400">
              {productDetails?.ratingsAverage}
            </p>
          </div>
          <a
            href="#"
            className="w-full inline-flex justify-center items-center px-3 py-2 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Add to cart
          </a>
        </div>
      </div>
      {/* <Slider {...relatedProductsSliderSettings}>
        {relatedProductsList.map((product) => (
          <div key={product.id} className="flex justify-center ">
            <Link
              key={product.id}
              to={`/productDetails/${product.category.name}/${product.id}`}>
              <div className="p-2">
                <div className="h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <h1>{product.category.name}</h1>
                  <span href="#" className="flex justify-center">
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
                      <div className="flex justify-around items-center">
                        <p className="mb-2 text-xs font-bold text-gray-700 dark:text-gray-400">
                          {product.price} EGP
                        </p>
                        <p className="mb-2 text-xs font-bold text-gray-700 dark:text-gray-400">
                          {product.ratingsAverage}
                        </p>
                      </div>
                      <span
                        href="#"
                        className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      >
                        Read more
                        <svg
                          className="rtl:rotate-180 w-3 h-3 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider> */}
    </>
  );
}
