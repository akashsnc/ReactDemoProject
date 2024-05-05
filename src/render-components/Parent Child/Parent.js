import React, {useState} from 'react'
import Child from './Child'

const Parent = () => {
    const [count, setCount] = useState(0)

    console.log('Parent rendered.')
  return (
    <div>
        <p><strong>Count: {count}</strong></p>
        <button onClick={()=>setCount(c=>c+1)}>Count + 1</button>
        <button onClick={()=>setCount(c=>c-1)}>Count - 1</button>
        <button onClick={()=>setCount(0)}>Count to 0</button>
        <button onClick={()=>setCount(5)}>Count to 5</button>
        <Child />
    </div>
  )
}

export default Parent

// When a Parent component is rendered, all of its child components are re-rendered.
// But if the child component hasn't changed, the renders will be rejacted at commit phase.
// New state same as old state after initial render ? Both parent and child do not re-render.
// New state same as old state after re-renders ? Parent re-renders one more time but child never re-renders.