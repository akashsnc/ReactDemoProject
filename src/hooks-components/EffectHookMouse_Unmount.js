import React, { useState, useEffect } from 'react'

function EffectHookMouse_Unmount() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    // useEffect cab be made, to mimic ComponentWillUnmount behavior.
    // Just return a function from the 1st parameter function,
    // The return function will contain any cleanup code.
    useEffect(() => {
        console.log('UseEffect - mount called')
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('useEffect - unmount called')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    const logMousePosition = e => {
        console.log('Mouse moved')
        setX(e.clientX)
        setY(e.clientY)
    }

    return (
        <div>
            <div>Hooks - X - {x} , Y - {y}</div>
        </div>
    )
}

export default EffectHookMouse_Unmount