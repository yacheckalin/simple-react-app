import React from "react";

import styled from "styled-components";

const Style = styled.select`
  max-width: 98px;
  width: 100%;
  border-radius: 10px;
  border: 2px solid #1a237e;
  padding: 10px;
  color: back;
  font-size: 18px;
  margin-right: 30px;
  :focus {
    outline: none;
  }
`;

const Select = React.memo(({ defaultValue, optionsList, onChangeHandler }) => {
  return (
    <Style
      defaultValue={defaultValue}
      onChange={(e) => onChangeHandler(e.target.value)}
    >
      {optionsList.map(([item, prop], index) => (
        <option key={index} value={item} disabled={prop.disabled}>
          {item}
        </option>
      ))}
    </Style>
  );
});

export default Select;
