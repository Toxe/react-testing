import React from "react";
import JestFunctionTest from "./Tests/JestFunctionTest/JestFunctionTest";
import DOMTestingLibrary from "./Tests/DOMTestingLibrary/DOMTestingLibrary";
import JestDOM from "./Tests/JestDOM/JestDOM";

export default function App() {
    return (
        <div>
            <JestFunctionTest />
            <DOMTestingLibrary />
            <JestDOM />
        </div>
    );
}
