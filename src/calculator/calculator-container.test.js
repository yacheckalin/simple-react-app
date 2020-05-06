import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import CalculatorContainer from "./calculator-container";

describe("<CalculatorContainer />", () => {
  test("renders and displays properly", () => {
    const wrapper = shallow(<CalculatorContainer />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
