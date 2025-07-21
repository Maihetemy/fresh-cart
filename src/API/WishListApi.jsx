import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce.routemisr.com/api/v1",
  headers: { token: localStorage?.getItem("token") },
});

export const getUserWishList = async () => {
  const { data } = await API.get("/wishlist");
  return data;
};

export const addToWishList = async (productId) => {
  const { data } = await API.post("/wishlist/", { productId });
  return data;
};

export const removeFromWishList = async (productId) => {
  const { data } = await API.delete(`/wishlist/${productId}`);
  return data;
};
