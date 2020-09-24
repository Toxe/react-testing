import React, { useState } from "react";
import styled from "styled-components";
import TestComponent from "./TestComponent";

const Button = styled.button`
    margin-right: 10px;
`;

const Value = styled.span`
    font-weight: bold;
`;

export default function Counter() {
    const [counter, setCounter] = useState(5);

    return (
        <TestComponent title="Counter" color="lemonchiffon">
            <Button onClick={() => setCounter(counter - 1)}>-</Button>
            <Button onClick={() => setCounter(counter + 1)}>+</Button>
            <Value>{counter}</Value>
        </TestComponent>
    );
}
