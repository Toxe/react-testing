import React from "react";
import { formatDistance } from "../../utils/formatDistance";

export default function JestFunctionTest() {
    return (
        <div>
            <h1>Jest Function Test</h1>
            <div>100m = {formatDistance(100)}</div>
            <div>1000m = {formatDistance(1000)}</div>
            <div>1234m = {formatDistance(1234)}</div>
        </div>
    );
}
