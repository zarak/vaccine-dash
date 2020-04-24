import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Activities } from "./Activities";
import reducer from "../reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { initialState } from "../redux";

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store
  };
};

afterEach(cleanup);

it("should initialize to 'cycling'", () => {
  console.log(initialState);
  const { getByText } = renderWithRedux(<Activities />);
  expect(getByTestId("activity")).toHaveTextContent("cycling");
});
