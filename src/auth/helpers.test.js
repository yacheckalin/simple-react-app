import { isEmailValid, isPasswordValid, auth } from "./helpers";

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
    expect(isPasswordValid("aaaaA2}")).toBeFalsy();
    expect(isPasswordValid("aaA222")).toBeFalsy();
  });
  test("auth returns true", () => {
    expect(auth({ email: "test@test.com", password: "TestPassword_" }));
  });
  test("auth returns false", () => {
    expect(auth({ email: "test@test", password: "TestPassword123_" }));
  });
});
