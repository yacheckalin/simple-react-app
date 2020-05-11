import React, { useState, useContext, useEffect } from "react";
import { auth } from "./helpers";
import { useLocalStorage, writeStorage } from "@rehooks/local-storage";

import { DEFAULT_IS_AUTHORISED } from "./constants";

const context = {
  isAuthorised: DEFAULT_IS_AUTHORISED,
};

export const AuthContext = React.createContext(context);
export const useAuthContext = () => useContext(AuthContext);

const errorResponse = JSON.stringify({
  result: "error",
  error:
    "\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",
});
const successResponse = JSON.stringify({ result: "ok" });

const AuthContextProvider = ({ children }) => {
  const [isAuthorisedKey] = useLocalStorage("isAuthorisedKey");
  const [isAuthorised, setIsAuthorised] = useState(
    isAuthorisedKey === undefined ? DEFAULT_IS_AUTHORISED : isAuthorisedKey
  );
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    writeStorage("isAuthorisedKey", isAuthorised);
  }, [isAuthorised]);

  const login = ({ email: login, password }) => {
    //TODO: change for axios request
    let resp = auth({ email: login, password })
      ? successResponse
      : errorResponse;
    const response = Promise.resolve(resp);

    response.then((response) => {
      const res = JSON.parse(response);
      if (res.error) {
        setLoginError(res.error);
        setIsAuthorised(false);
      } else {
        setIsAuthorised(true);
        writeStorage("isAuthorisedKey", true);
      }
    });
  };

  const logout = ({ email, password }) => {
    //TODO: change for axios request
    const response = Promise.resolve(successResponse);

    response.then((resp) => {
      const res = JSON.parse(resp);

      if (!res.error) {
        setLoginError("");
        setIsAuthorised(false);
        writeStorage("isAuthorisedKey", false);
      }
    });

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
        setIsAuthorised,
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
