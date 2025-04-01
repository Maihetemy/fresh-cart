/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import style from "./RelatedProducts.module.css";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";
import { Link } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import ClipLoader from "react-spinners/ClipLoader";
import useProducts from "../../Hooks/useProducts";
export default function RelatedProducts() {
  let [color, setColor] = useState("#046c4e");
  let { data, isLoading, isError, error } = useProducts();
  if (isError) {
    return <h3>{error}</h3>;
  }
  if (isLoading) {
    return (
      <ClipLoader
        className="text-green-700"
        color={color}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mb-20">
      <Slider {...settings}>
        {data?.data.data.map((product) => (
          <div key={product.id} className="flex justify-center">
            <Link
              key={product.id}
              to={`/product/${product.category.name}/${product.id}`}
            >
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
      </Slider>
    </div>
  );
}
