import { DEFAULT_PAGINATION_LIMIT } from "./constants";
import _ from "lodash";

export const sortByFinishDate = ({ data }) =>
  data.sort(
    ({ finishDate: a }, { finishDate: b }) =>
      new Date(b).getTime() - new Date(a).getTime()
  );

export const sortByNoIdenticalDeals = ({ data }) => {
  let noIdenticalDeals = [];

  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    let counter = 0;

    for (let j = 0; j < data.length; j++) {
      if (_.isEqual(element, data[j])) {
        if (counter < 2) {
          counter++;
        } else {
          delete data[j]; // remove element if it appears over 2 times
        }
      }
    }
  }
  noIdenticalDeals = data.filter((item) => item !== undefined);
  return noIdenticalDeals;
};

export const sortNoMoreThanTwoLossDeals = ({ data }) => {
  let counter = 0;
  const noLossDeals = data
    .map((item) => {
      if (Number.parseFloat(item.profit) < 0) {
        if (counter < 2) {
          counter++;
          return item;
        }
      } else {
        return item;
      }
    })
    .filter((item) => item !== undefined);
  return noLossDeals;
};

export const sortDealWithProfit = ({ data, currentPage }) => {
  const profitDealsIndex = data.findIndex(
    ({ profit }) => Number.parseFloat(profit) > 100
  );

  // if we have deal with over $100 of profit but not in the pagination window span
  if (
    profitDealsIndex >
    DEFAULT_PAGINATION_LIMIT * currentPage + DEFAULT_PAGINATION_LIMIT
  ) {
    //just change the last element
    const leftIndex =
      DEFAULT_PAGINATION_LIMIT * currentPage + DEFAULT_PAGINATION_LIMIT - 1;
    const rightIndex = profitDealsIndex;

    [data[rightIndex], data[leftIndex]] = [data[leftIndex], data[rightIndex]];
  }
  return data;
};

export const customSort = (data = [], currentPage = 0) => {
  // sorted by finishDate
  const sortedInitialData = sortByFinishDate({ data });

  // not more then 2 indentical deals
  let noIdenticalDeals = sortByNoIdenticalDeals({ data: sortedInitialData });

  //not more then 2 loss deals
  const noLossDeals = sortNoMoreThanTwoLossDeals({ data: noIdenticalDeals });

  //at least one or two deals with profit over $100
  const result = sortDealWithProfit({ data: noLossDeals, currentPage });

  return result;
};
