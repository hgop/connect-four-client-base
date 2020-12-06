import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

it("should render welcome message", () => {
  render(<App />);

  expect(screen.getByText("Connect Four!")).toBeInTheDocument();
});
