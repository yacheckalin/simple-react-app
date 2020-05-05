export const isEmailValid = (email) => {
  const el = document.createElement("input");
  el.type = "email";
  el.setAttribute("value", email);
  return el.validity.valid;
};

export const isPasswordValid = (pass) => {
  if ([...pass].length < 7) return false;
  if (pass.match(/\d/is)) return false;
  if (!pass.match(/([a-zA-Z_])+?/is)) return false;
  return true;
};
