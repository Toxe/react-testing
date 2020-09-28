import React from "react";
import TestContainer from "../../Components/TestContainer";
import TestDescription from "../../Components/TestDescription";
import DistanceConverter from "../../Components/DistanceConverter";
import Counter from "../../Components/Counter";

export default function JestDOM() {
    return (
        <TestContainer title="jest-dom">
            <TestDescription>
                <li>additional matchers for DOM elements</li>
            </TestDescription>
            <DistanceConverter />
            <Counter />
        </TestContainer>
    );
}
