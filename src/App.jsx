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
import Products from "./components/Products/Products";
import CounterContextProvider from "./context/UserContext";
import ProtectedRouter from "./components/ProtectedRouter/ProtectedRouter";

function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <ProtectedRouter><Home /> </ProtectedRouter> },
        { path: "brands", element: <ProtectedRouter> <Brands /></ProtectedRouter> },
        { path: "products", element:<ProtectedRouter> <Products /></ProtectedRouter> },
        { path: "brands", element:<ProtectedRouter><Brands /></ProtectedRouter>  },
        { path: "about", element: <ProtectedRouter><About /></ProtectedRouter> },
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
