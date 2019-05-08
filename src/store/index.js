import { createStore } from "redux";
import rootReducer from "../reducers/index";
import { REDUX_DEVTOOLS } from "../constants/action-types";

const store = createStore(rootReducer, REDUX_DEVTOOLS);
export default store;
