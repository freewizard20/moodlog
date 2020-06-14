export const register = (nr) => {
  return {
    type: "REGISTER",
    payload: nr,
  };
};

export const empty = () => {
  return {
    type: "EMPTY",
  };
};
