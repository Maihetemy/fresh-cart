/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Register from "./components/register/register";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import UserTokenContextProvider from "./context/UserContext";
import ProtectedRouter from "./components/ProtectedRouter/ProtectedRouter";
import Product from "./components/Product/Product";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CartContextProvider from "./context/CartContext";
import { Toaster } from "react-hot-toast";
import Categories from "./components/Categories/Categories";
import Category from "./components/Category/Category";
import CheckOut from "./components/CheckOut/CheckOut";
import AllUserOrders from "./components/AllUserOrders/AllUserOrders";
import WishListPage from "./components/wishListPage/wishListPage";
import Login from "./components/Login/Login";
import Brands from './components/Brands/Brands';
function App() {
  const client = new QueryClient();
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRouter>
              <Home />{" "}
            </ProtectedRouter>
          ),
        },
        {
          path: "brands",
          element: (
            <ProtectedRouter>
              {" "}
              <Brands />
            </ProtectedRouter>
          ),
        },
        {
          path: "about",
          element: (
            <ProtectedRouter>
              <About />
            </ProtectedRouter>
          ),
        },
        {
          path: "categories",
          element: (
            <ProtectedRouter>
              <Categories />
            </ProtectedRouter>
          ),
        },
        {
          path: "product/:category/:id",
          element: (
            <ProtectedRouter>
              <Product />
            </ProtectedRouter>
          ),
        },
        {
          path: "category/:name",
          element: (
            <ProtectedRouter>
              <Category />
            </ProtectedRouter>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedRouter>
              <Cart />
            </ProtectedRouter>
          ),
        },
        {
          path: "checkOut",
          element: (
            <ProtectedRouter>
              <CheckOut />
            </ProtectedRouter>
          ),
        },
        {
          path: "allorders",
          element: (
            <ProtectedRouter>
              <AllUserOrders />
            </ProtectedRouter>
          ),
        },
        {
          path: "wishListPage",
          element: (
            <ProtectedRouter>
              <WishListPage />
            </ProtectedRouter>
          ),
        },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <CartContextProvider>
      <QueryClientProvider client={client}>
        <UserTokenContextProvider>
          <Toaster position="bottom-right" />
          <RouterProvider router={router}></RouterProvider>
          <ReactQueryDevtools />
        </UserTokenContextProvider>
      </QueryClientProvider>
    </CartContextProvider>
  );
}

export default App;
