import React from "react";
import styled from "styled-components";

import Button from "./calculator-form-button";
import { useCurrencyContext } from "../currency/currency-context-provider";

const Form = styled.form`
  input,
  select {
    max-width: 98px;
    width: 100%;
    border-radius: 10px;
    border: 2px solid #1a237e;
    padding: 10px;
    color: back;
    font-size: 18px;
    margin-right: 30px;
    :focus {
      outline: none;
    }
  }
`;

const CalculatorForm = () => {
  const {
    currencyListOne,
    currencyListTwo,
    exchangeOne,
    exchangeTwo,
    exchangeAmount,
    setExchangeAmount,
    setExchangeTwo,
    validateExchangeOne,
  } = useCurrencyContext();

  return (
    <Form>
      <input
        type="text"
        value={exchangeAmount}
        onChange={(e) => setExchangeAmount(parseFloat(e.target.value))}
      />
      <select
        defaultValue={exchangeOne}
        onChange={(e) => validateExchangeOne(e.target.value)}
      >
        {currencyListOne.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <select
        defaultValue={exchangeTwo}
        onChange={(e) => setExchangeTwo(e.target.value)}
      >
        {currencyListTwo.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <Button disabled={!exchangeAmount ? true : false}>Расчитать</Button>
    </Form>
  );
};

export default CalculatorForm;
