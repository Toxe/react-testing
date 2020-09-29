import { sum_squared } from "../../../utils/moduleUser";

test("sum_squared works", () => {
    expect(sum_squared(2, 3)).toBe(25);
});
