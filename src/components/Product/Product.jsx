import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "./../ProductDetails/ProductDetails";
import RelatedProducts from "./../RelatedProducts/RelatedProducts";

export default function Product() {
  let { category, id } = useParams();
  useEffect(() => {}, []);
  return (
    <>
      <ProductDetails>{id}</ProductDetails>
      <RelatedProducts>{category}</RelatedProducts>
    </>
  );
}
