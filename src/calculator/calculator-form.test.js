import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import CalculatorForm from "./calculator-form";

import * as CurrencyContext from "../currency/currency-context-provider";
import Button from "./calculator-form-button";

describe("<CalculatorForm />", () => {
  const contextValues = {
    currencyListOne: ["USD", "EUR", "GMB", "CAD", "JPY"],
    currencyListTwo: ["USD", "EUR", "GMB", "CAD", "JPY"],
    exchangeOne: "USD",
    exchangeTwo: "USD",
    exchangeAmount: 0,
    setExchangeAmount: jest.fn(),
    setExchangeTwo: jest.fn(),
    validateExchangeOne: jest.fn(),
  };
  beforeEach(() => {
    jest
      .spyOn(CurrencyContext, "useCurrencyContext")
      .mockImplementation(() => contextValues);
  });
  test("renders and displays properly", () => {
    const wrapper = shallow(<CalculatorForm />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
