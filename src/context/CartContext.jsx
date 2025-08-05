import axios from "axios";
import { createContext, useContext } from "react";
import { useState } from "react";
import { userTokenContext } from "./UserContext";

export let cartContext = createContext();

export default function CartContextProvider(props) {
  const { userToken } = useContext(userTokenContext);

  function getAuthHeaders() {
    console.log('userToken', userToken);
    
    return {
      headers: {
        token: userToken,
      },
    };
  }
  const [cart, setCart] = useState({});
  async function getCart() {
    try {
      const response = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/cart",
        getAuthHeaders()
      );
      console.log('hello this is the token',userToken);
      
      setCart(response?.data);
      console.log(cart);
      return response;
    } catch (error) {
      return error;
    }
  }
  async function addToCart(productId) {
    try {
      console.log('this is the product id',productId);
      
      const response = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/cart",
        { productId },
        getAuthHeaders()
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
        getAuthHeaders()
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
        getAuthHeaders()
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
        getAuthHeaders()
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
        getAuthHeaders()
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
