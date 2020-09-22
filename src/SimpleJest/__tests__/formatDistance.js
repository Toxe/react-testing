import { formatDistance } from "../formatDistance";

test("less than 1km", () => {
    expect(formatDistance(100)).toBe("0.10 km");
});

test("more than 1km", () => {
    expect(formatDistance(1234)).toBe("1.23 km");
});

test("1km", () => {
    expect(formatDistance(1000)).toBe("1.00 km");
});
