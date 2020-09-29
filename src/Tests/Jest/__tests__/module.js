import { squared, sum } from "../../../utils/module";

test("squared works", () => {
    expect(squared(5)).toBe(25);
});

test("sum works", () => {
    expect(sum(10, 20)).toBe(30);
});
