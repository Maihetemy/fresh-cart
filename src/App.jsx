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

function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <ProtectedRouter><Home /> </ProtectedRouter> },
        { path: "brands", element: <ProtectedRouter> <Brands /></ProtectedRouter> },
        { path: "brands", element:<ProtectedRouter><Brands /></ProtectedRouter>  },
        { path: "about", element: <ProtectedRouter><About /></ProtectedRouter> },
        { path: "productDetails/:category/:id", element: <ProtectedRouter><ProductDetails /></ProtectedRouter> },
        { path: "product/:category/:id", element: <ProtectedRouter><Product /></ProtectedRouter> },
        { path: "cart", element:<ProtectedRouter> <Cart /></ProtectedRouter> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return <CounterContextProvider>
    <RouterProvider router={router}></RouterProvider>;
  </CounterContextProvider>;
}

export default App;
