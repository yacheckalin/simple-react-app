import React from "react";

import styled from "styled-components";
import Moment from "react-moment";

import { useHistoryContext } from "./history-context-provider";
import Pagination from "./history-paginator";

import { useTranslation } from "react-i18next";

const Table = styled.table`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-spacing: 0;
  background-color: white;
  overflow: hidden;
  border-top-right-radius: 10px;
  width: 100%;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  margin-bottom: 70px;

  thead {
    background-color: #1a237e;
  }
  th,
  td {
    padding: 20px 0;
    text-align: center;
    width: 300px;
    :nth-child(2) {
      text-align: left;
    }
  }
  th {
    color: white;
  }
  td {
    border-bottom: 1px solid #e5e5e5;
    padding: 20px 10px;
    :first-child {
      padding-left: 10px;
      border: 0;
    }
    :last-child {
      padding-right: 10px;
      border: 0;
    }
    :nth-child(2) {
      padding-left: 0;
    }
  }

  tr:last-child td {
    border: 0;
  }
`;

const HistoryContainer = () => {
  const { data } = useHistoryContext();
  const { t } = useTranslation("common");

  return (
    <Table>
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>{t("history.title.asset")}</th>
          <th>{t("history.title.start")}</th>
          <th>{t("history.title.quotation")}</th>
          <th>{t("history.title.end")}</th>
          <th>{t("history.title.quotation")}</th>
          <th>{t("history.title.profit")}</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {data.map(
          (
            { startDate, asset, startQuote, finishDate, finishQuote, profit },
            index
          ) => (
            <tr key={index}>
              <td>&nbsp;</td>
              <td>{asset}</td>
              <td>
                <Moment format="YYYY-MM-DD HH:mm:ss">{startDate}</Moment>
              </td>
              <td>{startQuote}</td>
              <td>
                <Moment format="YYYY-MM-DD HH:mm:ss">{finishDate}</Moment>
              </td>
              <td>{finishQuote}</td>
              <td>{profit}</td>
              <td>&nbsp;</td>
            </tr>
          )
        )}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={8}>
            <Pagination />
          </td>
        </tr>
      </tfoot>
    </Table>
  );
};

export default HistoryContainer;
