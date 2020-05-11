import { VALID_LOGIN, VALID_PASSWORD } from "./constants";

export const isEmailValid = (email) => {
  const el = document.createElement("input");
  el.type = "email";
  el.setAttribute("value", email);
  return el.validity.valid;
};

export const isPasswordValid = (pass) => {
  if (!pass.match(/([0-9a-zA-Z_]{7,})+?/is)) return false;
  return true;
};

export const auth = ({ email, password }) =>
  email === VALID_LOGIN && password === VALID_PASSWORD;
