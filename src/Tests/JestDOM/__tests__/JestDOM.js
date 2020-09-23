import React from "react";
import ReactDOM from "react-dom";
import { getQueriesForElement } from "@testing-library/dom";
import "@testing-library/jest-dom";
import JestDOM from "../JestDOM";

it("renders", () => {
    const root = document.createElement("div");
    ReactDOM.render(<JestDOM />, root);

    const { getByText, getByLabelText } = getQueriesForElement(root);

    getByText("jest-dom");
    getByText("Distance Converter");
    getByLabelText("Please enter a distance in meters:");
    expect(getByText("Convert")).toBeDisabled();
});
