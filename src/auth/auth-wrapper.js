import React from "react";
import { useAuthContext } from "./auth-context-provider";

const Authorized = ({ children }) => {
  const context = useAuthContext();
  return context.isAuthorised ? <>{children} </> : null;
};

export default Authorized;
