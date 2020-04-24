import React from "react";
import { render, cleanup } from "../test/utils";
import { Activities } from "./Activities";
import reducer from "../reducer";
import { createStore } from "redux";
import { initialState } from "../redux";

afterEach(cleanup);

it("should initialize to 'cycling'", () => {
  const { getByTestId } = render(<Activities />, {
    store: createStore(reducer, initialState)
  });
  expect(getByTestId("active")).toHaveTextContent("cycling");
});
