import { formatDistance } from "../../../utils/formatDistance";

test("mock function without implementation", () => {
    const foo = jest.fn();

    foo("value");

    expect(foo).toHaveBeenCalled();
    expect(foo).toHaveBeenCalledTimes(1);
    expect(foo).toHaveBeenCalledWith("value");
    expect(foo).toHaveReturnedWith(undefined);
});

test("mock function with implementation", () => {
    const squared = jest.fn((x) => x * x);

    squared(5);

    expect(squared).toHaveBeenCalled();
    expect(squared).toHaveBeenCalledTimes(1);
    expect(squared).toHaveBeenCalledWith(5);
    expect(squared).toHaveReturnedWith(25);
});

test("mock existing function", () => {
    const formatDistanceMock = jest.fn(formatDistance);

    expect(formatDistanceMock(100)).toBe("0.10 km");

    expect(formatDistanceMock).toHaveBeenCalled();
    expect(formatDistanceMock).toHaveBeenCalledTimes(1);
    expect(formatDistanceMock).toHaveBeenCalledWith(100);
    expect(formatDistanceMock).toHaveReturnedWith("0.10 km");
});
