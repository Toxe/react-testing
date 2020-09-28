import React from "react";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import "jest-extended";
import "expect-more-jest";
import axiosMock from "axios";
import ReactTestingLibrary from "../ReactTestingLibrary";

jest.mock("axios");

test("CallRestApi makes API call on button click", async () => {
    axiosMock.get.mockReturnValue({ data: { name: "Mock Username" } });

    const { getByRole } = render(<ReactTestingLibrary />);

    const textfield = getByRole("textbox", { name: "Current user:" });
    const button = getByRole("button", { name: "Call API" });

    // text field is empty
    expect(textfield).toHaveValue("");

    // click button to make API call
    userEvent.click(button);

    // wait until text field contains the mocked user name
    await waitFor(() => expect(textfield).toHaveValue("Mock Username"));
});
