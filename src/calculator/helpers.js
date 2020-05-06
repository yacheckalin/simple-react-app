export const getExchangeRate = ({
  currencyListData: data,
  exchangeOne: first,
  exchangeTwo: second,
}) => {
  if (first === second) return 1;
  const result = data.filter(
    ([one, two, rate]) => one === first && two === second
  );
  return result[0][2];
};
