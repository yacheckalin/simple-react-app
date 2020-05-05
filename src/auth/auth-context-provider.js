import React, { useState, useContext } from "react";

const context = {
  isAuthorised: false,
};

export const AuthContext = React.createContext(context);
export const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [isAuthorised, setIsAuthorised] = useState();

  return (
    <AuthContext.Provider value={{ isAuthorised, setIsAuthorised }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
