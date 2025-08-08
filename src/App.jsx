import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import ProtectedRouter from "./components/ProtectedRouter/ProtectedRouter";
import Home from "./pages/Home/Home";
import Brands from "./pages/Brands/Brands";
import About from "./pages/About/About";
import Categories from "./pages/Categories/Categories";
import Product from "./components/Product/Product";
import Category from "./pages/Category/Category";
import Cart from "./pages/Cart/Cart";
import CheckOut from "./pages/CheckOut/CheckOut";
import AllUserOrders from "./pages/AllUserOrders/AllUserOrders";
import WishListPage from "./pages/wishListPage/wishListPage";
import Login from "./pages/Login/Login";
import Register from "./pages/register/register";
import NotFound from "./pages/NotFound/NotFound";
import CartContextProvider from "./context/CartContext";
import UserTokenContextProvider from "./context/UserContext";
import Layout from "./components/Layout/Layout";
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
              <Home />
            </ProtectedRouter>
          ),
        },
        {
          path: "brands",
          element: (
            <ProtectedRouter>
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
    <UserTokenContextProvider>
      <CartContextProvider>
        <QueryClientProvider client={client}>
          <Toaster position="bottom-right" />
          <RouterProvider router={router}></RouterProvider>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </CartContextProvider>
    </UserTokenContextProvider>
  );
}

export default App;
