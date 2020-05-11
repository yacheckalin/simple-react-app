import React from "react";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";

import CalculatorContainer from "./calculator-container";
import * as CurrencyContext from "../currency/currency-context-provider";

import Button from "./calculator-form-button";

describe("<CalculatorContainer />", () => {
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
    const wrapper = shallow(<CalculatorContainer />);

    expect(toJSON(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
});
