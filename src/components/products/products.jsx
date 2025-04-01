/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import style from "./Products.module.css";
export default function Products() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {}, []);
  return (
    <>
      <h1>Products</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure obcaecati
        quasi minus beatae inventore iste, a sunt natus totam impedit. Pariatur,
        aut harum. Vitae, unde eveniet maiores provident quasi minus!
      </p>
    </>
  );
}
