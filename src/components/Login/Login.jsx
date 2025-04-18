/* eslint-disable no-unused-vars */

"use client";
import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import { Link } from "react-router-dom";
import { userTokenContext } from "../../context/UserContext";

export default function Login() {
  let loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter valid email")
      .required("Email is required!"),
    password: Yup.string()
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        `Password must be strong !!
        - 8 characters length
        - letters in Upper Case
        - Special Character (!@#$&*)
        - numerals (0-9)
        - letters in Lower Case`
      )
      .required("Password is required!"),
  });

  let navigator = useNavigate();
  let [apiMessage, setApiMessage] = useState("");
  let [isLoading, setIsLoading] = useState(false);
  let {setUserToken} = useContext(userTokenContext);
  async function handleLogin(formValues) {
    setIsLoading(true);
    axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, formValues)
      .then((apiResponse) => {
        setUserToken(apiResponse.data.token);
        localStorage.setItem("token", apiResponse.data.token);
        navigator("/");
        setIsLoading(false);
      })
      .catch((apiResponse) => {
        setIsLoading(false);
        console.log(apiResponse?.response?.data?.message);
        setApiMessage(apiResponse?.response?.data?.message);
      });
  }

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleLogin,
    validationSchema: loginSchema,
    validateOnBlur: true,
    validateOnChange: true,
  });
  useEffect(() => {
    console.log("Formik Errors:", formik.errors);
  }, [formik.errors]);
  return (
    <>
      <div className="mx-auto max-w-lg text-start mb-20">
        {apiMessage ? (
          <div
            className="p-3 my-3 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            {apiMessage}
          </div>
        ) : null}

        <h1 className="text-4xl font-black text-green-900 dark:text-green mb-4">
          Login Now!
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="relative z-0 w-full  py-4 group">
            <input
              type="email"
              name="email"
              id="emailInput"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block py-4.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="emailInput"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
            {formik.errors.email && formik.touched.email ? (
              <div
                className="p-3 my-1 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div className="relative z-0 w-full  py-4 group">
            <input
              type="password"
              name="password"
              id="passwordInput"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block py-4.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="passwordInput"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
            {formik.errors.password && formik.touched.password ? (
              <div
                className="p-3 my-1 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <div className="flex items-center">
            <button
              type="submit"
              className="my-3 p-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-4.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              {isLoading ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                "Login"
              )}
            </button>
            <p className="text-sm ms-4">
              Do not have an account yet?
              <Link to="/register">
                <span className="font-semibold text-sm ms-2">Register</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
