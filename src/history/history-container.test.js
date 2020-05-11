import React from "react";
import { shallow, mount, render } from "enzyme";
import toJSON from "enzyme-to-json";

import HistoryContainer from "./history-container";
import * as HistoryContext from "./history-context-provider";
import { data } from "./data";

describe("<HistoryContainer />", () => {
  test("renders and displays properly", () => {
    const contextValues = {
      data,
    };
    jest
      .spyOn(HistoryContext, "useHistoryContext")
      .mockImplementation(() => contextValues);
    const wrapper = shallow(<HistoryContainer />);
    expect(toJSON(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
});
