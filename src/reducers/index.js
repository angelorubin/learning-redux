import { combineReducers } from "redux";

import { authentication } from "./auth";
import { registration } from "./registration";
import { users } from "./users";
import { alert } from "./alert";

export const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert
});
