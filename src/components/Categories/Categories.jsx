/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import style from "./Categories.module.css";
import { useParams } from "react-router-dom";
import { Slider } from "react-slick";
import useCategories from "../../Hooks/useCategories";
import ProductCardUi from "./../ProductCardUI/ProductCardUI";
import { cartContext } from "./../../context/CartContext";
import { Link } from "react-router-dom";
export default function Categories() {
  let { data } = useCategories();
  let { addToCart } = useContext(cartContext);
  useEffect(() => {}, []);
  return (
    <>
      <h1 className="my-10 font-bold text-3xl text-green-950">Categories</h1>
      <div className="row">
        {data?.map((category) => (
          <div key={category._id} className="w-1/2 md:w-1/3 lg:w-1/4">
            <Link to={`/category/${category.name}`}>
              <div className="p-2 flex justify-center items-center flex-wrap cursor-pointer">
                <h2 className="my-3 text-xl font-semibold text-green-900">
                  {category.name}
                </h2>
                <img
                  className="h-[250px] w-[250px]"
                  src={category.image}
                  alt={category.name}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
