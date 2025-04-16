/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import style from "./RelatedProducts.module.css";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";
import { Link } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import ClipLoader from "react-spinners/ClipLoader";
import useProducts from "../../Hooks/useProducts";
import ProductCardUi from "./../ProductCardUI/ProductCardUI";
import { cartContext } from "../../context/CartContext";
export default function RelatedProducts() {
  let { category } = useParams();
  let [color, setColor] = useState("#046c4e");
  let [relatedProductsList, setRelatedProductsList] = useState([]);
  let { data, isLoading, isError, error } = useProducts();
  let { addToCart } = useContext(cartContext);
  function getRelatedProduct(category) {
    let products = data?.filter(
      (product) => product?.category?.name === category
    );
    console.log("category is: ", category);
    console.log(products);
    setRelatedProductsList(products);
  }
  useEffect(() => {
    if (data) {
      getRelatedProduct(category);
    }
  }, [category, data]);

  // const [relatedProductsList, setRelatedProductsList] = useState([]);
  // function getProducts(name) {
  //   axios
  //     .get("https://ecommerce.routemisr.com/api/v1/products")
  //     .then(({ data }) => {
  //       let filteredProductsList = data.data.filter(
  //         (product) => product.category?.name === name
  //       );

  //       setRelatedProductsList(filteredProductsList);
  //     })
  //     .catch((error) => {});
  // }
  // useEffect(() => {
  //   getProducts(category);
  // }, [category]);

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
    dots: false,
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
        {relatedProductsList?.map((product) => (
          <div key={product.id} className="flex justify-center">
            <div className="p-2">
              <ProductCardUi product={product} addToCartFun={addToCart} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}