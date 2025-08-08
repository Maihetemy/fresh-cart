import axios from "axios";
const API = axios.create({
  baseURL: "https://ecommerce.routemisr.com/api/v1/orders",
});

// Always attach token dynamically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.token = token;
  }
  return config;
});

export const getAllUserOrders = async (userId) => {
  try {
    const { data } = await API.get(`/user/${userId}`);
    return data;
  } catch (error) {
    console.error(
      "Signin error:",
      error.response?.data?.message || error.message
    );
    throw error;
  }
};
