import React, {useState, useEffect} from 'react'

function EffectHookCounter() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    const updateTitle = () => {
        console.log('useEffect - Updating document title')
        document.title = `Clicked ${count} times`
    }

    useEffect(updateTitle, [count])
    // useEffect takes a method as 1st parameter to perform a side-effect operation. 
    // It also takes a an array as a 2nd parameter.
    // The method is executed only when array elements are modified.
    // e.g. here if count value changes then only updateTitle method is called.

  return (
    <div>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
        <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  )
}

export default EffectHookCounter