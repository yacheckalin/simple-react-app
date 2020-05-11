import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import CurrencyContainer from "./currency-container";
import * as CurrencyContext from "./currency-context-provider";

import { currencyData } from "./data";

describe("<CurrencyContainer />", () => {
  beforeEach(() => {
    const contextValues = { data: currencyData, setFavorite: jest.fn() };
    jest
      .spyOn(CurrencyContext, "useCurrencyContext")
      .mockImplementation(() => contextValues);
  });

  test("displays and renders properly", () => {
    const wrapper = shallow(<CurrencyContainer />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
