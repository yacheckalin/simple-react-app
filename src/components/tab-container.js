import React, { useState, Suspense, useEffect } from "react";
import styled from "styled-components";

import CurrencyContainer from "../currency";
import CurrencyContextProvider from "../currency/currency-context-provider";

import CalculatorContainer from "../calculator";
import HistoryContainer from "../history";
import HistoryContextProvider from "../history/history-context-provider";

import { useTranslation } from "react-i18next";
import { useLocalStorage, writeStorage } from "@rehooks/local-storage";

import {
  CURRENCY_TAB_NAME,
  CALCULATOR_TAB_NAME,
  HISTORY_TAB_NAME,
  CURRENCY_ACTIVE,
  CALCULATOR_ACTIVE,
  HISTORY_ACTIVE,
} from "./constants";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;

  .stretcher {
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    margin-top: 100px;

    .tab-wrapper {
      display: flex;
      align-items: center;
      justify-content: left;
      flex-direction: row;
      padding: 0;
      margin: 0;
    }
  }
`;

const Tab = styled.a`
  padding: 12px 50px;
  margin: 0;
  border: 2px solid #1a237e;
  border-right: none;
  border-bottom: none;

  color: ${(props) => (props.active ? "white" : "#1a237e")};
  background: ${(props) => (!props.active ? "white" : "#1a237e")};

  :last-child {
    border-top-right-radius: 20px;
    border-right: 2px solid #1a237e;
  }
  :first-child {
    border-top-left-radius: 20px;
  }
  :hover {
    cursor: pointer;
  }
`;

const TabsContainer = () => {
  const [currentTabName] = useLocalStorage("currentTabName");
  const [activeTabHeader] = useLocalStorage("activeTabHeader");
  const [tabName, setTabName] = useState(
    currentTabName === undefined ? CURRENCY_TAB_NAME : currentTabName
  );
  const [active, setActive] = useState(
    activeTabHeader === undefined ? CURRENCY_ACTIVE : activeTabHeader
  );

  const { t } = useTranslation("common");

  useEffect(() => {
    writeStorage("currentTabName", tabName);
    writeStorage("activeTabHeader", active);
  }, [tabName, active]);

  return (
    <Suspense fallback="loading ...">
      <Container>
        <div className="stretcher">
          <div className="tab-wrapper">
            <Tab
              onClick={(e) => {
                setTabName(CURRENCY_TAB_NAME);
                setActive(CURRENCY_ACTIVE);
              }}
              active={active[0]}
            >
              {t("tabs.currency")}
            </Tab>
            <Tab
              onClick={(e) => {
                setTabName(CALCULATOR_TAB_NAME);
                setActive(CALCULATOR_ACTIVE);
              }}
              active={active[1]}
            >
              {t("tabs.calculator")}
            </Tab>
            <Tab
              onClick={(e) => {
                setTabName(HISTORY_TAB_NAME);
                setActive(HISTORY_ACTIVE);
              }}
              active={active[2]}
            >
              {t("tabs.history")}
            </Tab>
          </div>

          <CurrencyContextProvider>
            {tabName === CURRENCY_TAB_NAME && <CurrencyContainer />}
            {tabName === CALCULATOR_TAB_NAME && <CalculatorContainer />}
            {tabName === HISTORY_TAB_NAME && (
              <HistoryContextProvider>
                <HistoryContainer />
              </HistoryContextProvider>
            )}
          </CurrencyContextProvider>
        </div>
      </Container>
    </Suspense>
  );
};

export default TabsContainer;
