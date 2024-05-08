import React, { useState } from 'react'
import { MemoizedChildTwo } from './ChildTwo'

const ParentTwo = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Akash')

    console.log('ParentTwo rendered.')
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>ParentTwo: {count}</button>
            <button onClick={() => setName('Suman')}>Set Name</button>   
            <MemoizedChildTwo name={name}/>
        </div>
    )
}

export default ParentTwo

// Memoizing the child component will prevent unnecessary re-renders.