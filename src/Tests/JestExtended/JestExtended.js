import React from "react";
import TestContainer from "../../Components/TestContainer";
import TestDescription from "../../Components/TestDescription";

export default function JestExtended() {
    return (
        <TestContainer title="Jest Extended">
            <TestDescription>
                <li>additional matchers</li>
            </TestDescription>
        </TestContainer>
    );
}
