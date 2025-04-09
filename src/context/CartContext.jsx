/* eslint-disable no-unused-vars */
import axios from "axios";
import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

export let cartContext = createContext();

export default function CartContextProvider(props) {
  let headers = {
    token: localStorage?.getItem("token"),
  };
  const [countNumber, setCountNumber] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  function getCart() {
    return axios
      .get("https://ecommerce.routemisr.com/api/v1/cart", {
        headers,
      })
      .then((response) => {
        setCountNumber(response?.data.numOfCartItems);
        setTotalPrice(response?.data.data.totalCartPrice);
        console.log(totalPrice);
        return response;
      })
      .catch((error) => error);
  }
  function addToCart(productId) {
    return axios
      .post(
        "https://ecommerce.routemisr.com/api/v1/cart",
        { productId },
        { headers }
      )
      .then((response) => {
        setCountNumber(response?.data.numOfCartItems);
        setTotalPrice(response?.data.data.totalCartPrice);
        console.log(totalPrice);
        return response;
      })
      .catch((error) => error);
  }

  function deleteProduct(productId) {
    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
        headers,
      })
      .then((response) => {
        setCountNumber(response?.data.numOfCartItems);
        setTotalPrice(response?.data.data.totalCartPrice);
        console.log(totalPrice);
        return response;
      })
      .catch((error) => error);
  }
  function updateProduct(productId, count) {
    return axios
      .put(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        { count },
        { headers }
      )
      .then((response) => {
        setCountNumber(response?.data.numOfCartItems);
        setTotalPrice(response?.data.data.totalCartPrice);
        console.log(totalPrice);
        return response;
      })
      .catch((error) => error);
  }
  function clearCart() {
    return axios
      .delete("https://ecommerce.routemisr.com/api/v1/cart", { headers })
      .then((response) => {
        setCountNumber(0);
        setTotalPrice(0);
        console.log(totalPrice);
        
        return response;
      })
      .catch((error) => error);
  }
  return (
    <cartContext.Provider
      value={{
        addToCart,
        getCart,
        deleteProduct,
        updateProduct,
        clearCart,
        countNumber,
        totalPrice,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}
