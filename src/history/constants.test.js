import { INITIAL_PAGINATION_PAGE, DEFAULT_PAGINATION_LIMIT } from "./constants";

describe("constants", () => {
  test("DEFAULT_PAGINATION_LIMIT", () => {
    expect(DEFAULT_PAGINATION_LIMIT).toBe(10);
  });
  test("INITIAL_PAGINATION_PAGE", () => {
    expect(INITIAL_PAGINATION_PAGE).toBe(0);
  });
});
