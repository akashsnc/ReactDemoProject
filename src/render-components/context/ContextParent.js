import React, { useState } from 'react'
import { MemoizedChildA } from './ContextChildren'

export const CountContext = React.createContext()
const CountProvider = CountContext.Provider

export const ContextParent = ({children}) => { {/*Solution two */}
    const [count, setCount] = useState(0)

    console.log('ContextParent rendered.')

    return (
        <>
            <button onClick={() => setCount(c => c + 1)}>ContextParent - {count}</button>
            <CountProvider value={count}>
                {/* <MemoizedChildA /> */} {/*Solution one */}
                {children}                 {/*Solution two */}
            </CountProvider>
        </>
    )
}


// When the context provider is in the parent component and its state updates,
// every child component re-renders, not just the component consuming the context value.

// 1. One solution is memoizing child component A which will restrict the default rendering 
// behavior to only component that consumes the context value.

// 2. Other solution is to pass top level Child component as children props to the parent component. 
// Since the props do not change on state change therefore the children components bypass 
// re-rendering except where the context value has changed. (Same element reference)