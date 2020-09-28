import React from "react";
import TestContainer from "../../Components/TestContainer";
import DistanceConverter from "../../Components/DistanceConverter";
import Counter from "../../Components/Counter";

export default function ReactTestingLibrary() {
    return (
        <TestContainer title="React Testing Library">
            <DistanceConverter />
            <Counter />
        </TestContainer>
    );
}
