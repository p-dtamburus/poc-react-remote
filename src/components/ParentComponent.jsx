import React, { useState } from 'react'; //useState rook

function ChildComponent(props) {
    return <button onClick={()=>props.updateCount(10)}>Set Count to 10</button>
    // return <p>Count from parent: {count}</p>;
}

function ParentComponent() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Parent count: {count}</p>
            <ChildComponent updateCount={setCount} count={count} />
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
        </div>
    );
}

export default ParentComponent;
