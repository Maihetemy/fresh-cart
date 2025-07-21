/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import style from "./FavIcon.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
export default function FavIcon() {
  useEffect(() => {}, []);
  return (
    <>
      <FontAwesomeIcon
        icon={faHeart}
        onClick={() => setClick(!isClick)}
        className={`cursor-pointer transition-colors duration-300  ${
          isClick ? "text-red-600" : "text-gray-400"
        }`}
      />
    </>
  );
}
