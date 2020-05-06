import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import AuthContainer from "./auth-container";
import * as AuthContext from "./auth-context-provider";

describe("<AuthContainer />", () => {
  test("renders and displays properly", () => {
    const wrapper = shallow(<AuthContainer />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test("render nothing", () => {
    const contextValues = { setIsAuthorised: jest.fn(), isAuthorised: true };
    jest
      .spyOn(AuthContext, "useAuthContext")
      .mockImplementation(() => contextValues);

    const wrapper = shallow(<AuthContainer />);
    expect(wrapper.text()).toEqual("");
  });
});
