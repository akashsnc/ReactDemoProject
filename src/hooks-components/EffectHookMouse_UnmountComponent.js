import React, {useState} from 'react'
import EffectHookMouse_Unmount from './EffectHookMouse_Unmount'

function EffectHookMouse_UnmountComponent() {
    const [toggle, setToggle] = useState(true)
    
    return (
        <div>
            <div><button onClick={() => setToggle(!toggle)}>Toggle Mousemove</button></div>
            {toggle && <EffectHookMouse_Unmount/>}
        </div>
    )
}

export default EffectHookMouse_UnmountComponent