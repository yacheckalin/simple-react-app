import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import TabsContainer from "./tab-container";

describe("<TabsContainer />", () => {
  test("displays and shows properly", () => {
    const wrapper = shallow(<TabsContainer />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
