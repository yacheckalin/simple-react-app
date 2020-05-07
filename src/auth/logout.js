import React from "react";

import styled from "styled-components";
import { useAuthContext } from "./auth-context-provider";

const Style = styled.div`
  display: flex;
  align-self: flex-end;
  margin: 50px 110px 50px 0;
  button {
    padding: 10px 30px;
    width: 150px;
    color: #1a237e;
    background-color: #e1e1e1;
    border: 2px solid #1a237e;
    cursor: pointer;
    border-radius: 25px;
    font-size: 18px;
    justify-content: center;
    :focus {
      outline: none;
    }
  }
`;

const Logout = () => {
  const { logout } = useAuthContext();
  return (
    <Style>
      <button id="logout" onClick={(e) => logout(e)}>
        Выход
      </button>
    </Style>
  );
};

export default Logout;
