import React from "react";
import Jest from "./Tests/Jest/Jest";
import DOMTestingLibrary from "./Tests/DOMTestingLibrary/DOMTestingLibrary";
import JestDOM from "./Tests/JestDOM/JestDOM";
import UserEvent from "./Tests/UserEvent/UserEvent";

export default function App() {
    return (
        <div>
            <Jest />
            <DOMTestingLibrary />
            <JestDOM />
            <UserEvent />
        </div>
    );
}
