/* eslint-disable no-unused-vars */
import axios from "axios";
import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

export let cartContext = createContext();

export default function CartContextProvider(props) {
  let headers = {
    token: localStorage?.getItem("token"),
  };
  // const [countNumber, setCountNumber] = useState(0);
  // const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState({});
  async function getCart() {
    try {
      const response = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/cart",
        {
          headers,
        }
      );
      setCart(response?.data);
      console.log(cart);
      return response;
    } catch (error) {
      return error;
    }
  }
  async function addToCart(productId) {
    try {
      const response = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/cart",
        { productId },
        { headers }
      );
      setCart(response?.data);
      console.log(cart);
      // console.log(totalPrice);
      return response;
    } catch (error) {
      return error;
    }
  }

  async function deleteProduct(productId) {
    try {
      const response = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        {
          headers,
        }
      );
      setCart(response?.data);
      console.log(cart);
      // console.log(totalPrice);
      return response;
    } catch (error) {
      return error;
    }
  }
  async function updateProduct(productId, count) {
    try {
      const response = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        { count },
        { headers }
      );

      setCart(response?.data);
      console.log(cart);
      return response;
    } catch (error) {
      return error;
    }
  }
  async function checkOutSession(cartID, returnPath, body) {
    try {
      const response = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartID}?url=${returnPath}`,
        { body },
        { headers }
      );
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async function clearCart() {
    try {
      const response = await axios.delete(
        "https://ecommerce.routemisr.com/api/v1/cart",
        { headers }
      );
      setCart(response?.data);
      console.log(cart);
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
        cart,
        checkOutSession,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}
