import { sum_squared } from "../../../utils/moduleUser";
import * as moduleMock from "../../../utils/module";

jest.mock("../../../utils/module");

test("sum_squared works", () => {
    moduleMock.sum.mockReturnValue(10);
    moduleMock.squared.mockReturnValue(100);

    expect(sum_squared(20, 30)).toBe(100); // should be 2500 without the mock

    expect(moduleMock.sum).toHaveBeenCalled();
    expect(moduleMock.squared).toHaveBeenCalled();
});
