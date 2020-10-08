import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import "jest-extended";
import "expect-more-jest";
import ReactTestingLibrary from "../ReactTestingLibrary";

test("CounterWithHook can change its value", async () => {
    const { getByRole, findByText } = render(<ReactTestingLibrary />);

    const decButton = getByRole("button", { name: "-5" });
    const incButton = getByRole("button", { name: "+5" });

    userEvent.click(incButton);
    await findByText("55");

    userEvent.click(decButton);
    await findByText("50");
});
