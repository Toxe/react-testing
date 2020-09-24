import React from "react";
import TestContainer from "../../Components/TestContainer";
import TestComponent from "../../Components/TestComponent";
import { formatDistance } from "../../utils/formatDistance";

export default function JestFunctionTest() {
    return (
        <TestContainer title="Jest Function Test">
            <TestComponent color="palegreen">100m = {formatDistance(100)}</TestComponent>
            <TestComponent color="palegreen">1000m = {formatDistance(1000)}</TestComponent>
            <TestComponent color="palegreen">1234m = {formatDistance(1234)}</TestComponent>
        </TestContainer>
    );
}
