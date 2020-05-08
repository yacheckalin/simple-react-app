import React, { useState } from "react";
import { isEmailValid, isPasswordValid } from "./helpers";
import { useAuthContext } from "./auth-context-provider";
import { IoIosArrowRoundForward } from "react-icons/io";

import styled from "styled-components";

const FormContainer = styled.div`
  margin: 0 auto;
  width: 480px;
  font-family: "Open Sans", sans-serif;
`;

const FormHeader = styled.div`
  height: 60px;
  background-color: #1a237e;
  color: #f0f0f6;
  text-align: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  span {
    display: block;
    box-sizing: border-box;
    font-size: 20pt;
    font-family: "Open Sans", sans-serif;
    padding: 15px;
  }
`;

const FormBody = styled.div`
  height: 250px;
  background-color: #fff;
  position: relative;
  padding-top: 50px;
`;

const FormRow = styled.div`
  position: sticky;
  display: flex;
  height: 100px;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: content-box;

  p:last-child {
    color: #d32f2f;
  }
  .form-input {
    display: block;
    border: 2px solid #1a237e;
    border-radius: 6px;
    height: 40px;
    padding: 10px;
    width: 245px;
    font-size: 18px;
    color: #a0a0a0;
    :focus {
      outline: 0;
    }
  }
  .error {
    border-color: #d32f2f;
  }
`;

const FormFooter = styled.div`
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #fff;
  height: 136px;
  padding-top: 30px;

  button {
    width: 165px;
    height: 45px;
    text-align: center;
    color: #f0f0f6;
    border-radius: 20px;
    background-color: #1a237e;

    font-size: 18px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    box-sizing: content-box;
    align-items: center;

    span {
      :first-child {
        text-align: center;
      }
      :last-child {
        margin-top: 3px;
      }
    }
  }
  p {
    margin: 0px;
    display: flex;
    justify-content: center;
    padding: 20px;
    color: #d32f2f;
    text-align: center;
  }
`;

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const { login, loginError, resetLoginError } = useAuthContext();

  const handleEmail = (e) => {
    const { value } = e.target;

    setEmail(value);
    setEmailValid(isEmailValid(value));
    resetLoginError();
  };

  const handlePassword = (e) => {
    const { value } = e.target;

    setPassword(value);
    setPasswordValid(isPasswordValid(value));
    resetLoginError();
  };

  const handleLogin = (e) => {
    login({ email, password });
    e.preventDefault();
  };
  return (
    <FormContainer>
      <FormHeader>
        <span>Вход в личный кабинет</span>
      </FormHeader>

      <FormBody>
        <FormRow>
          <FormItem>
            <p> Логин </p>
            <input
              className={`form-input ${!emailValid && `error`}`}
              type="text"
              value={email}
              onChange={(e) => handleEmail(e)}
              id="email"
            />
            <p id="email-error">{!emailValid && "Неверный email"}&nbsp;</p>
          </FormItem>
        </FormRow>

        <FormRow>
          <FormItem>
            <p> Пароль </p>
            <input
              className={`form-input ${!passwordValid && `error`}`}
              type="password"
              value={password}
              onChange={(e) => handlePassword(e)}
              id="password"
            />
            <p id="password-error">
              {!passwordValid && "Неверный пароль"}&nbsp;
            </p>
          </FormItem>
        </FormRow>
      </FormBody>

      <FormFooter>
        <button onClick={(e) => handleLogin(e)}>
          <span>Вход</span>
          <span>
            <IoIosArrowRoundForward size={`2em`} color={`white`} />
          </span>
        </button>
        <p id="form-error">{loginError}</p>
      </FormFooter>
    </FormContainer>
  );
};

export default AuthForm;
