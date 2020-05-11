import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Language from "./language";

describe("<Language />", () => {
  test("displays and shows properly", () => {
    const wrapper = shallow(<Language />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
