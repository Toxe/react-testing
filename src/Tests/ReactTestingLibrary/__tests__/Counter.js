import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import "jest-extended";
import "expect-more-jest";
import ReactTestingLibrary from "../ReactTestingLibrary";

test("Counter can change its value", async () => {
    const { getByRole, findByText } = render(<ReactTestingLibrary />);

    const decButton = getByRole("button", { name: "-" });
    const incButton = getByRole("button", { name: "+" });

    userEvent.click(incButton);
    await findByText("6");

    userEvent.click(decButton);
    await findByText("5");
});
