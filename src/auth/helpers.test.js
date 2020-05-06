import { isEmailValid, isPasswordValid } from "./helpers";

describe("helpers", () => {
  test("isEmailValid returns true", () => {
    expect(isEmailValid("test@test.tt")).toBeTruthy();
  });
  test("isEmailValid returns false", () => {
    expect(isEmailValid("test")).toBeFalsy();
  });

  test("isPasswordValid returns true", () => {
    expect(isPasswordValid("AAaaffaa")).toBeTruthy();
    expect(isPasswordValid("AABcDsDD_a")).toBeTruthy();
    expect(isPasswordValid("AAaaffa__")).toBeTruthy();
  });
  test("isPasswordValid returns false", () => {
    expect(isPasswordValid("aaaa")).toBeFalsy();
    expect(isPasswordValid("aaaaAA2")).toBeFalsy();
    expect(isPasswordValid("aaaaAAA222")).toBeFalsy();
  });
});
