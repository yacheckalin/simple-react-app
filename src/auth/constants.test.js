import { API_URL, VALID_PASSWORD, VALID_LOGIN } from "./constants";

describe("constants", () => {
  test("API_URL", () => {
    expect(API_URL).toBe("http://35.195.25.70/api.php");
  });
  test("VALID_LOGIN", () => {
    expect(VALID_LOGIN).toEqual("test@mail.ru");
  });
  test("VALID_PASSWORD", () => {
    expect(VALID_PASSWORD).toEqual("TestPassword123_");
  });
});
