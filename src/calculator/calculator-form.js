import React, { useState } from "react";
import styled from "styled-components";

import { useCurrencyContext } from "../currency/currency-context-provider";

const Form = styled.form`
  button {
    background-color: #1a237e;
    border-radius: 30px;
    color: white;
    padding: 15px 30px;
    font-size: 18px;
    :focus {
      outline: none;
    }
  }

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
  const [exchangeOne, setExchangeOne] = useState("USD");
  const [exchangeTwo, setExchangeTwo] = useState("AUD");

  const { currencyList, calculateExchange } = useCurrencyContext();
  return (
    <Form>
      <input type="text" />
      <select
        defaultValue={exchangeOne}
        onChange={(e) => setExchangeOne(e.target.value)}
      >
        {currencyList.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <select
        defaultValue={exchangeTwo}
        onChange={(e) => setExchangeTwo(e.target.value)}
      >
        {currencyList.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <button
        onClick={(e) => {
          calculateExchange(exchangeOne, exchangeTwo);
          e.preventDefault();
        }}
      >
        Рассчитать
      </button>
    </Form>
  );
};

export default CalculatorForm;
