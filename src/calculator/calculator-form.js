import React from "react";
import styled from "styled-components";

import { useCurrencyContext } from "../currency/currency-context-provider";

import Button from "./calculator-form-button";
import FormSelect from "./calculator-form-select";

import { useTranslation } from "react-i18next";

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
    validateExchangeOne,
    validateExchangeTwo,
  } = useCurrencyContext();

  const { t } = useTranslation();

  return (
    <Form>
      <input
        id="exchangeAmount"
        type="text"
        value={exchangeAmount}
        onChange={(e) => {
          if (!isNaN(parseFloat(e.target.value))) {
            setExchangeAmount(parseFloat(e.target.value));
          }
        }}
      />
      <FormSelect
        defaultValue={exchangeOne[0]}
        optionsList={currencyListOne}
        onChangeHandler={({ value }) => validateExchangeOne(value)}
      />
      <FormSelect
        defaultValue={exchangeTwo[0]}
        optionsList={currencyListTwo}
        onChangeHandler={({ value }) => validateExchangeTwo(value)}
      />
      <Button disabled={!exchangeAmount ? true : false}>
        {t("calculator.calculate")}
      </Button>
    </Form>
  );
};

export default CalculatorForm;
