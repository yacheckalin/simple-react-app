import React, { Suspense } from "react";
import AuthForm from "./auth-form";
import "./../styles.css";
import { useAuthContext } from "./auth-context-provider";
import Language from "../components/language";

import styled from "styled-components";

const LanguageWrapper = styled.div`
  padding: 30px;
`;

const AuthContainer = React.memo(() => {
  const context = useAuthContext();

  return (
    <>
      <Suspense fallback="loading">
        {!context?.isAuthorised && (
          <div className="grid-container">
            <LanguageWrapper>
              <Language />
            </LanguageWrapper>

            <AuthForm />
          </div>
        )}
      </Suspense>
    </>
  );
});

export default AuthContainer;
