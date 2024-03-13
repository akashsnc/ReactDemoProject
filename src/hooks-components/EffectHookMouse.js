import React, {useState, useEffect} from 'react'

function EffectHookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    // When we want useEffect to called only once, to mimic ComponentDidMount method.
    // Just add empty array as 2nd parameter indicating no dependency on any state element,
    // hence calling the method only once after component mount.
    useEffect(() => {
        console.log('UseEffect - called')
        window.addEventListener('mousemove', logMousePosition)
    }, [])

    const logMousePosition = e => {
        console.log('Mouse moved')
        setX(e.clientX)
        setY(e.clientY)
    }

    return (
        <div>Hooks - X - {x} , Y - {y}</div>
    )
}

export default EffectHookMouse