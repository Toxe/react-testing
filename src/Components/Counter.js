import React, { useState } from "react";
import styled from "styled-components";

const StyledCounter = styled.div`
    padding: 10px;
    background-color: lemonchiffon;
`;
const Title = styled.h2`
    margin-top: 0px;
    margin-bottom: 5px;
`;
const Button = styled.button`
    margin-right: 10px;
`;
const Value = styled.span`
    font-weight: bold;
`;

export default function Counter() {
    const [counter, setCounter] = useState(5);

    return (
        <StyledCounter>
            <Title>Counter</Title>
            <div>
                <Button onClick={() => setCounter(counter - 1)}>-</Button>
                <Button onClick={() => setCounter(counter + 1)}>+</Button>
                <Value>{counter}</Value>
            </div>
        </StyledCounter>
    );
}
