import React from "react";
import Select from "react-select";

import styled from "styled-components";

const Style = styled.div`
  position: relative;
  display: inline-flex;

  select {
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
  }
`;

const FormSelect = React.memo(
  ({ defaultValue, optionsList, onChangeHandler }) => {
    let options = [];
    optionsList.map(([item, prop]) =>
      options.push({ value: item, label: item })
    );
    const customStyles = {
      control: (base) => ({
        ...base,
        border: 0,
        boxShadow: 0,
        "&:focus": {
          outline: 0,
        },
      }),
      option: (provided, state) => ({
        ...provided,
        border: "none",
      }),
      container: (provided, state) => ({
        ...provided,
        border: "2px solid #1a237e",
        borderRadius: 15,
        padding: 5,
        marginRight: 20,
      }),
      indicatorSeparator: (provided, state) => ({
        ...provided,
        display: "none",
      }),
      placeholder: (provided, state) => ({
        ...provided,
      }),
      menu: (provided, state) => ({
        ...provided,
        width: "100%",
        padding: 0,
        marginLeft: -5,
        marginTop: -2,
        marginRight: 0,
        marginButtom: 0,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        border: "2px solid #1a237e",
        boxShadow: 0,
        zIndex: 1000,
      }),
    };
    return (
      <Style
        defaultValue={defaultValue}
        onChange={(e) => onChangeHandler(e.target.value)}
      >
        <Select
          styles={customStyles}
          defaultValue={defaultValue}
          options={options}
          placeholder={defaultValue}
        >
          {/* {optionsList.map(([item, prop], index) => (
          <option key={index} value={item} disabled={prop.disabled}>
            {item}
          </option>
        ))} */}
        </Select>
      </Style>
    );
  }
);

export default FormSelect;
