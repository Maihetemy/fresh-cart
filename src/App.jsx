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
import NotFound from './components/NotFound/NotFound';
import Products from './components/Products/Products';

function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "brands", element: <Brands /> },
        { path: "products", element: <Products /> },
        { path: "brands", element: <Brands /> },
        { path: "about", element: <About /> },
        { path: "cart", element: <Cart /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "*", element: <NotFound/> },
      ],
    }
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
