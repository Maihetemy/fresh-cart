/* eslint-disable no-unused-vars */
import axios from "axios";

const api = axios.create({
  baseURL: "https://ecommerce.routemisr.com/api/v1/auth",
});

// Always attach token dynamically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.token = token;
  }
  return config;
});

export const signin = async (loginData) => {
  try {
    const { data } = await api.post("/signin", loginData);
    return data;
  } catch (error) {
    console.error(
      "Signin error:",
      error.response?.data?.message || error.message
    );
    throw error;
  }
};
export const signup = async (userData) => {
  try {
    const { data } = await api.post("/signup", userData);
    return data;
  } catch (error) {
    console.error(
      "Signin error:",
      error.response?.data?.message || error.message
    );
    throw error;
  }
};
export const verifyUserToken = async () => {
  const { data } = await api.get("/verifyToken");
  return data;
};
