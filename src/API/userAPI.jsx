import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce.routemisr.com/api/v1/auth",
});

// Always attach token dynamically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.token = token;
  }
  return config;
});

export const signin = async (loginData) => {
  try {
    const { data } = await API.post("/signin", loginData);
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
    const { data } = await API.post("/signup", userData);
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
  const { data } = await API.get("/verifyToken");
  return data;
};
