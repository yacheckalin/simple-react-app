import React, { useState, useContext } from "react";
import { auth } from "./helpers";

const context = {
  isAuthorised: false,
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
  const [isAuthorised, setIsAuthorised] = useState(true);
  const [loginError, setLoginError] = useState("");

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
