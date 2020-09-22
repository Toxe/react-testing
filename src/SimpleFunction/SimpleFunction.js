import React from "react";
import { formatDistance } from "./formatDistance";

export default function SimpleFunction() {
    return (
        <div>
            <h1>SimpleFunction</h1>
            <div>100m = {formatDistance(100)}</div>
            <div>1000m = {formatDistance(1000)}</div>
            <div>1234m = {formatDistance(1234)}</div>
        </div>
    );
}
