/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

export default function useProductDetails(id) {
  let productDetails = useQuery({
    queryKey: ["productDetails", id],
    queryFn: getProductDetails(id),
    staleTime: 10000,
    enabled: !!id,
  });
  function getProductDetails(id) {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`).then((res) => res.data);
  }
  return productDetails;
}
