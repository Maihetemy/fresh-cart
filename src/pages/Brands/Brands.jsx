/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { userTokenContext } from "./../../context/UserContext";
import useAllOrders from "./../../Hooks/useAllOrders";
import useBrands from "../../Hooks/useBrand";
import { useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { Link } from "react-router-dom";
export default function Brands() {
  const { brandList, isLoadingAll, errorAll } = useBrands(null);
  return (
    <>
      <h1 className="font-bold text-green-700 mb-8 mt-24 text-3xl">Brands</h1>
      {isLoadingAll && <Spinner />}
      {errorAll && <p>Error loading brands: {errorAll.message}</p>}
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 ">
        {brandList?.data.map((brand, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-green-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <img className="rounded-t-lg" src={brand.image} alt={brand.name} />
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              {brand?.name || "Brand Name"}
            </h5>
          </div>
        ))}
      </div>
    </>
  );
}
