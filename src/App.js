import React from "react";
import JestFunctionTest from "./Tests/JestFunctionTest/JestFunctionTest";
import DOMTestingLibrary from "./Tests/DOMTestingLibrary/DOMTestingLibrary";
import JestDOM from "./Tests/JestDOM/JestDOM";
import UserEvent from "./Tests/UserEvent/UserEvent";

export default function App() {
    return (
        <div>
            <JestFunctionTest />
            <DOMTestingLibrary />
            <JestDOM />
            <UserEvent />
        </div>
    );
}
