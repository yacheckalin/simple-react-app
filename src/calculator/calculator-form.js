import React from "react";
import styled from "styled-components";

import { useCurrencyContext } from "../currency/currency-context-provider";

import Button from "./calculator-form-button";
import Select from "./calculator-form-select";

const Form = styled.form`
  input {
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
      <Select
        defaultValue={exchangeOne}
        optionsList={currencyListOne}
        onChangeHandler={validateExchangeOne}
      />
      <Select
        defaultValue={exchangeTwo}
        optionsList={currencyListTwo}
        onChangeHandler={setExchangeTwo}
      />
      <Button disabled={!exchangeAmount ? true : false}>Расчитать</Button>
    </Form>
  );
};

export default CalculatorForm;
