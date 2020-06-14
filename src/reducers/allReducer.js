import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import emailReducer from "./email";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  email: emailReducer,
});

export default allReducers;
