import React from "react";
import styled from "styled-components";

const Div = styled.div`
    background-color: whitesmoke;
    margin: 0 0 20px 0;
    padding: 10px;
`;

const Title = styled.h1`
    margin: 0 0 10px 0;
`;

const Flexbox = styled.div`
    display: flex;
`;

export default function TestContainer({ title, children }) {
    return (
        <Div>
            <Title>{title}</Title>
            <Flexbox>{children}</Flexbox>
        </Div>
    );
}
