import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Pagination from "./history-paginator";
import * as HistoryContext from "./history-context-provider";

describe("<Pagination />", () => {
  test("renders and displays properly", () => {
    const contextValues = {
      currentPage: 0,
      totalPages: 10,
      forward: jest.fn(),
      backward: jest.fn(),
    };
    jest
      .spyOn(HistoryContext, "useHistoryContext")
      .mockImplementation(() => contextValues);

    const wrapper = shallow(<Pagination />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
