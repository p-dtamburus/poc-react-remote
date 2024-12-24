import React, { useState, useEffect } from 'react';

// Parent Component
function UseEffectExample() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    return (
        <div>
            <h1>useEffect </h1>
            <p>Parent Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>

            <p>Parent Text: {text}</p>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something..."
            />

            <LifecycleEffect count={count} />
            <CleanupEffect count={count} />
            <ConditionalEffect text={text} />
        </div>
    );
}

// Example 1: Lifecycle Effect
function LifecycleEffect({ count }) {
    useEffect(() => {
        console.log('Component mounted or count updated.');
        return () => console.log('Component unmounted or count changed.');
    }, [count]); // Runs on mount, unmount, and count updates

    return <p>LifecycleEffect: Current count is {count}</p>;
}

// Example 2: Cleanup Effect
function CleanupEffect({ count }) {
    useEffect(() => {
        const interval = setInterval(() => {
            console.log(`Interval running. Count: ${count}`);
        }, 1000);

        return () => {
            console.log('Cleanup: Interval cleared.');
            clearInterval(interval);
        };
    }, [count]); // Runs every time count changes, cleaning up the old interval

    return <p>CleanupEffect: Check the console for interval logs.</p>;
}

// Example 3: Conditional Effect
function ConditionalEffect({ text }) {
    useEffect(() => {
        if (text.includes('hello')) {
            console.log('The user typed "hello"!');
        }
    }, [text]); // Runs only when the text changes

    return <p>ConditionalEffect: Type "hello" in the input to trigger an effect.</p>;
}

export default UseEffectExample;
