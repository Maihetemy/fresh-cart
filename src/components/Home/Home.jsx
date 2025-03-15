/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import style from "./Home.module.css";
// import { CounterContext } from "../../context/UserContext";

export default function Home() {
  // const [counter, setCounter] = useState(0);
  // let { counter, setCounter } = useContext(CounterContext);
  useEffect(() => {}, []);
  return (
    <>
      {/* <h1>Home {counter}</h1> */}
      {/* <button onClick={()=>setCounter(Math.random)} className="bg-gray-800"> counter button</button> */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure obcaecati
        quasi minus beatae inventore iste, a sunt natus totam impedit. Pariatur,
        aut harum. Vitae, unde eveniet maiores provident quasi minus!
      </p>
    </>
  );
}
