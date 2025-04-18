/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import style from "./AllProducts.module.css";

import { Link } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails";
import useProducts from "./../../Hooks/useProducts";
import { cartContext } from "./../../context/CartContext";
import { toast } from "react-hot-toast";
import ProductCardUi from "./../ProductCardUI/ProductCardUI";

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
            <ProductCardUi key={product.id} product={product} addToCartFun={addToCartFun} />
          );
        })}
      </div>
    </>
  );
}
