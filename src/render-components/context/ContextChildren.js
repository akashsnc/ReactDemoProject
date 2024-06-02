import React, { useContext } from 'react'
import { CountContext } from './ContextParent'

export const ChildA = () => {
    console.log('ChildA rendered.')
    return (
        <>
            <div>Child A</div>
            <ChildB />
        </>
    )
}

export const MemoizedChildA = React.memo(ChildA)

export const ChildB = () => {
    console.log('ChildB rendered.')
    return (
        <>
            <div>Child B</div>
            <ChildC />
        </>
    )
}

export const ChildC = () => {
    const count = useContext(CountContext)

    console.log('ChildC rendered.')
    return (
        <>
            <div>Child C - {count}</div>
        </>
    )
}


// Now, since the Child component C is re-rendering due to change in its context value.
// Any child component of C will re-render as well due to default parent-child rendering behavior.