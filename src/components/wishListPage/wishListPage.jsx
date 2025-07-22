import { useEffect} from "react";
import useWishList from "../../Hooks/useWishList";
import ProductCardUi from "./../ProductCardUI/ProductCardUI";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { cartContext } from "./../../context/CartContext";
import { Link } from "react-router-dom";
import emptyCart from "../../assets/imgs/empty_cart_transparent.png";
export default function WishListPage() {
  const { wishList } = useWishList();
  useEffect(() => {}, []);
  let { addToCart } = useContext(cartContext);

  async function addToCartFun(productId) {
    let response = await addToCart(productId);
    console.log(response);
    if (response?.data?.status === "success") {
      toast.success(response?.data?.data?.message || "Successfully toasted!");
      console.log("done");
    } else {
      toast.error(response?.data?.data?.message || "Error adding to cart");
      console.log("error");
    }
  }
  console.log(typeof wishList);

  return (
    <>
      {wishList?.data?.length > 0 ? (
        <>
          <h1 className="title mx-2 my-3">my wish list</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {wishList
              ? wishList?.data?.map((product) => {
                  return (
                    <ProductCardUi
                      key={product.id}
                      product={product}
                      addToCartFun={addToCartFun}
                    />
                  );
                })
              : null}
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center w-full mt-32 mb-14">
          <h1 className="text-3xl font-bold text-green-950 mb-4">Not Found</h1>
          <img
            className="h-[200px] w-auto object-contain "
            src={emptyCart}
            alt="Empty Cart"
          />
          <p className="capitalize my-5 text-lg">
            you want to shopping?
            <Link to={"/"}>
              <span className="capitalize text-green-900 underline ms-2 font-extrabold">go</span>
            </Link>
          </p>
        </div>
      )}
    </>
  );
}
