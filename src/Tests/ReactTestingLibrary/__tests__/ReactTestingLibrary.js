import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import "jest-extended";
import "expect-more-jest";
import ReactTestingLibrary from "../ReactTestingLibrary";

it("renders", () => {
    const { getByRole, getByText } = render(<ReactTestingLibrary />);

    // DistanceConverter
    getByRole("heading", { name: "React Testing Library" });
    getByRole("heading", { name: "Distance Converter" });
    getByRole("textbox", { name: "Please enter a distance in meters:" });
    getByRole("button", { name: "Convert" });

    // Counter
    getByRole("heading", { name: "Counter" });
    getByRole("button", { name: "-" });
    getByRole("button", { name: "+" });
    getByText("5");

    // CallRestApi
    getByRole("heading", { name: "Call REST API" });
    getByRole("button", { name: "Call API" });
    getByRole("textbox", { name: "Current user:" });
});
