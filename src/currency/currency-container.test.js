import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import CurrencyContainer from "./currency-container";
import * as CurrencyContext from "./currency-context-provider";

describe("<CurrencyContainer />", () => {
  const mockedData = [
    {
      favorite: false,
      asset: "EUR/USD",
      quote: "1.12",
      date: new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }).format(Date.now()),
    },
    {
      favorite: false,
      asset: "USD/JPY",
      quote: "107.95",
      date: new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }).format(Date.now()),
    },
    {
      favorite: false,
      asset: "GBP/USD",
      quote: "1.238",
      date: new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }).format(Date.now()),
    },
    {
      favorite: false,
      asset: "AUD/USD",
      quote: "0.7048",
      date: new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }).format(Date.now()),
    },
    {
      favorite: false,
      asset: "USD/CHF",
      quote: "0.9888",
      date: new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }).format(Date.now()),
    },
    {
      favorite: false,
      asset: "USD/CAD",
      quote: "1.31",
      date: new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }).format(Date.now()),
    },
  ];

  test("displays and renders properly", () => {
    const contextValues = { data: mockedData, setFavorite: jest.fn() };
    jest
      .spyOn(CurrencyContext, "useCurrencyContext")
      .mockImplementation(() => contextValues);
    const wrapper = shallow(<CurrencyContainer />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
