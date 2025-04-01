/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

export default function useCategories() {
  function getCategory() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/categories");
  }
  let categories = useQuery({
    queryKey: "categories",
    queryFn: getCategory,
    staleTime: 30000,
    select:(data)=> data.data.data,
  });

  return categories;
}
