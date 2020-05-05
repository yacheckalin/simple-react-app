import React from "react";

const AuthForm = () => {
  return (
    <div className="form-container">
      <div className="form-header">
        <span>Вход в личный кабинет</span>
      </div>

      <div className="form-content">
        <div className="form-row">
          <div className="form-item">
            <p> Логин </p>
            <input className="form-input error" type="text" />
            <p>&nbsp;</p>
          </div>
        </div>

        <div className="form-row">
          <div className="form-item">
            <p> Пароль </p>
            <input className="form-input" type="text" />
            <p>Неверный пароль</p>
          </div>
        </div>
      </div>

      <div className="form-footer">
        <button>
          Вход <span>&#8594;</span>
        </button>
        <p>Неверный логин или пароль</p>
      </div>
    </div>
  );
};

export default AuthForm;
