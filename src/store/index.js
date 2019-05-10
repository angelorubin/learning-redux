import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { alert } from "../reducers/alert";

const loggerMiddleware = createLogger();

export const store = createStore(
  alert,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);
