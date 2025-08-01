/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export default function useProducts() {
  let products = useQuery({
    queryKey: ["Products"],
    queryFn: getProducts,
    staleTime: 50000,
    select: (data) => data.data.data,
  });
  function getProducts() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/products");
  }
  return products;
}
