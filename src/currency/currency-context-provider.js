import React, { useContext, useState, useEffect } from "react";

import { getExchangeRate } from "../calculator/helpers";
import { currencyData } from "./data";

import {
  DEFAULT_EXCHANGE_TWO_VALUE,
  DEFAULT_EXCHANGE_ONE_VALUE,
  DEFAULT_EXCHANGE_AMOUNT,
  DEFAULT_EXCHANGE_SUMMARY,
  DEFAULT_CURRENCY_LIST_ONE,
  DEFAULT_CURRENCY_LIST_TWO,
  DEFAULT_CURRENCY_LIST,
  DEFAULT_CURRENCY_LIST_DATA,
} from "./constants";

export const CurrencyContext = React.createContext({ currencyList: [] });
export const useCurrencyContext = () => useContext(CurrencyContext);

let currencyListSet = new Set();
let currencyListSetData = new Set();

const CurrencyContextProvider = ({ children }) => {
  const [data, setData] = useState(currencyData);
  const [currencyList, setCurrencyList] = useState(DEFAULT_CURRENCY_LIST);
  const [currencyListData, setCurrencyListData] = useState(
    DEFAULT_CURRENCY_LIST_DATA
  );
  const [currencyListOne, setCurrencyListOne] = useState(
    DEFAULT_CURRENCY_LIST_ONE
  );
  const [currencyListTwo, setCurrencyListTwo] = useState(
    DEFAULT_CURRENCY_LIST_TWO
  );
  const [exchangeSummary, setExchangeSummary] = useState(
    DEFAULT_EXCHANGE_SUMMARY
  );
  const [exchangeAmount, setExchangeAmount] = useState(DEFAULT_EXCHANGE_AMOUNT);
  const [exchangeOne, setExchangeOne] = useState(DEFAULT_EXCHANGE_ONE_VALUE);
  const [exchangeTwo, setExchangeTwo] = useState(DEFAULT_EXCHANGE_TWO_VALUE);

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
