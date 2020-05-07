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
let currencyListSetData = new Set();

const CurrencyContextProvider = ({ children }) => {
  const [data, setData] = useState(currencyData);
  const [currencyList, setCurrencyList] = useState([]);
  const [currencyListData, setCurrencyListData] = useState([]);
  const [currencyListOne, setCurrencyListOne] = useState([]);
  const [currencyListTwo, setCurrencyListTwo] = useState([]);
  const [exchangeSummary, setExchangeSummary] = useState(null);
  const [exchangeAmount, setExchangeAmount] = useState(0);
  const [exchangeOne, setExchangeOne] = useState(["USD", { disabled: false }]);
  const [exchangeTwo, setExchangeTwo] = useState(["USD", { disabled: false }]);

  useEffect(() => {
    currencyData.forEach(({ asset, quote }) => {
      const [first, second] = asset.split("/");

      currencyListSetData.add([first, second, parseFloat(quote)]);
      currencyListSetData.add([
        second,
        first,
        parseFloat((1 / quote).toFixed(4)),
      ]);
      currencyListSet.add(first);
      currencyListSet.add(second);
    });
    setCurrencyList([...currencyListSet.values()]);
    setCurrencyListData([...currencyListSetData.values()]);

    setCurrencyListOne(
      [...currencyListSet.values()].map((item) => [item, { disabled: false }])
    );
    setCurrencyListTwo(
      [...currencyListSet.values()].map((item) => [item, { disabled: false }])
    );
  }, []);

  const handleFavoriteChange = (index) => {
    if (currencyData[index]) {
      currencyData[index].favorite = !currencyData[index].favorite;
      setData([...currencyData.sort((a, b) => b.favorite - a.favorite)]);
    }
  };

  const handleExchangeCalculation = () => {
    const rate = getExchangeRate({
      currencyListData,
      exchangeOne,
      exchangeTwo,
    });

    setExchangeSummary((rate * exchangeAmount).toFixed(2));
  };

  const validateExchangeOne = (value) => {
    //exclude all items from second currency without a rate pair
    const filteredCurrencyTypeList = currencyListData.filter(
      ([one, ,]) => one === value
    );

    const secondCurrency = filteredCurrencyTypeList.map(([, item]) => item);
    //change the first element in the second currency
    const listTwo = currencyListTwo.map((item) => {
      const [el, prop] = item;
      if (secondCurrency.includes(el) || el === value) {
        prop.disabled = false;
      } else {
        prop.disabled = true;
      }

      return item;
    });

    setExchangeOne([value, { disabled: false }]);
    setExchangeTwo(listTwo[listTwo.findIndex(([, prop]) => !prop.disabled)]);

    setCurrencyListTwo([...listTwo]);
  };

  const validateExchangeTwo = (value) =>
    setExchangeTwo([value, { disabled: false }]);

  return (
    <CurrencyContext.Provider
      value={{
        data,
        setFavorite: handleFavoriteChange,
        currencyListOne,
        currencyListTwo,
        currencyList,
        currencyListData,
        calculateExchange: handleExchangeCalculation,
        exchangeSummary,
        exchangeAmount,
        setExchangeAmount,
        setExchangeOne,
        setExchangeTwo,
        exchangeTwo,
        exchangeOne,
        validateExchangeOne,
        validateExchangeTwo,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContextProvider;
