import React, {useContext} from 'react'
import { CountContext } from '../App'

function ContextReducerHookC() {
    const countContext = useContext(CountContext)
    return (
      <div>
        ContextReducerHook C = {countContext.count}
        <button onClick={() => countContext.dispatch("increment")}>Increment</button>
        <button onClick={() => countContext.dispatch("decrement")}>Decrement</button>
        <button onClick={() => countContext.dispatch("reset")}>Reset</button>
      </div>
    )
}

export default ContextReducerHookC