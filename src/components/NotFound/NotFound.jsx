import React, { useEffect, useState } from "react";
import style from "./NotFound.module.css";
export default function NotFound() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {}, []);
  return (
    <>
      <h1>NotFound</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure obcaecati
        quasi minus beatae inventore iste, a sunt natus totam impedit. Pariatur,
        aut harum. Vitae, unde eveniet maiores provident quasi minus!
      </p>
    </>
  );
}
