import React from "react";
import styled from "styled-components";

const Div = styled.div`
    background-color: ${(props) => (props.color ? props.color : "white")};
    padding: 8px;
    margin-right: 20px;
`;

const Title = styled.h2`
    margin: 0 0 5px 0;
`;

export default function TestComponent({ title, color, children }) {
    return (
        <Div color={color}>
            {title && <Title>{title}</Title>}
            {children}
        </Div>
    );
}
