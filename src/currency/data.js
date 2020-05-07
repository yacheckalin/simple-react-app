export const currencyData = [
  {
    favorite: false,
    asset: "EUR/USD",
    quote: "1.12",
    date: new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(Date.now()),
  },
  {
    favorite: false,
    asset: "USD/JPY",
    quote: "107.95",
    date: new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(Date.now()),
  },
  {
    favorite: false,
    asset: "GBP/USD",
    quote: "1.238",
    date: new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(Date.now()),
  },
  {
    favorite: false,
    asset: "AUD/USD",
    quote: "0.7048",
    date: new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(Date.now()),
  },
  {
    favorite: false,
    asset: "USD/CHF",
    quote: "0.9888",
    date: new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(Date.now()),
  },
  {
    favorite: false,
    asset: "USD/CAD",
    quote: "1.31",
    date: new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(Date.now()),
  },
];
