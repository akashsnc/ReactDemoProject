import React, { useState } from 'react'
import { MemoizedChildThree } from './ChildThree'

const ParentThree = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Akash')

    console.log('ParentThree rendered.')
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>ParentThree: {count}</button>
            <button onClick={() => setName('Suman')}>Set Name</button>   
            <MemoizedChildThree name={name}/>
        </div>
    )
}

export default ParentThree

// Memoizing the child component will prevent unnecessary re-renders.