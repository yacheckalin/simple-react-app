import React, { useState } from "react";
import styled from "styled-components";

import CurrencyContainer from "./currency";
import CurrencyContextProvider from "./currency/currency-context-provider";

import CalculatorContainer from "./calculator";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #e1e1e1;
  justify-content: center;

  .stretcher {
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: center;

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
`;

const TabsContainer = () => {
  const [tabName, setTabName] = useState("currency");
  const [active, setActive] = useState([true, false, false]);

  return (
    <Container>
      <div className="stretcher">
        <div className="tab-wrapper">
          <Tab
            onClick={(e) => {
              setTabName("currency");
              setActive([1, 0, 0]);
            }}
            active={active[0]}
          >
            Курсы валют
          </Tab>
          <Tab
            onClick={(e) => {
              setTabName("calculator");
              setActive([0, 1, 0]);
            }}
            active={active[1]}
          >
            Калькулятор
          </Tab>
          <Tab
            onClick={(e) => {
              setTabName("history");
              setActive([0, 0, 1]);
            }}
            active={active[2]}
          >
            История
          </Tab>
        </div>

        {tabName === "currency" && (
          <CurrencyContextProvider>
            <CurrencyContainer />
          </CurrencyContextProvider>
        )}

        {tabName === "calculator" && (
          <CurrencyContextProvider>
            <CalculatorContainer />
          </CurrencyContextProvider>
        )}
      </div>
    </Container>
  );
};

export default TabsContainer;
