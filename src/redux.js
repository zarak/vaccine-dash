import { createStore } from "redux";
import reducer from "./reducer";

const initialState = {
  selectedIndex: 0
};

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const changeActivityAction = activity => ({
  type: "SET_ACTIVITY",
  payload: activity
});
