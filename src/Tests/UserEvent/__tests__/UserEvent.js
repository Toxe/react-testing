import React from "react";
import ReactDOM from "react-dom";
import { getQueriesForElement } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import "jest-extended";
import "expect-more-jest";
import UserEvent from "../UserEvent";

test("enter text", async () => {
    const root = document.createElement("div");
    ReactDOM.render(<UserEvent />, root);

    const { getByRole } = getQueriesForElement(root);

    userEvent.type(getByRole("textbox", { name: "Please enter a distance in meters:" }), "1234");
});

test("click button", async () => {
    const root = document.createElement("div");
    ReactDOM.render(<UserEvent />, root);

    const { getByRole } = getQueriesForElement(root);

    userEvent.click(getByRole("button", { name: "+" }));
});
