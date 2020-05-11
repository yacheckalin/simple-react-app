import React from "react";
import AuthContainer from "./auth";
import AuthContextProvider from "./auth/auth-context-provider";
import Authorized from "./auth/auth-wrapper";
import TabsContainer from "./tab-container";
import Logout from "./auth/logout";
import Language from "./components/language";

import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

const App = () => {
  return (
    <AuthContextProvider>
      <AuthContainer />
      <Authorized>
        <HeaderWrapper>
          <Language />
          <Logout />
        </HeaderWrapper>
        <TabsContainer />
      </Authorized>
    </AuthContextProvider>
  );
};

export default App;
