import React from "react";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";

import Logout from "./logout";
import * as AuthContext from "./auth-context-provider";

describe("<Logout />", () => {
  test("displays and renders properly", () => {
    const wrapper = shallow(<Logout />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
