import React from "react";
import AuthContainer from "./auth";
import AuthContextProvider from "./auth/auth-context-provider";
import Authorized from "./auth/auth-wrapper";
import TabsContainer from "./tab-container";

const App = () => {
  return (
    <AuthContextProvider>
      <AuthContainer />
      <Authorized>
        <TabsContainer />
      </Authorized>
    </AuthContextProvider>
  );
};

export default App;
