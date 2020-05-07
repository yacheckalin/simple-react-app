import { DEFAULT_PAGINATION_LIMIT } from "./constants";
import _ from "lodash";

export const customSort = (data = [], currentPage = 0) => {
  // sorted by finishDate
  const sortedInitialData = data.sort(
    ({ finishDate: a }, { finishDate: b }) =>
      new Date(b).getTime() - new Date(a).getTime()
  );

  // not more then 2 indentical deals
  let noIdenticalDeals = [];

  for (let i = 0; i < sortedInitialData.length; i++) {
    const element = sortedInitialData[i];
    let counter = 0;

    for (let j = 0; j < sortedInitialData.length; j++) {
      if (_.isEqual(element, sortedInitialData[j])) {
        if (counter < 2) {
          counter++;
        } else {
          delete sortedInitialData[j]; // remove element if it appears over 2 times
        }
      }
    }
  }
  noIdenticalDeals = sortedInitialData.filter((item) => item !== undefined);

  //not more then 2 loss deals
  let counter = 0;
  const noLossDeals = noIdenticalDeals
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

  //at least one or two deals with profit over $100
  const profitDealsIndex = noLossDeals.findIndex(
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

    [noLossDeals[rightIndex], noLossDeals[leftIndex]] = [
      noLossDeals[leftIndex],
      noLossDeals[rightIndex],
    ];
  }

  return noLossDeals;
};
