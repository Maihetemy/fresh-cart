/* eslint-disable no-unused-vars */
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export default function useProducts() {
  let products = useQuery({
    queryKey: ["Products"],
    queryFn: getProducts,
    staleTime: 50000,
  });
  function getProducts() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/products");
  }
  return products;
}
