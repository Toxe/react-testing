import React from "react";
import styled from "styled-components";

const Div = styled.div`
    width: 100%;
`;

const List = styled.ul`
    margin: 0 0 10px 0;
`;

export default function TestDescription({ children }) {
    return (
        <Div>
            <List>{children}</List>
        </Div>
    );
}
