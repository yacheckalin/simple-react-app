/**
 * export const CURRENCY_TAB_NAME = "currency";
export const CALCULATOR_TAB_NAME = "calculator";
export const HISTORY_TAB_NAME = "history";
export const CURRENCY_ACTIVE = [1, 0, 0];
export const CALCULATOR_ACTIVE = [0, 1, 0];
export const HISTORY_ACTIVE = [0, 0, 1];
 */

import {
  CURRENCY_TAB_NAME,
  CALCULATOR_TAB_NAME,
  HISTORY_TAB_NAME,
  CURRENCY_ACTIVE,
  CALCULATOR_ACTIVE,
  HISTORY_ACTIVE,
} from "./constants";

describe("component constants", () => {
  test("HISTORY_ACTIVE", () => {
    expect(HISTORY_ACTIVE).toEqual([0, 0, 1]);
  });
  test("CALCULATOR_ACTIVE", () => {
    expect(CALCULATOR_ACTIVE).toEqual([0, 1, 0]);
  });
  test("CURRENCY_ACTIVE", () => {
    expect(CURRENCY_ACTIVE).toEqual([1, 0, 0]);
  });
  test("HISTORY_TAB_NAME", () => {
    expect(HISTORY_TAB_NAME).toEqual("history");
  });
  test("CALCULATOR_TAB_NAME", () => {
    expect(CALCULATOR_TAB_NAME).toEqual("calculator");
  });
  test("CURRENCY_TAB_NAME", () => {
    expect(CURRENCY_TAB_NAME).toEqual("currency");
  });
});
