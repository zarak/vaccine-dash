import React from "react";
import { render, cleanup } from "../test/utils";
import { Activities } from "./Activities";
import reducer from "../reducer";
import { createStore } from "redux";
import { initialState } from "../redux";

afterEach(cleanup);

it("should initialize the active button to 'cycling'", () => {
  const { getByTestId } = render(<Activities />, {
    store: createStore(reducer, initialState)
  });
  expect(getByTestId("0")).toHaveTextContent("cycling");
});

it("should render the fourth button as 'walking'", () => {
  const { getByTestId } = render(<Activities />, {
    store: createStore(reducer, initialState)
  });
  expect(getByTestId("3")).toHaveTextContent("walking");
});
