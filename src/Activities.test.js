import React, { useReducer } from "react";
import { render, cleanup } from "@testing-library/react";
import { Activities } from "./Activities";
import reducer from "./reducer";

afterEach(cleanup);

const initialState = {
  selectedIndex: 0
};

it("should initialize to 'cycling'", () => {
  const { getByText } = render(<Activities />);
  expect(getByTestId("activity")).toHaveTextContent("cycling");
});
