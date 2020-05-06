import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Button from "./calculator-form-button";

describe("<Button />", () => {
  test("renders and displays properly", () => {
    const wrapper = shallow(<Button>Submit</Button>);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
