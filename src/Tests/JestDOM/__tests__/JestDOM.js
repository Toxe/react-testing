import React from "react";
import ReactDOM from "react-dom";
import { getQueriesForElement } from "@testing-library/dom";
import "@testing-library/jest-dom";
import "jest-extended";
import "expect-more-jest";
import JestDOM from "../JestDOM";

it("renders", () => {
    const root = document.createElement("div");
    ReactDOM.render(<JestDOM />, root);

    const { getByText, getByRole } = getQueriesForElement(root);

    getByRole("heading", { name: "jest-dom" });
    getByRole("heading", { name: "Distance Converter" });
    expect(getByRole("textbox", { name: "Please enter a distance in meters:" })).toHaveValue("");
    expect(getByRole("button", { name: "Convert" })).toBeDisabled();

    getByRole("heading", { name: "Counter" });
    getByRole("button", { name: "-" });
    getByRole("button", { name: "+" });
    getByText("5");
});
