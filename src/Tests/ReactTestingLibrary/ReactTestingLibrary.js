import React from "react";
import TestContainer from "../../Components/TestContainer";
import TestDescription from "../../Components/TestDescription";
import DistanceConverter from "../../Components/DistanceConverter";
import Counter from "../../Components/Counter";
import CallRestApi from "../../Components/CallRestApi";

export default function ReactTestingLibrary() {
    return (
        <TestContainer title="React Testing Library">
            <TestDescription>
                <li>check existence of components after events</li>
                <li>mock Axios</li>
            </TestDescription>
            <DistanceConverter />
            <Counter />
            <CallRestApi />
        </TestContainer>
    );
}
