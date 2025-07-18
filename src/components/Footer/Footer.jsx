/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import style from "./Footer.module.css";
import brandsImg from "../../assets/imgs/brands-1-removebg.png";
import googleAppImg from "../../assets/imgs/google-play-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {}, []);
  return (
    <>
      <div className="w-full p-5 md:p-7 lg:p-10 bg-slate-200 text-start">
        <h1 className="font-semibold text-2xl text-slate-950 my-2">
          Get the FreshCart app
        </h1>
        <p className=" text-gray-600">
          We will send you a link, open it on your phone to download the app.
        </p>

        <form className="flex items-center my-5">
          <div className=" w-full">
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full ps-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
              placeholder="Email"
              required
            />
          </div>
          <button
            type="submit"
            className="py-2.5 px-5 ms-2 text-sm font-medium text-white bg-green-700 rounded-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            <span className="no-wrap-text">Share App Link</span>
          </button>
        </form>
        <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"></hr>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 flex flex-nowrap items-center mb-10 md:mb-0">
            <p className="me-2 font-semibold no-wrap-text">Payment Partners</p>
            {/* VISA */}
            {brandLogos("-3px -5px")}
            {brandLogos("-110px -5px")}
            {brandLogos("-200px -5px")}
            {brandLogos("-10px -70px")}
          </div>
          <div className="w-full md:w-1/2 flex flex-wrap lg:flex-nowrap items-center justify-between md:justify-end">
            <p className="me-2 font-semibold no-wrap-text ">
              Get deliveries with FreshCart
            </p>
            <div className="flex flex-wrap md:flex-nowrap  py-3">
              <button
                type="button"
                className="me-1 w-48 flex items-center text-white bg-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-black dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                <FontAwesomeIcon
                  icon={faApple}
                  className="text-3xl pe-3"
                ></FontAwesomeIcon>
                <div className="flex flex-col">
                  <span className="no-wrap-text text-[.5rem]">
                    Available on the
                  </span>
                  <span className="no-wrap-text text-md font-extrabold">
                    App Store
                  </span>
                </div>
              </button>
              <button
                type="button"
                className="flex w-48 text-white bg-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm ps-2 pe-4 py-1 dark:bg-black dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                <img
                  className="h-[40px] me-1"
                  src={googleAppImg}
                  alt="google app"
                />
                <div className="flex flex-col">
                  <span className="no-wrap-text text-[.5rem]">GET IT ON</span>
                  <span className="no-wrap-text text-md font-extrabold">
                    Google Play
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"></hr>
      </div>
    </>
  );
}
function brandLogos(position) {
  return (
    <div
      style={{
        backgroundImage: `url(${brandsImg})`,
        backgroundPosition: position,
        backgroundSize: "400%",
        backgroundRepeat: "no-repeat",
      }}
      className="w-[70px] h-[35px]"
    ></div>
  );
}
