import { squared, sum } from "./module";

export function sum_squared(a, b) {
    return squared(sum(a, b));
}
