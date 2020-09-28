import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import "jest-extended";
import "expect-more-jest";
import ReactTestingLibrary from "../ReactTestingLibrary";

test("Distance Converter can convert values", async () => {
    const { getByRole, findByText } = render(<ReactTestingLibrary />);

    const textbox = getByRole("textbox", { name: "Please enter a distance in meters:" });
    const button = getByRole("button", { name: "Convert" });

    expect(button).toBeDisabled();

    userEvent.type(textbox, "1234");
    expect(button).not.toBeDisabled();

    userEvent.click(button);
    await findByText("Result: 1.23 km");
});
