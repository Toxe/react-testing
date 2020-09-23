import React from "react";
import JestFunctionTest from "./Tests/JestFunctionTest/JestFunctionTest";
import DOMTestingLibrary from "./Tests/DOMTestingLibrary/DOMTestingLibrary";

export default function App() {
    return (
        <div>
            <JestFunctionTest />
            <DOMTestingLibrary />
        </div>
    );
}
