/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Login from "./components/login/login";
import Register from "./components/register/register";
import About from "./components/About/About";
import Brands from "./components/brands/brands";
import NotFound from "./components/NotFound/NotFound";
import CounterContextProvider from "./context/UserContext";
import ProtectedRouter from "./components/ProtectedRouter/ProtectedRouter";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Product from "./components/Product/Product";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Products from "./components/products/products";
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
          path: "products",
          element: (
            <ProtectedRouter>
              <Products />
            </ProtectedRouter>
          ),
        },
        {
          path: "productDetails/:category/:id",
          element: (
            <ProtectedRouter>
              <ProductDetails />
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
          path: "cart",
          element: (
            <ProtectedRouter>
              {" "}
              <Cart />
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
    <QueryClientProvider client={client}>
      <CounterContextProvider>
        <RouterProvider router={router}></RouterProvider>
        <ReactQueryDevtools />
      </CounterContextProvider>
    </QueryClientProvider>
  );
}

export default App;
