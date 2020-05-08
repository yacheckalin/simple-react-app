import React from "react";
import styled from "styled-components";
import { useCurrencyContext } from "../currency/currency-context-provider";

const StyledButton = styled.button`
  border-radius: 30px;
  background-color: ${(props) => (props.disabled ? `#e1e1e1` : `#1a237e`)};
  color: ${(props) => (props.disabled ? `#1a237e` : `white`)};
  padding: 15px 30px;
  font-size: 18px;
  :focus {
    outline: none;
  }
  :hover {
    cursor: pointer;
  }
`;

const Button = React.memo(({ disabled, children }) => {
  const { calculateExchange } = useCurrencyContext();
  return (
    <StyledButton
      disabled={disabled}
      onClick={(e) => {
        e.preventDefault();
        calculateExchange();
      }}
    >
      {children}
    </StyledButton>
  );
});

export default Button;
