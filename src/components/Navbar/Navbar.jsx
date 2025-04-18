/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/imgs/freshcart-logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import Register from "./../register/register";
import { userTokenContext } from "../../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { cartContext } from "../../context/CartContext";
import Categories from "./../Categories/Categories";
export default function Navbar() {
  let navigator = useNavigate();

  let { userToken, setUserToken } = useContext(userTokenContext);
  let { countNumber, getCart } = useContext(cartContext);
  function logout() {
    localStorage.removeItem("token");
    setUserToken(null);
    navigator("/login");
  }
  async function getCartProducts() {
    await getCart();
  }
  useEffect(() => {
    if (userToken) {
      console.log(userToken);

      getCartProducts();
    }
  }, [userToken]);
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md bg-main-light fixed top-0 right-0 left-0 p-2">
        <div className="max-w-screen-xl flex flex-wrap lg:flex-nowrap items-center justify-between mx-auto p-2">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} width={150} alt="" />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block lg:w-2/3 ps-24"
            id="navbar-default"
          >
            <ul className="flex flex-col justify-between p-4 md:p-0 mt-4 border w-full border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <div className="main_menu">
                {userToken ? (
                  <div className="flex flex-col lg:flex-row">
                    <li className="mx-2 flex items-center text-sm text-slate-950 font-normal">
                      <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li className="mx-2 flex items-center text-sm text-slate-950 font-normal">
                      <NavLink to={"/brands"}>Brands</NavLink>
                    </li>
                    <li className="mx-2 flex items-center text-sm text-slate-950 font-normal">
                      <NavLink to={"/categories"}>Categories</NavLink>
                    </li>
                    <li className="mx-2 flex items-center text-sm text-slate-950 font-normal">
                      <NavLink to={"/about"}>About</NavLink>
                    </li>
                    <li className="cart-icon mx-5 flex items-center">
                      <NavLink to={"/cart"}>
                        <div className=" relative text-green-950">
                          <FontAwesomeIcon
                            icon={faCartShopping}
                            className="text-lg"
                          />
                          <p className=" text-xs text-white absolute -top-1/2 -right-1/2 translate-x-1/2 bg-green-400 px-1.5 rounded-lg ms-0.5">
                            {countNumber}
                          </p>
                        </div>
                      </NavLink>
                    </li>
                  </div>
                ) : null}
              </div>
              <div className="security-system flex flex-col lg:flex-row">
                {userToken ? (
                  <>
                    <li
                      onClick={logout}
                      className="mx-2 flex items-center text-sm text-slate-950 font-normal cursor-pointer"
                    >
                      Logout
                    </li>
                  </>
                ) : (
                  <>
                    <li className="mx-2 flex items-center text-sm text-slate-950 font-normal">
                      <NavLink to={"/register"}>Register</NavLink>{" "}
                    </li>
                    <li className="mx-2 flex items-center text-sm text-slate-950 font-normal">
                      <NavLink to={"/login"}>Login</NavLink>
                    </li>
                  </>
                )}
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
