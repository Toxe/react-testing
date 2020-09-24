import React, { useState } from "react";
import styled from "styled-components";
import TestComponent from "./TestComponent";
import { formatDistance } from "../utils/formatDistance";

const Span = styled.span`
    margin-right: 0.5em;
`;

const Button = styled.button`
    margin-left: 1em;
`;

const Result = styled.div`
    font-weight: bold;
`;

export default function DistanceConverter() {
    const [distance, setDistance] = useState("");
    const [result, setResult] = useState(null);

    const changeDistance = (e) => {
        setDistance(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        setResult(distance !== "" ? formatDistance(distance) : null);
    };

    return (
        <TestComponent title="Distance Converter" color="moccasin">
            <form>
                <label>
                    <Span>Please enter a distance in meters:</Span>
                    <input
                        type="text"
                        name="distance"
                        placeholder="distance"
                        value={distance}
                        onChange={changeDistance}
                    />
                </label>
                <Button type="submit" onClick={handleClick} disabled={distance === ""}>
                    Convert
                </Button>
                {result && <Result>Result: {result}</Result>}
            </form>
        </TestComponent>
    );
}
