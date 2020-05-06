export const isEmailValid = (email) => {
  const el = document.createElement("input");
  el.type = "email";
  el.setAttribute("value", email);
  return el.validity.valid;
};

export const isPasswordValid = (pass) => {
  if (pass.match(/\d/is)) return false;
  if (!pass.match(/([a-zA-Z_]{7,})+?/is)) return false;
  return true;
};
