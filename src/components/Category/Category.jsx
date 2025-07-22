import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "./../../Hooks/useProducts";
import ProductCardUi from "./../ProductCardUI/ProductCardUI";
import { cartContext } from "../../context/CartContext";
export default function Category() {
  const [categoryProductList, setCategoryProductList] = useState([]);
  let { name } = useParams();
  let { data } = useProducts();
  let { addToCart } = useContext(cartContext);
  function getRelatedProduct(name) {
    let products = data?.filter((product) => product?.category?.name === name);
    setCategoryProductList(products);
    // console.log(products);
    console.log(categoryProductList);
  }
  useEffect(() => {
    if (data) {
      getRelatedProduct(name);
    }
  }, [name, data]);
  return (
    <>
      {categoryProductList.length > 0 ? (
        <>
          <h3 className="mt-3 mb-7 font-bold text-green-950 text-2xl">
            {categoryProductList[0].category.name}
          </h3>
          <div className="row">
            {categoryProductList.map((product) => (
              <div key={product.id} className="w-1/2 md:w-1/3 lg:w-1/4">
                <div className="p-2">
                  <ProductCardUi product={product} addToCartFun={addToCart} />
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <h2 className="text-center my-20 font-bold text-green-950 text-2xl">
          No Products
        </h2>
      )}
    </>
  );
}
