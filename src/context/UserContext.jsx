/* eslint-disable no-unused-vars */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { verifyUserToken } from "../API/userAPI";

export let userTokenContext = createContext(0);

export default function UserTokenContextProvider(props) {
  const [userToken, setUserToken] = useState(
    localStorage.getItem("token") || null
  );
  const [userID, setUserID] = useState(localStorage.getItem("userID") || null);
  const [isVerifying, setIsVerifying] = useState(true);
  const verifyToken = async (userToken) => {
    console.log("Verifying token:", userToken);

    if (!userToken) {
      localStorage.removeItem("userID");
      setUserID(null);
      setIsVerifying(false); // Nothing to verify
      return;
    }
    try {
      const data = await verifyUserToken(userToken);
      console.log("Token verification result:", data);
      localStorage.setItem("userID", data.decoded.id);
      setUserID(data.decoded.id);
    } catch (error) {
      localStorage.removeItem("userID");
      setUserID(null);
      localStorage.removeItem("token");
      setUserToken(null);
    } finally {
      setIsVerifying(false); // done verifying (valid or not)
    }
  };
  useEffect(() => {
    if (userToken) {
      verifyToken(userToken);
    } else {
      setIsVerifying(false);
    }
  }, [userToken]);
  return (
    <>
      <userTokenContext.Provider
        value={{
          userToken,
          setUserToken,
          userID,
          setUserID,
          isVerifying,
          verifyToken,
        }}
      >
        {props.children}
      </userTokenContext.Provider>
    </>
  );
}
