/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import style from "./MainSlider.module.css";
import Slider from "react-slick";
import mainImg1 from "../../assets/imgs/slider/slider-image-3.jpeg";
import mainImg2 from "../../assets/imgs/slider/slider-image-1.jpeg";
import axios from "axios";
import useCategories from "../../Hooks/useCategories";

export default function MainSlider() {
  const [categoryList, setCategoryList] = useState([]);
  let { data } = useCategories();
  useEffect(() => {
    if (data) {
      setCategoryList(data);
      console.log(data);
    }
  }, [data]);
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1700,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="row flex justify-center ">
        <div className="w-3/4">
          <Slider {...settings}>
            {categoryList.map((category) => (
              <img
                className="h-[400px]"
                key={category._id}
                src={category.image}
                alt={category.name}
              />
            ))}
          </Slider>
        </div>
        <div className="w-1/4 bg-green-500">
          <img className="h-[200px]" src={mainImg1} alt="Main Image" />
          <img className="h-[200px]" src={mainImg2} alt="Main Image" />
        </div>
      </div>
    </>
  );
}
