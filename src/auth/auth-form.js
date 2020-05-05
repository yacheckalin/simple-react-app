import React, { useState } from "react";
import { isEmailValid, isPasswordValid } from "./helpers";
import { useAuthContext } from "./auth-context-provider";

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
    <div className="form-container">
      <div className="form-header">
        <span>Вход в личный кабинет</span>
      </div>

      <div className="form-content">
        <div className="form-row">
          <div className="form-item">
            <p> Логин </p>
            <input
              className={`form-input ${!emailValid && `error`}`}
              type="text"
              value={email}
              onChange={(e) => handleEmail(e)}
            />
            <p>{!emailValid && "Неверный email"}&nbsp;</p>
          </div>
        </div>

        <div className="form-row">
          <div className="form-item">
            <p> Пароль </p>
            <input
              className="form-input"
              type="password"
              value={password}
              onChange={(e) => handlePassword(e)}
            />
            <p>{!passwordValid && "Неверный пароль"}&nbsp;</p>
          </div>
        </div>
      </div>

      <div className="form-footer">
        <button onClick={(e) => handleLogin(e)}>
          Вход <span>&#8594;</span>
        </button>
        <p>{loginError && "Неверный логин или пароль"}</p>
      </div>
    </div>
  );
};

export default AuthForm;
