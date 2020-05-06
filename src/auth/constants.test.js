import { API_URL } from "./constants";

describe("constants", () => {
  test("API_URL", () => {
    expect(API_URL).toBe("http://35.195.25.70/api.php");
  });
});
