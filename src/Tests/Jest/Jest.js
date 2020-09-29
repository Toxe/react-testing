import React from "react";
import TestContainer from "../../Components/TestContainer";
import TestComponent from "../../Components/TestComponent";
import TestDescription from "../../Components/TestDescription";
import { formatDistance } from "../../utils/formatDistance";

export default function Jest() {
    return (
        <TestContainer title="Jest">
            <TestDescription>
                <li>test existing function "formatDistance"</li>
                <li>mock function without implementation</li>
                <li>mock function with implementation</li>
                <li>mock existing function "formatDistance"</li>
                <li>mock module</li>
                <li>spy on module</li>
            </TestDescription>
            <TestComponent color="palegreen">100m = {formatDistance(100)}</TestComponent>
            <TestComponent color="palegreen">1234m = {formatDistance(1234)}</TestComponent>
        </TestContainer>
    );
}
