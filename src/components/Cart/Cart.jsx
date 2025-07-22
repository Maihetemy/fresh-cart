import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../context/CartContext";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "./../PrimaryButton/PrimaryButton";

export default function Cart() {
  let { getCart, deleteProduct, updateProduct, clearCart, cart } =
    useContext(cartContext);
  const [cartDetails, setCartDetails] = useState(null);
  let navigator = useNavigate();
  async function getCartProducts() {
    let response = await getCart();
    setCartDetails(response.data);
    console.log(response.data);
  }

  async function deleteCartProduct(productId) {
    let response = await deleteProduct(productId);
    setCartDetails(response.data);
    console.log(response.data);
  }
  async function updateCartProducts(productId, count) {
    let response = await updateProduct(productId, count);
    setCartDetails(response.data);
    console.log(response.data);
  }
  async function clearProducts() {
    let response = await clearCart();
    setCartDetails(response.data);
    console.log("clear response", response);
  }
  useEffect(() => {
    getCartProducts();
  }, []);
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left my-5 rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <td colSpan={5}>
                <div className="flex justify-center items-center bg-slate-200">
                  <p className="font-bold text-lg me-5">
                    Total Price : {cart?.data?.totalCartPrice} EGP
                  </p>
                  {cartDetails ? (
                    <PrimaryButton
                      fun={() => navigator("/checkOut")}
                      text="checkout"
                    />
                  ) : null}
                  <button
                    onClick={clearProducts}
                    type="button"
                    className="capitalize focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 text-xs md:text-sm font-medium rounded-lg px-3 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  >
                    Clear Cart
                  </button>
                </div>
              </td>
            </tr>
            <tr className="bg-slate-200">
              <th scope="col" className="px-16 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {cartDetails ? (
              cartDetails?.data?.products.map((product) => (
                <tr
                  key={product.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="p-4">
                    <img
                      src={product.product.imageCover}
                      className="w-16 md:w-32 max-w-full max-h-full"
                      alt="Apple Watch"
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {product.product.title}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button"
                        onClick={() =>
                          updateCartProducts(
                            product.product.id,
                            product.count - 1
                          )
                        }
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <div>
                        <input
                          type="number"
                          id="first_product"
                          className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder={product.count}
                          required
                        />
                      </div>
                      <button
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button"
                        onClick={() =>
                          updateCartProducts(
                            product.product.id,
                            product.count + 1
                          )
                        }
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {product.price} EGP
                  </td>
                  <td className="px-6 py-4">
                    <span
                      onClick={() => deleteCartProduct(product.product.id)}
                      className="font-bold text-red-600 dark:text-red-500 hover:underline cursor-pointer"
                    >
                      <span className="hidden lg:inline">Remove</span>
                      <FontAwesomeIcon
                        className="inline lg:hidden text-xl"
                        icon={faTrash}
                      />
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>
                  <p>No Products</p>
                </td>
              </tr>
            )}
            <tr>
              <td colSpan={"100%"} className="text-center">
                {/* <button
                  onClick={clearProducts}
                  type="button"
                  className="capitalize focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-3 mt-3 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Clear Cart
                </button> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
