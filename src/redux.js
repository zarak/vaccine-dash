import { createStore } from "redux";
import reducer from "./reducer";

export const initialState = {
  selectedIndex: 0
};

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const changeActivityAction = selectedIndex => ({
  type: "SET_ACTIVITY",
  payload: selectedIndex
});
