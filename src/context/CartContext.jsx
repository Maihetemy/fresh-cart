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
  async function getCart() {
    try {
      const response = await axios
        .get("https://ecommerce.routemisr.com/api/v1/cart", {
          headers,
        });
      setCountNumber(response?.data.numOfCartItems);
      setTotalPrice(response?.data.data.totalCartPrice);
      console.log(totalPrice);
      return response;
    } catch (error) {
      return error;
    }
  }
  async function addToCart(productId) {
    try {
      const response = await axios
        .post(
          "https://ecommerce.routemisr.com/api/v1/cart",
          { productId },
          { headers }
        );
      setCountNumber(response?.data.numOfCartItems);
      setTotalPrice(response?.data.data.totalCartPrice);
      console.log(totalPrice);
      return response;
    } catch (error) {
      return error;
    }
  }

  async function deleteProduct(productId) {
    try {
      const response = await axios
        .delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
          headers,
        });
      setCountNumber(response?.data.numOfCartItems);
      setTotalPrice(response?.data.data.totalCartPrice);
      console.log(totalPrice);
      return response;
    } catch (error) {
      return error;
    }
  }
  async function updateProduct(productId, count) {
    try {
      const response = await axios
        .put(
          `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
          { count },
          { headers }
        );
      setCountNumber(response?.data.numOfCartItems);
      setTotalPrice(response?.data.data.totalCartPrice);
      console.log(totalPrice);
      return response;
    } catch (error) {
      return error;
    }
  }
  async function clearCart() {
    try {
      const response = await axios
        .delete("https://ecommerce.routemisr.com/api/v1/cart", { headers });
      setCountNumber(0);
      setTotalPrice(0);
      console.log(totalPrice);
      return response;
    } catch (error) {
      return error;
    }
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
