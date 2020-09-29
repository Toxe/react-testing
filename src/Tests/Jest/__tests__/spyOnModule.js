import { sum_squared } from "../../../utils/moduleUser";
import * as moduleMock from "../../../utils/module";

test("sum_squared works", () => {
    const sumSpy = jest.spyOn(moduleMock, "sum");
    const squaredSpy = jest.spyOn(moduleMock, "squared");

    expect(sum_squared(2, 3)).toBe(25);

    expect(sumSpy).toHaveBeenCalledWith(2, 3);
    expect(squaredSpy).toHaveBeenCalledWith(5);
});
