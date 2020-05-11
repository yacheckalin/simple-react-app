import React from "react";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";

import Logout from "./logout";
import App from "../App";
import * as AuthContext from "./auth-context-provider";
import Authorised from "./auth-wrapper";
import AuthForm from "./auth-form";

describe("<Logout />", () => {
  test("displays and renders properly", () => {
    const wrapper = shallow(<Logout />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  test("logout works properly", () => {
    const contextValues = { isAuthorised: true, logout: jest.fn() };
    jest
      .spyOn(AuthContext, "useAuthContext")
      .mockImplementation(() => contextValues);

    const TestElement = () => (
      <div id="test-component">
        <Logout />
      </div>
    );

    const wrapper = mount(
      <>
        <AuthForm />
        <Authorised>
          <TestElement />
        </Authorised>
      </>
    );

    expect(wrapper.find("#test-component")).toBeTruthy();
    wrapper.find("#logout").simulate("click");
    expect(wrapper.find("#email")).toHaveLength(1);
  });
});
