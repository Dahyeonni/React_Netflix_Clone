import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
    const [DebounceValue, setDebounceValue] = useState(value);

    useEffect(
        () => {
            const handler = setTimeout(()=> {
                setDebounceValue(value);
            }, delay);

            return () => {
                clearTimeout(handler);
            };
        },
        [value, delay]
    );

    return DebounceValue;
};