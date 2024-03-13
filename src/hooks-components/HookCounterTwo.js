import React, {useState} from 'react'

function HookCounterTwo() {
    const initialValue = 0
    const [count, setCount] = useState(initialValue)

    const incrementByFive = () => {
        for(let i=0; i<5; i++)
            setCount(prevState => prevState + 1)
    }
  return (
    <div>
        <div>Count {count}</div>
        <div><button onClick={() => setCount(initialValue)}>Reset</button></div>
        <div><button onClick={() => setCount(prevState => prevState + 1)}>Increment</button></div>
        <div><button onClick={() => setCount(prevState => prevState - 1)}>Decrement</button></div>
        <div><button onClick={incrementByFive}>Increment by 5</button></div>
    </div>
  )
}

export default HookCounterTwo