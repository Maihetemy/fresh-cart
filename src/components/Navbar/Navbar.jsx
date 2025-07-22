import  { useContext, useEffect } from "react";
import logo from "../../assets/imgs/freshcart-logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { userTokenContext } from "../../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { cartContext } from "../../context/CartContext";
import useWishList from "../../Hooks/useWishList";
export default function Navbar() {
  let navigator = useNavigate();

  let { wishList } = useWishList();
  let { userToken, setUserToken } = useContext(userTokenContext);
  let { cart, getCart } = useContext(cartContext);
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
        <div className="max-w-screen-xl  flex flex-wrap md:flex-nowrap items-center justify-between mx-auto p-2">
          <Link to={"/"}>
            <img src={logo} width={150} alt="" />
          </Link>

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
            className="hidden w-full md:block lg:w-2/3 lg:ps-24"
            id="navbar-default"
          >
            <ul className="flex flex-col justify-between p-4 pt-0 md:p-0 border w-full border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse  md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <div className="main_menu md:flex md:justify-center md:w-full lg:w-auto">
                {userToken ? (
                  <div className="flex flex-col md:flex-row">
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
                    <li className="cart-icon mx-2 flex items-center">
                      <NavLink to={"/wishListPage"}>
                        <div className=" relative ">
                          <div>
                            <FontAwesomeIcon
                              icon={faHeart}
                              className="text-lg hidden md:inline text-green-950"
                            />
                            <span className="inline md:hidden capitalize ">
                              wish list
                            </span>
                          </div>
                          <p className="text-xs text-white absolute -top-1/4 -right-1/4 translate-x-1/2 bg-green-400 px-1.5 rounded-lg ms-0.5">
                            {wishList?.count}
                          </p>
                        </div>
                      </NavLink>
                    </li>
                    <li className="cart-icon mx-2 flex items-center">
                      <NavLink to={"/cart"}>
                        <div className=" relative text-green-950">
                          <div>
                            <FontAwesomeIcon
                              icon={faCartShopping}
                              className="text-lg hidden md:inline"
                            />
                            <span className="inline md:hidden capitalize ">
                              cart
                            </span>
                          </div>
                          <p className="text-xs text-white absolute -top-1/4 -right-1/4 translate-x-1/2 bg-green-400 px-1.5 rounded-lg ms-0.5">
                            {cart.numOfCartItems}
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
