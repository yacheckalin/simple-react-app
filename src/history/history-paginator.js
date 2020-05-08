import React from "react";
import styled from "styled-components";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

import { useHistoryContext } from "./history-context-provider";

const Style = styled.div`
  display: flex;
  margin: 10px;
  padding: 10px;
  justify-content: center;
  box-sizing: border-box;
  div {
    flex-basis: 40px;
    :nth-child(2) {
      padding-top: 5px;
    }
  }
  .arrow-backward,
  .arrow-forward {
    color: #1a237e;
    cursor: pointer;
  }
`;

const Pagination = () => {
  const { currentPage, totalPages, forward, backward } = useHistoryContext();
  return (
    <Style className="pagination-container">
      <div onClick={backward} className="arrow-backward">
        {currentPage > 0 && (
          <IoIosArrowRoundBack size={`2em`} color={`#1a237e`} />
        )}
      </div>
      <div className="numbers">
        {currentPage + 1} / {totalPages}
      </div>
      <div className="arrow-forward" onClick={forward}>
        {currentPage + 1 < totalPages && (
          <IoIosArrowRoundForward size={`2em`} color={`#1a237e`} />
        )}
      </div>
    </Style>
  );
};

export default Pagination;
