import React, { useState, useEffect } from 'react';

export function Timer() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => clearInterval(interval); // Cleanup
    }, []); // Executa apenas uma vez, ao montar

    return <p>Time: {time}s</p>;
}
