import React, {useState} from 'react'
import ParentOne from './ParentOne'
import ChildOne from './ChildOne'

export const GrandParent = () => {

    const [newCount, setNewCount] = useState(0)
  return (
    <div>
        <button onClick={() => setNewCount(c => c+1)}>GrandParent count - {newCount}</button>
        <ParentOne>
            <ChildOne />
        </ParentOne>
    </div>
  )
}
