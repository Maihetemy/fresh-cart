import { createContext, useEffect, useState } from "react";

export let userTokenContext = createContext(0);

export default function UserTokenContextProvider(props) {
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUserToken(localStorage.getItem("token"));
    }
  }, []);

  console.log("user token ", userToken);

  return (
    <>
      <userTokenContext.Provider value={{ userToken, setUserToken }}>
        {props.children}
      </userTokenContext.Provider>
    </>
  );
}
