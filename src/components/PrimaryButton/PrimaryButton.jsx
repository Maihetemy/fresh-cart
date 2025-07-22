/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import style from "./PrimaryButton.module.css";
import Spinner from "./../Spinner/Spinner";
import PropTypes from "prop-types";
export default function PrimaryButton({ fun, text }) {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {}, []);
  return (
    <>
      <div className="p-1.5">
        <button
          onClick={async () => {
            try {
              setIsLoading(true);
              await fun();
            } catch (error) {
              console.log(error);
            }
            setIsLoading(false);
          }}
          className="primary-btn w-full"
        >
          {isLoading ? <Spinner /> : text}
        </button>
      </div>
    </>
  );
}
PrimaryButton.propTypes = {
  fun: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
