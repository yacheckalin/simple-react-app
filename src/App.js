import React from "react";
import AuthContainer from "./auth";
import AuthContextProvider from "./auth/auth-context-provider";
import Authorized from "./auth/auth-wrapper";

const App = () => {
  return (
    <AuthContextProvider>
      <AuthContainer />
      <Authorized>Some authorized content here</Authorized>
    </AuthContextProvider>
  );
};

export default App;
