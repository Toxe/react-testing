import "jest-extended";
import "expect-more-jest";
import { formatDistance } from "../../../utils/formatDistance";

test("result is string", () => {
    const result = formatDistance(100);
    expect(result).toEndWith("km");
});
