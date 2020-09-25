import React from "react";
import TestContainer from "../../Components/TestContainer";
import DistanceConverter from "../../Components/DistanceConverter";
import Counter from "../../Components/Counter";

export default function UserEvent() {
    return (
        <TestContainer title="user-event">
            <DistanceConverter />
            <Counter />
        </TestContainer>
    );
}
