import React, { useContext, useState, useEffect } from "react";

import { getExchangeRate } from "../calculator/helpers";

export const CurrencyContext = React.createContext({ currencyList: [] });
export const useCurrencyContext = () => useContext(CurrencyContext);

let currencyData = [
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
let currencyListSet = new Set();

const CurrencyContextProvider = ({ children }) => {
  const [data, setData] = useState(currencyData);
  const [currencyList, setCurrencyList] = useState([]);
  const [exchangeSummary, setExchangeSummary] = useState(null);

  useEffect(() => {
    currencyData.forEach(({ asset }) => {
      const [first, second] = asset.split("/");
      console.log(first, second);
      currencyListSet.add(first);
      currencyListSet.add(second);
    });
    setCurrencyList([...currencyListSet.values()]);
  }, []);

  const handleFavoriteChange = (index) => {
    if (currencyData[index]) {
      currencyData[index].favorite = !currencyData[index].favorite;
      setData([...currencyData.sort((a, b) => b.favorite - a.favorite)]);
    }
  };

  const handleExchangeCalculation = ({ first, second, sum }) => {
    const rate = getExchangeRate({ data, first, second });
    setExchangeSummary(Number.parseFloat(rate * sum).toPrecision(4));
  };

  return (
    <CurrencyContext.Provider
      value={{
        data,
        setFavorite: handleFavoriteChange,
        currencyList,
        calculateExchange: handleExchangeCalculation,
        exchangeSummary,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContextProvider;
