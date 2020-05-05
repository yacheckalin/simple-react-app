import React from "react";
import AuthContainer from "./auth";
import AuthContextProvider from "./auth/auth-context-provider";
import { useAuthContext } from "./auth/auth-context-provider";

const MainWrapper = ({ children }) => ({ children });

const App = () => {
  const context = useAuthContext();

  const { isAuthorised } = context;

  return (
    <AuthContextProvider>
      {!isAuthorised && <AuthContainer />}
      {isAuthorised && <MainWrapper>Some authorized content here</MainWrapper>}
    </AuthContextProvider>
  );
};

export default App;
