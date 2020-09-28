import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import TestComponent from "./TestComponent";

const Button = styled.button`
    margin-left: 1em;
`;

const Span = styled.span`
    margin-right: 0.5em;
`;

export default function CallRestApi() {
    const [username, setUsername] = useState("");

    const onClick = async () => {
        const userId = 1 + Math.floor(Math.random() * 10);
        const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        setUsername(user.data.name);
    };

    return (
        <TestComponent title="Call REST API" color="lightblue">
            <label>
                <Span>Current user:</Span>
                <input type="text" value={username} readOnly />
            </label>
            <Button onClick={onClick}>Call API</Button>
        </TestComponent>
    );
}
