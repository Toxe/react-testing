import React from "react";
import Jest from "./Tests/Jest/Jest";
import JestExtended from "./Tests/JestExtended/JestExtended";
import ExpectMoreJest from "./Tests/ExpectMoreJest/ExpectMoreJest";
import DOMTestingLibrary from "./Tests/DOMTestingLibrary/DOMTestingLibrary";
import JestDOM from "./Tests/JestDOM/JestDOM";
import UserEvent from "./Tests/UserEvent/UserEvent";

export default function App() {
    return (
        <div>
            <Jest />
            <JestExtended />
            <ExpectMoreJest />
            <DOMTestingLibrary />
            <JestDOM />
            <UserEvent />
        </div>
    );
}
