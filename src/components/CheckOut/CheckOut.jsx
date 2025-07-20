/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { cartContext } from "../../context/CartContext";

export default function CheckOut() {
  let { checkOutSession, cart } = useContext(cartContext);
  const [errorMessage, setErrorMessage] = useState(null);

  let CheckOutSchema = Yup.object().shape({
    details: Yup.string("Enter valid details").required("Details is required!"),
    phone: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, "Enter a valid Egyptian number")
      .required("Phone is required!"),
    city: Yup.string("Enter valid city").required("City is required!"),
  });
  const goToPaymentScreen = async () => {
    const shippingData = { shippingAddress: formik.values };
    try {
      const fullPath = window.location.href;
      const lastSlashIndex = fullPath.lastIndexOf("/");
      let response = await checkOutSession(
        cart.cartId,
        fullPath.slice(0, lastSlashIndex),
        shippingData
      );
      if (response.data.status === "success") {
        window.location.href = response.data.session.url;
      }
      return response;
    } catch (error) {
      setErrorMessage(error);
      return error;
    }
  };
  let formik = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: "",
    },
    onSubmit: goToPaymentScreen,
    validationSchema: CheckOutSchema,
    validateOnBlur: true,
    validateOnChange: true,
  });
  useEffect(() => {
    console.log("Formik Errors:", formik.errors);
  }, [formik.errors]);
  return (
    <>
      <div className="mx-auto max-w-lg text-start mb-20 mt-28">
        {errorMessage ? (
          <div
            className="p-3 my-3 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            {errorMessage}
          </div>
        ) : null}

        <h1 className="capitalize text-4xl font-black text-green-900 dark:text-green mb-4">
          check out now!
        </h1>
        <div className="my-3">
          {cart ? (
            <span className="capitalize bg-yellow-100 text-yellow-800 text-sm font-medium me-2 p-2 rounded-md dark:bg-yellow-900 dark:text-yellow-300">
              num Of Cart Items: <span className="text-yellow-900 font-bold">{cart.numOfCartItems}</span> 
            </span>
          ) : null}
          {cart ? (
            <span className="capitalize bg-yellow-100 text-yellow-800 text-sm font-medium me-2 p-2 rounded-md dark:bg-yellow-900 dark:text-yellow-300">
              Total cart price: <span className="text-yellow-900 font-bold">{cart.data.totalCartPrice} EGP</span>
            </span>
          ) : null}
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="relative z-0 w-full  py-4 group">
            <input
              type="text"
              name="details"
              id="detailsInput"
              value={formik.values.details}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block py-4.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="detailsInput"
              className="capitalize peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              details address
            </label>
            {formik.errors.details && formik.touched.details ? (
              <div
                className="p-3 my-1 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                {formik.errors.details}
              </div>
            ) : null}
          </div>
          <div className="relative z-0 w-full  py-4 group">
            <input
              type="tel"
              name="phone"
              id="phoneInput"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block py-4.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="phoneInput"
              className="capitalize peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              phone
            </label>
            {formik.errors.phone && formik.touched.phone ? (
              <div
                className="p-3 my-1 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                {formik.errors.phone}
              </div>
            ) : null}
          </div>
          <div className="relative z-0 w-full  py-4 group">
            <input
              type="text"
              name="city"
              id="cityInput"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block py-4.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="cityInput"
              className="capitalize peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              city
            </label>
            {formik.errors.city && formik.touched.city ? (
              <div
                className="p-3 my-1 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                {formik.errors.city}
              </div>
            ) : null}
          </div>
          <div className="flex items-center">
            <button
              type="submit"
              className="capitalize my-3 p-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-4.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              {/* {isLoading ? (
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
              )} */}
              check out
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
