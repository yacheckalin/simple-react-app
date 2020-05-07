export const getExchangeRate = ({
  currencyListData: data,
  exchangeOne: first,
  exchangeTwo: second,
}) => {
  if (first[0] === second[0]) return 1;
  const result = data.filter(
    ([one, two]) => one === first[0] && two === second[0]
  );
  if (!result.length) return null;
  return result[0][2];
};
