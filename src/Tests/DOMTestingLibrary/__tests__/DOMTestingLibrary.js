import React from "react";
import ReactDOM from "react-dom";
import DOMTestingLibrary from "../DOMTestingLibrary";
import { getQueriesForElement } from "@testing-library/dom";

it("renders", () => {
    const root = document.createElement("div");
    ReactDOM.render(<DOMTestingLibrary />, root);

    const { getByText, getByLabelText } = getQueriesForElement(root);

    getByText("DOM Testing Library");
    getByText("Distance Converter");
    getByLabelText("Please enter a distance in meters:");
    getByText("Convert");
});
