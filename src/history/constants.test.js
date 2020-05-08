import {
  INITIAL_PAGINATION_PAGE,
  DEFAULT_PAGINATION_LIMIT,
  DEFAULT_TOTAL_PAGES,
  INITIAL_PAGINATION_LIST,
} from "./constants";

describe("constants", () => {
  test("DEFAULT_PAGINATION_LIMIT", () => {
    expect(DEFAULT_PAGINATION_LIMIT).toBe(10);
  });
  test("INITIAL_PAGINATION_PAGE", () => {
    expect(INITIAL_PAGINATION_PAGE).toBe(0);
  });
  test("DEFAULT_TOTAL_PAGES", () => {
    expect(DEFAULT_TOTAL_PAGES).toBe(0);
  });
  test("INITIAL_PAGINATION_LIST", () => {
    expect(INITIAL_PAGINATION_LIST).toEqual([]);
  });
});
