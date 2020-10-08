import { useState } from "react";

export default function useCounterWithHook() {
    const [counter, setCounter] = useState(50);

    const incCounter = () => setCounter(counter + 5);
    const decCounter = () => setCounter(counter - 5);

    return { counter, incCounter, decCounter };
}
