import React from "react";
import Moment from "react-moment";

import styled from "styled-components";

import { useCurrencyContext } from "./currency-context-provider";
import { BsStar, BsStarFill } from "react-icons/bs";
import { SHORT_DATE_FORMAT } from "./constants";

import { useTranslation } from "react-i18next";

const Table = styled.table`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-spacing: 0;
  background-color: white;
  max-width: 750px;
  overflow: hidden;
  border-top-right-radius: 10px;
  width: 100%;

  thead {
    background-color: #1a237e;
  }
  th,
  td {
    padding: 20px 0;
    text-align: left;
  }
  th {
    color: white;
  }
  td {
    border-bottom: 1px solid #e5e5e5;
    width: 200px;
  }
  td:first-child,
  td:last-child {
    border: 0;
  }
  td:first-child {
    width: 60px;
    color: #1a237e;
    text-align: right;
    padding-right: 10px;
  }
  td:last-child {
    width: 40px;
  }
  tr:first-child td {
    padding-top: 40px;
  }
  tr:last-child td {
    padding-bottom: 40px;
    border: 0;
  }
`;

const CurrencyContainer = React.memo(() => {
  const { data, setFavorite } = useCurrencyContext();
  const { t } = useTranslation("common");

  return (
    <Table>
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>{t("currency.title")}</th>
          <th>{t("currency.quotation")}</th>
          <th>{t("currency.date")}</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ favorite, asset, quote, date }, index) => (
          <tr key={index} onClick={(e) => setFavorite(index)}>
            <td>{!favorite ? <BsStar /> : <BsStarFill />}</td>
            <td>{asset}</td>
            <td>{quote}</td>
            <td>
              <Moment format={SHORT_DATE_FORMAT}>{date}</Moment>
            </td>
            <td>&nbsp;</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
});

export default CurrencyContainer;
