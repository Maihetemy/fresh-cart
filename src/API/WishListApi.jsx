import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce.routemisr.com/api/v1",
});

// Always attach token dynamically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.token = token;
  }
  return config;
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
