import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import "jest-extended";
import "expect-more-jest";
import * as hooks from "../../../Components/useCounterWithHook";
import CounterWithHook from "../../../Components/CounterWithHook";

test("useCounterWithHook", async () => {
    const incCounterSpy = jest.fn();
    const decCounterSpy = jest.fn();

    const hookSpy = jest.spyOn(hooks, "useCounterWithHook");
    hookSpy.mockReturnValue({ counter: 25, incCounter: incCounterSpy, decCounter: decCounterSpy });

    const { getByRole, getByText } = render(<CounterWithHook />);

    getByRole("heading", { name: "CounterWithHook" });
    const decButton = getByRole("button", { name: "-5" });
    const incButton = getByRole("button", { name: "+5" });
    getByText("25");

    userEvent.click(incButton);
    userEvent.click(decButton);

    expect(incCounterSpy).toHaveBeenCalledTimes(1);
    expect(decCounterSpy).toHaveBeenCalledTimes(1);
});
