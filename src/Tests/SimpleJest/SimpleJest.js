import React from "react";
import { formatDistance } from "../../utils/formatDistance";

export default function SimpleJest() {
    return (
        <div>
            <h1>Simple Function (Jest)</h1>
            <div>100m = {formatDistance(100)}</div>
            <div>1000m = {formatDistance(1000)}</div>
            <div>1234m = {formatDistance(1234)}</div>
        </div>
    );
}
