import React, { useState } from "react";
import styled from "styled-components";
import { formatDistance } from "../utils/formatDistance";

const StyledDistanceConverter = styled.div`
    padding: 10px;
    background-color: beige;
`;
const Title = styled.h2`
    margin-top: 0px;
    margin-bottom: 5px;
`;
const Label = styled.label``;
const Span = styled.span`
    margin-right: 0.5em;
`;
const TextField = styled.input``;
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
        <StyledDistanceConverter>
            <Title>Distance Converter</Title>
            <form>
                <div>
                    <Label>
                        <Span>Please enter a distance in meters:</Span>
                        <TextField
                            type="text"
                            name="distance"
                            placeholder="distance"
                            value={distance}
                            onChange={changeDistance}
                        />
                    </Label>
                    <Button type="submit" onClick={handleClick} disabled={distance === ""}>
                        Convert
                    </Button>
                </div>
                {result && <Result>Result: {result}</Result>}
            </form>
        </StyledDistanceConverter>
    );
}
