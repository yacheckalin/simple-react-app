import React from "react";

import styled from "styled-components";

import { useTranslation } from "react-i18next";

const Style = styled.div`
  flex: 1;
  text-align: left;
  margin-left: 50px;

  button {
    border: 0;
    background: transparent;
    font-size: 1em;
    color: #1a237e;
    cursor: pointer;
    outline: none;
  }
`;

const Language = () => {
  const { i18n } = useTranslation("common");

  return (
    <Style>
      <button onClick={(e) => i18n.changeLanguage("en")}>EN</button>|
      <button onClick={(e) => i18n.changeLanguage("ru")}>RU</button>
    </Style>
  );
};

export default Language;
