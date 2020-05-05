import React from "react";
import { useAuthContext } from "./auth/auth-context-provider";

const AppContainer = ({ children }) => {
  const context = useAuthContext();

  return context.isAuthorised ? <p>{children}</p> : null;
};

export default AppContainer;
