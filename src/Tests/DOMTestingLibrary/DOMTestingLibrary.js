import React from "react";
import TestContainer from "../../Components/TestContainer";
import TestDescription from "../../Components/TestDescription";
import DistanceConverter from "../../Components/DistanceConverter";
import Counter from "../../Components/Counter";

export default function DOMTestingLibrary() {
    return (
        <TestContainer title="DOM Testing Library">
            <TestDescription>
                <li>check existence of DOM elements</li>
            </TestDescription>
            <DistanceConverter />
            <Counter />
        </TestContainer>
    );
}
