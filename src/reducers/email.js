const emailReducer = (state = "", action) => {
  switch (action.type) {
    case "REGISTER":
      return action.payload;
    default:
      return "";
  }
};

export default emailReducer;
