import React from "react";
import styled from "styled-components";
import TestComponent from "./TestComponent";
import { useCounterWithHook } from "./useCounterWithHook";

const Button = styled.button`
    margin-right: 10px;
`;

const Value = styled.span`
    font-weight: bold;
`;

export default function CounterWithHook() {
    const { counter, incCounter, decCounter } = useCounterWithHook();

    return (
        <TestComponent title="CounterWithHook" color="blanchedalmond">
            <Button onClick={decCounter}>-5</Button>
            <Button onClick={incCounter}>+5</Button>
            <Value>{counter}</Value>
        </TestComponent>
    );
}
