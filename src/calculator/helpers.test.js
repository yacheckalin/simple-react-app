import { getExchangeRate } from "./helpers";

describe("helpers", () => {
  const props = {
    currencyListData: [
      ["EUR", "USD", 1.12],
      ["USD", "EUR", 0.8929],
      ["USD", "JPY", 107.95],
      ["JPY", "USD", 0.0093],
      ["GBP", "USD", 1.238],
      ["USD", "GBP", 0.8078],
      ["AUD", "USD", 0.7048],
      ["USD", "AUD", 1.4188],
      ["USD", "CHF", 0.9888],
      ["CHF", "USD", 1.0113],
      ["USD", "CAD", 1.31],
      ["CAD", "USD", 0.7634],
    ],
    exchangeOne: ["USD", { disabled: false }],
    exchangeTwo: ["EUR", { disabled: false }],
  };

  test("getExchangeRate return 1", () => {
    expect(
      getExchangeRate({
        ...props,
        exchangeOne: ["USD", { disabled: false }],
        exchangeTwo: ["USD", { disabled: false }],
      })
    ).toBe(1);
  });
  test("getExchangeRate return 1.12", () => {
    expect(
      getExchangeRate({
        ...props,
        exchangeOne: ["EUR", { disabled: false }],
        exchangeTwo: ["USD", { disabled: false }],
      })
    ).toBe(1.12);
  });
});
