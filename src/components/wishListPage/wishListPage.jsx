/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import style from "./WishListPage.module.css";
import useWishList from "../../Hooks/useWishList";
import ProductCardUi from "./../ProductCardUI/ProductCardUI";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { cartContext } from "./../../context/CartContext";
export default function WishListPage() {
  const { wishList } = useWishList();
  useEffect(() => {}, []);
  let { addToCart } = useContext(cartContext);

  async function addToCartFun(productId) {
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
        {wishList?.data?.map((product) => {
          return (
            <ProductCardUi
              key={product.id}
              product={product}
              addToCartFun={addToCartFun}
            />
          );
        })}
      </div>
    </>
  );
}
