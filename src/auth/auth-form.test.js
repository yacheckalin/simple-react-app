import React from "react";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";

import AuthForm from "./auth-form";
import * as AuthContext from "./auth-context-provider";

describe("<AuthForm />", () => {
  test("renders and displays properly", () => {
    const wrapper = shallow(<AuthForm />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test("form elements renders properly", () => {
    const wrapper = shallow(<AuthForm />);

    expect(wrapper.find("input")).toHaveLength(2);
    expect(wrapper.find("button")).toHaveLength(1);
  });

  test("validate email shows error message", () => {
    const contextValues = { isAuthorised: false, resetLoginError: jest.fn() };
    jest
      .spyOn(AuthContext, "useAuthContext")
      .mockImplementation(() => contextValues);
    const wrapper = shallow(<AuthForm />);

    wrapper.find("#email").simulate("change", { target: { value: "test" } });
    expect(wrapper.find("#email").hasClass("error")).toBeTruthy();

    expect(wrapper.find("#email-error").text().trim()).toBe("Неверный email");
  });

  test("validate email", () => {
    const contextValues = {
      isAuthorised: false,
      loginError: "",
      resetLoginError: jest.fn(),
    };
    jest
      .spyOn(AuthContext, "useAuthContext")
      .mockImplementation(() => contextValues);

    const wrapper = shallow(<AuthForm />);
    wrapper
      .find("#email")
      .simulate("change", { target: { value: "test@test.ss" } });
    expect(wrapper.find("#email").hasClass("error")).toBeFalsy();

    expect(wrapper.find("#email-error").text().trim()).toBe("");
  });

  test("validate password shows error message", () => {
    const contextValues = { isAuthorised: false, resetLoginError: jest.fn() };
    jest
      .spyOn(AuthContext, "useAuthContext")
      .mockImplementation(() => contextValues);
    const wrapper = shallow(<AuthForm />);

    wrapper
      .find("#password")
      .simulate("change", { target: { value: "test2" } });
    expect(wrapper.find("#password").hasClass("error")).toBeTruthy();

    expect(wrapper.find("#password-error").text().trim()).toBe(
      "Неверный пароль"
    );
  });

  test("validate password", () => {
    const contextValues = {
      isAuthorised: false,
      loginError: "",
      resetLoginError: jest.fn(),
    };
    jest
      .spyOn(AuthContext, "useAuthContext")
      .mockImplementation(() => contextValues);

    const wrapper = shallow(<AuthForm />);
    wrapper
      .find("#password")
      .simulate("change", { target: { value: "PasswordSecured_" } });
    expect(wrapper.find("#password").hasClass("error")).toBeFalsy();

    expect(wrapper.find("#password-error").text().trim()).toBe("");
  });

  test("complete validation fail", () => {
    const contextValues = {
      isAuthorised: false,
      loginError: "Form Validation Error",
      resetLoginError: jest.fn(),
      login: jest.fn(),
    };
    jest
      .spyOn(AuthContext, "useAuthContext")
      .mockImplementation(() => contextValues);

    const wrapper = shallow(<AuthForm />);
    wrapper
      .find("#email")
      .simulate("change", { target: { value: "test@email.com" } });
    wrapper
      .find("#password")
      .simulate("change", { target: { value: "Passw_" } });
    wrapper.find("button").simulate("click", { preventDefault: () => {} });
    expect(wrapper.find("#form-error").text()).toBe("Form Validation Error");
  });
  test("complete validation successfully complete", () => {
    const contextValues = {
      isAuthorised: false,
      loginError: "",
      resetLoginError: jest.fn(),
      login: jest.fn(),
    };
    jest
      .spyOn(AuthContext, "useAuthContext")
      .mockImplementation(() => contextValues);

    const wrapper = shallow(<AuthForm />);
    wrapper
      .find("#email")
      .simulate("change", { target: { value: "test@email.com" } });
    wrapper
      .find("#password")
      .simulate("change", { target: { value: "PasswordSecured" } });
    wrapper.find("button").simulate("click", { preventDefault: () => {} });
    expect(wrapper.find("#form-error").text()).toBe("");
  });
});
