import React, { useState, useContext } from "react";
import axios from "axios";

import { API_URL } from "./constants";

const context = {
  isAuthorised: false,
};

export const AuthContext = React.createContext(context);
export const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [isAuthorised, setIsAuthorised] = useState();
  const [loginError, setLoginError] = useState("");

  const login = ({ email: login, password }) => {
    const response = Promise.resolve({
      // result: "error",
      // error: "Some message",
      result: "ok",
    });
    response.then((response) => {
      if (response.error) {
        setLoginError(response.error);
        setIsAuthorised(false);
      } else {
        setIsAuthorised(true);
      }
    });
  };

  const logout = ({ email, password }) => {
    // axios
    //   .post(API_URL, { action: "logout", login, password })
    //   .then((response) => console.log(response))
    //   .catch((e) => console.log(e));
    setIsAuthorised(false);
    setLoginError("");
  };

  const resetLoginError = () => {
    setLoginError("");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthorised,
        login,
        logout,
        loginError,
        resetLoginError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
