import {
  sortByFinishDate,
  sortByNoIdenticalDeals,
  sortNoMoreThanTwoLossDeals,
  sortDealWithProfit,
  customSort,
} from "./helpers";

import { DEFAULT_CURRENT_PAGE } from "./constants";

describe("helpers", () => {
  let initialData = [];
  beforeEach(() => {
    initialData = [
      { finishDate: new Date("2020-07-08 06:30:00"), profit: "+1" },
      { finishDate: new Date("2020-05-08 06:30:00"), profit: "+1" },
      { finishDate: new Date("2018-02-08 06:30:00"), profit: "+1" },
      { finishDate: new Date("2018-04-08 06:30:00"), profit: "+1" },
      { finishDate: new Date("2019-04-08 06:30:00"), profit: "+100" },
      { finishDate: new Date("2019-04-08 06:30:00"), profit: "+100" },
      { finishDate: new Date("2019-04-08 06:30:00"), profit: "+100" },
      { finishDate: new Date("2019-04-08 06:30:00"), profit: "-1" },
      { finishDate: new Date("2014-04-08 06:30:00"), profit: "-1" },
      { finishDate: new Date("2015-04-08 06:30:00"), profit: "-1" },
    ];
  });

  test("sortByFinishDate", () => {
    const result = [
      { finishDate: new Date("2020-07-08T03:30:00.000Z"), profit: "+1" },
      { finishDate: new Date("2020-05-08T03:30:00.000Z"), profit: "+1" },
      { finishDate: new Date("2019-04-08T03:30:00.000Z"), profit: "+100" },
      { finishDate: new Date("2019-04-08T03:30:00.000Z"), profit: "+100" },
      { finishDate: new Date("2019-04-08T03:30:00.000Z"), profit: "+100" },
      { finishDate: new Date("2019-04-08T03:30:00.000Z"), profit: "-1" },
      { finishDate: new Date("2018-04-08T03:30:00.000Z"), profit: "+1" },
      { finishDate: new Date("2018-02-08T04:30:00.000Z"), profit: "+1" },
      { finishDate: new Date("2015-04-08T03:30:00.000Z"), profit: "-1" },
      { finishDate: new Date("2014-04-08T03:30:00.000Z"), profit: "-1" },
    ];

    expect(sortByFinishDate({ data: initialData })).toEqual(result);
  });

  test("sortByNoIdenticalDeals", () => {
    const result = [
      { finishDate: new Date("2020-07-08T03:30:00.000Z"), profit: "+1" },
      { finishDate: new Date("2020-05-08T03:30:00.000Z"), profit: "+1" },
      { finishDate: new Date("2018-02-08T04:30:00.000Z"), profit: "+1" },
      { finishDate: new Date("2018-04-08T03:30:00.000Z"), profit: "+1" },
      { finishDate: new Date("2019-04-08T03:30:00.000Z"), profit: "+100" },
      { finishDate: new Date("2019-04-08T03:30:00.000Z"), profit: "+100" },
      { finishDate: new Date("2019-04-08T03:30:00.000Z"), profit: "-1" },
      { finishDate: new Date("2014-04-08T03:30:00.000Z"), profit: "-1" },
      { finishDate: new Date("2015-04-08T03:30:00.000Z"), profit: "-1" },
    ];
    expect(sortByNoIdenticalDeals({ data: initialData })).toEqual(result);
  });

  test("sortNoMoreThanTwoLossDeals", () => {
    const result = [
      { finishDate: new Date("2020-07-08T03:30:00.000Z"), profit: "+1" },
      { finishDate: new Date("2020-05-08T03:30:00.000Z"), profit: "+1" },
      { finishDate: new Date("2018-02-08T04:30:00.000Z"), profit: "+1" },
      { finishDate: new Date("2018-04-08T03:30:00.000Z"), profit: "+1" },
      { finishDate: new Date("2019-04-08T03:30:00.000Z"), profit: "+100" },
      { finishDate: new Date("2019-04-08T03:30:00.000Z"), profit: "+100" },
      { finishDate: new Date("2019-04-08T03:30:00.000Z"), profit: "+100" },
      { finishDate: new Date("2019-04-08T03:30:00.000Z"), profit: "-1" },
      { finishDate: new Date("2014-04-08T03:30:00.000Z"), profit: "-1" },
    ];

    expect(sortNoMoreThanTwoLossDeals({ data: initialData })).toEqual(result);
  });

  test("sortDealWithProfit", () => {
    const result = [
      { finishDate: new Date("2020-07-08T03:30:00.000Z"), profit: "+1" },
      { finishDate: new Date("2020-05-08T03:30:00.000Z"), profit: "+1" },
      { finishDate: new Date("2018-02-08T04:30:00.000Z"), profit: "+1" },
      { finishDate: new Date("2018-04-08T03:30:00.000Z"), profit: "+1" },
      { finishDate: new Date("2019-04-08T03:30:00.000Z"), profit: "+100" },
      { finishDate: new Date("2019-04-08T03:30:00.000Z"), profit: "+100" },
      { finishDate: new Date("2019-04-08T03:30:00.000Z"), profit: "+100" },
      { finishDate: new Date("2019-04-08T03:30:00.000Z"), profit: "-1" },
      { finishDate: new Date("2014-04-08T03:30:00.000Z"), profit: "-1" },
      { finishDate: new Date("2015-04-08T03:30:00.000Z"), profit: "-1" },
    ];
    expect(sortDealWithProfit({ data: initialData, currentPage: 0 })).toEqual(
      result
    );
  });
  test("customSort", () => {
    const result = [
      { finishDate: new Date("2020-07-08T03:30:00.000Z"), profit: "+1" },
      { finishDate: new Date("2020-05-08T03:30:00.000Z"), profit: "+1" },
      { finishDate: new Date("2019-04-08T03:30:00.000Z"), profit: "+100" },
      { finishDate: new Date("2019-04-08T03:30:00.000Z"), profit: "+100" },
      { finishDate: new Date("2019-04-08T03:30:00.000Z"), profit: "-1" },
      { finishDate: new Date("2018-04-08T03:30:00.000Z"), profit: "+1" },
      { finishDate: new Date("2018-02-08T04:30:00.000Z"), profit: "+1" },
      { finishDate: new Date("2015-04-08T03:30:00.000Z"), profit: "-1" },
    ];

    expect(customSort(initialData, DEFAULT_CURRENT_PAGE)).toEqual(result);
  });
});
