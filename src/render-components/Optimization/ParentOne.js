import React, { useState } from 'react'

const ParentOne = ({ children }) => {
    const [count, setCount] = useState(0)

    console.log('ParentOne rendered.')
    return (
        <div>
            <p><strong>Count: {count}</strong></p>
            <button onClick={() => setCount(c => c + 1)}>Count + 1</button>
            <button onClick={() => setCount(0)}>Count to 0</button>
            {children}
        </div>
    )
}

export default ParentOne

// Component can change state but not props Therefore when component is passed as props it is not re-rendered.