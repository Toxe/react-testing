import React from "react";
import TestContainer from "../../Components/TestContainer";
import DistanceConverter from "../../Components/DistanceConverter";
import Counter from "../../Components/Counter";

export default function JestDOM() {
    return (
        <TestContainer title="jest-dom">
            <DistanceConverter />
            <Counter />
        </TestContainer>
    );
}
