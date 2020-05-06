import React from "react";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";

import Authorised from "./auth-wrapper";
import * as AuthContext from "./auth-context-provider";

describe("<Authorized />", () => {
  test("displays and renders properly", () => {
    const wrapper = shallow(<Authorised />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test("display secured content", () => {
    const contextValues = { isAuthorised: true };
    jest
      .spyOn(AuthContext, "useAuthContext")
      .mockImplementation(() => contextValues);

    const TestElement = () => <div id="test-component">Some Test Element</div>;

    const wrapper = mount(
      <Authorised>
        <TestElement />
      </Authorised>
    );

    expect(wrapper.find("#test-component")).toBeTruthy();
  });

  test("hide secured content", () => {
    const contextValues = { isAuthorised: false };
    jest
      .spyOn(AuthContext, "useAuthContext")
      .mockImplementation(() => contextValues);

    const TestElement = () => <div id="test-component">Secured Content</div>;

    const wrapper = mount(
      <Authorised>
        <TestElement />
      </Authorised>
    );

    expect(wrapper.find("#test-component")).toHaveLength(0);
  });
});
