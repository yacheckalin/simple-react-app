import React from "react";
import styled from "styled-components";

import CalculatorFrom from "./calculator-form";
import { useCurrencyContext } from "../currency/currency-context-provider";

const StyledContainer = styled.div`
  background-color: #e1e1e1;
  width: 760px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  overflow: hidden;
  .calc-header {
    display: flex;
    background-color: #1a237e;
    color: #e1e1e1;
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    font-weight: 300;
    padding: 20px 50px;
  }

  .calc-body {
    background-color: white;
  }
  .calc-body p {
    margin: 0;
    padding: 20px 0 10px;
    font-family: "Open Sans", sans-serif;
  }
  .calc-row {
    padding: 0 0 70px;
    margin: 0 70px;
    p.calc-result {
      font-size: 30px;
      font-family: "Open Sans", sans-serif;
      padding: 0;
      margin: 0;
    }
  }
  .calc-row:first-child {
    border-bottom: 1px solid #e1e1e1;
  }
`;

const CalculatorContainer = () => {
  const { exchangeSummary } = useCurrencyContext();
  return (
    <StyledContainer className="calc-container">
      <div className="calc-header">Конвертация валют</div>
      <div className="calc-body">
        <div className="calc-row">
          <p>Сумма</p>
          <CalculatorFrom />
        </div>
        <div className="calc-row">
          <p>Итого</p>
          <p className="calc-result">{exchangeSummary}&nbsp;</p>
        </div>
      </div>
    </StyledContainer>
  );
};

export default CalculatorContainer;
