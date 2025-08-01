import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { cartContext } from "../../context/CartContext";
import { toast } from "react-hot-toast";
import useWishList from "../../Hooks/useWishList";

export default function ProductDetails() {
  let { id } = useParams();
  var productDetailsSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1700,
  };
  let [productDetails, setProductDetails] = useState(null);
  let { addToCart } = useContext(cartContext);
  function GetProductDetails(id) {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then(({ data }) => {
        setProductDetails(data.data);
        console.log(data.data);
      })
      .catch(() => {});
  }
  async function addToCartFun(productId) {
    console.log(productId);
    let response = await addToCart(productId);
    console.log(response);
    if (response?.data?.status === "success") {
      toast.success(response?.data?.data?.message || "Successfully toasted!");
      console.log("done");
    } else {
      toast.error(response?.data?.data?.message || "Error adding to cart");
      console.log("error");
    }
  }
  useEffect(() => {
    GetProductDetails(id);
  }, [id]);
  const { wishList, addToWishList, removeFromWishList } = useWishList();
  const initialFav = wishList?.data?.some((item) => id === item._id);
  const [isFav, setIsFav] = useState(initialFav);
  useEffect(() => {
    setIsFav(wishList?.data?.some((item) => id === item._id));
  }, [id, wishList]);
  const toggleWishHeart = async (productId) => {
    if (isFav) {
      await removeFromWishList(productId);
    } else {
      await addToWishList(productId);
    }
    setIsFav(!isFav);
  };
  return (
    <>
      <div className="product-details flex flex-wrap items-center sm:m-2 md:m-7 lg:m-10">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Slider {...productDetailsSliderSettings}>
            {productDetails?.images.map((src, index) => (
              <div key={index} className="flex justify-center">
                <img src={src} alt={productDetails?.title} className="w-full" />
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-3/4 text-start ps-8">
          <div className="w-full flex justify-between">
            <h2 className="font-semibold text-xl py-2">
              {productDetails?.title}
            </h2>
            <FontAwesomeIcon
              icon={faHeart}
              onClick={() => {
                toggleWishHeart(id);
              }}
              className={`cursor-pointer text-2xl transition-colors duration-300  ${
                isFav ? "text-red-600" : "text-gray-400"
              }`}
            />
          </div>

          <p className=" text-gray-500 py-2">{productDetails?.description}</p>
          <p className="text-sm font-bold text-gray-700 dark:text-gray-400 my-2">
            {productDetails?.category?.name}
          </p>
          <div className="flex flex-wrap justify-between my-5">
            <span className="text-sm font-black">
              {productDetails?.price} EGP
            </span>
            <p className="text-xs font-bold text-gray-700 dark:text-gray-400">
              {productDetails?.ratingsAverage}
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-300 text-sm ms-1"
              ></FontAwesomeIcon>
            </p>
          </div>
          <a
            onClick={() => addToCartFun(productDetails.id)}
            href="#"
            className="w-full inline-flex justify-center items-center px-3 py-2 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </>
  );
}
