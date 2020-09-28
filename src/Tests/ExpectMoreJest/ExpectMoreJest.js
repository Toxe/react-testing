import React from "react";
import TestContainer from "../../Components/TestContainer";
import TestDescription from "../../Components/TestDescription";

export default function ExpectMoreJest() {
    return (
        <TestContainer title="Expect More Jest">
            <TestDescription>
                <li>additional matchers</li>
            </TestDescription>
        </TestContainer>
    );
}
