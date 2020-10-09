import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import "jest-extended";
import "expect-more-jest";
import * as hooks from "../../../Components/useCounterWithHook";
import CounterWithHook from "../../../Components/CounterWithHook";

test("useCounterWithHook", async () => {
    const incCounter = jest.fn();
    const decCounter = jest.fn();

    const hookSpy = jest.spyOn(hooks, "useCounterWithHook");
    hookSpy.mockReturnValue({ counter: 25, incCounter, decCounter });

    const { getByRole, getByText } = render(<CounterWithHook />);

    getByRole("heading", { name: "CounterWithHook" });
    getByText("25");

    userEvent.click(getByRole("button", { name: "+5" }));
    userEvent.click(getByRole("button", { name: "-5" }));

    expect(incCounter).toHaveBeenCalledTimes(1);
    expect(decCounter).toHaveBeenCalledTimes(1);
});
