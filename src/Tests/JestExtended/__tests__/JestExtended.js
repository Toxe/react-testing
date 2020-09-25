import "jest-extended";
import { formatDistance } from "../../../utils/formatDistance";

test("result is string", () => {
    const result = formatDistance(100);
    expect(result).toBeString();
    expect(result).toBe("0.10 km");
});
