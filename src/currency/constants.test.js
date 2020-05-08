import {
  DEFAULT_EXCHANGE_TWO_VALUE,
  DEFAULT_EXCHANGE_ONE_VALUE,
  DEFAULT_EXCHANGE_AMOUNT,
  DEFAULT_EXCHANGE_SUMMARY,
  DEFAULT_CURRENCY_LIST_ONE,
  DEFAULT_CURRENCY_LIST_TWO,
  DEFAULT_CURRENCY_LIST,
  DEFAULT_CURRENCY_LIST_DATA,
  SHORT_DATE_FORMAT,
} from "./constants";

describe("constants", () => {
  test("DEFAULT_EXCHANGE_TWO_VALUE", () => {
    expect(DEFAULT_EXCHANGE_TWO_VALUE).toEqual(["USD", { disabled: false }]);
  });
  test("DEFAULT_EXCHANGE_ONE_VALUE", () => {
    expect(DEFAULT_EXCHANGE_ONE_VALUE).toEqual(["USD", { disabled: false }]);
  });
  test("DEFAULT_EXCHANGE_AMOUNT", () => {
    expect(DEFAULT_EXCHANGE_AMOUNT).toBe(0);
  });
  test("DEFAULT_EXCHANGE_SUMMARY", () => {
    expect(DEFAULT_EXCHANGE_SUMMARY).toBe(null);
  });
  test("DEFAULT_CURRENCY_LIST_ONE", () => {
    expect(DEFAULT_CURRENCY_LIST_ONE).toEqual([]);
  });
  test("DEFAULT_CURRENCY_LIST_TWO", () => {
    expect(DEFAULT_CURRENCY_LIST_TWO).toEqual([]);
  });
  test("DEFAULT_CURRENCY_LIST", () => {
    expect(DEFAULT_CURRENCY_LIST).toEqual([]);
  });
  test("DEFAULT_CURRENCY_LIST_DATA", () => {
    expect(DEFAULT_CURRENCY_LIST_DATA).toEqual([]);
  });
  test("SHORT_DATE_FORMAT", () => {
    expect(SHORT_DATE_FORMAT).toEqual("YYYY-MM-DD");
  });
});
