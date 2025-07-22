import { useEffect, useState } from "react";
import Slider from "react-slick";
import useCategories from "./../../Hooks/useCategories";
import { Link } from "react-router-dom";

export default function CategoriesSlider() {
  const [categoryList, setCategoryList] = useState([]);
  let { data } = useCategories();
  useEffect(() => {
    if (data) {
      setCategoryList(data);
      console.log(data);
    }
  }, [data]);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    arrows: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      <h1 className="text-start font-bold text-xl my-3">
        Shop Popular Categories
      </h1>
      <div className="mb-20">
        <Slider {...settings}>
          {categoryList?.map((category) => (
            <Link key={category._id} to={`/category/${category.name}`}>
              <img
                className="category-image"
                src={category.image}
                alt={category.name}
              />
              <h2 className="font-semibold text-sm my-1">{category.name}</h2>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
}
