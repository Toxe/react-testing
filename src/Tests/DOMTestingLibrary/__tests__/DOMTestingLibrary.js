import React from "react";
import ReactDOM from "react-dom";
import { getQueriesForElement } from "@testing-library/dom";
import DOMTestingLibrary from "../DOMTestingLibrary";

it("renders", () => {
    const root = document.createElement("div");
    ReactDOM.render(<DOMTestingLibrary />, root);

    const { getByText, getByRole } = getQueriesForElement(root);

    getByRole("heading", {name: "DOM Testing Library"});
    getByRole("heading", {name: "Distance Converter"});
    getByRole("textbox", {name: "Please enter a distance in meters:"});
    getByRole("button", {name: "Convert"});

    getByRole("heading", {name: "Counter"});
    getByRole("button", {name: "-"});
    getByRole("button", {name: "+"});
    getByText("5");
});
