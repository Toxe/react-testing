import React from "react";
import ReactDOM from "react-dom";
import JestDOM from "../JestDOM";
import { getQueriesForElement } from "@testing-library/dom";
import "@testing-library/jest-dom";

it("renders", () => {
    const root = document.createElement("div");
    ReactDOM.render(<JestDOM />, root);

    const { getByText, getByLabelText } = getQueriesForElement(root);

    getByText("jest-dom");
    getByText("Distance Converter");
    expect(getByLabelText("Please enter a distance in meters:")).toHaveValue("");
    expect(getByText("Convert")).toBeDisabled();

    getByText("Counter");
    getByText("-");
    getByText("+");
    getByText("5");
});
