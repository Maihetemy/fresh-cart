/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import style from "./Home.module.css";
import AllProducts from "./../AllProducts/AllProducts";
import CategoriesSlider from "./../categoriesSlider/categoriesSlider";
import MainSlider from "./../MainSlider/MainSlider";

export default function Home() {
  return (
    <>
      <MainSlider />
      <CategoriesSlider />
      <AllProducts />
    </>
  );
}
