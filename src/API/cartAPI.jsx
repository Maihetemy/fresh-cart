import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce.routemisr.com/api/v1/cart",
});

// Always attach token dynamically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.token = token;
  }
  return config;
});
