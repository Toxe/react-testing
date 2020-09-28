import React from "react";
import TestContainer from "../../Components/TestContainer";
import TestDescription from "../../Components/TestDescription";
import DistanceConverter from "../../Components/DistanceConverter";
import Counter from "../../Components/Counter";

export default function UserEvent() {
    return (
        <TestContainer title="user-event">
            <TestDescription>
                <li>add userEvent to simulate real world events</li>
            </TestDescription>
            <DistanceConverter />
            <Counter />
        </TestContainer>
    );
}
