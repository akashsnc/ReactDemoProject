import React, {useState, useEffect} from 'react'

function EffectHookMouse_Mount() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    // useEffect cab be called only once, to mimic ComponentDidMount behavior.
    // Just add empty array as 2nd parameter indicating no dependency on any state object,
    // hence useEffect will not watch any object for change.
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

export default EffectHookMouse_Mount