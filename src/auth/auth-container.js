import React from "react";
import AuthForm from "./auth-form";
import "./../styles.css";
import { useAuthContext } from "./auth-context-provider";

const AuthContainer = React.memo(() => {
  const context = useAuthContext();

  return (
    <>
      {!context?.isAuthorised && (
        <div className="grid-container">
          <AuthForm />
        </div>
      )}
    </>
  );
});

export default AuthContainer;
