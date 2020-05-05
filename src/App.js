import React from "react";
import AuthContainer from "./auth";
import AuthContextProvider from "./auth/auth-context-provider";
import AppContainer from "./app-container";

const App = () => {
  return (
    <AuthContextProvider>
      <AuthContainer />
      <AppContainer>Some authorized content here</AppContainer>
    </AuthContextProvider>
  );
};

export default App;
