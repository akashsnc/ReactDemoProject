import React from 'react'

function MemoComp(props) {
    console.log(`Memo Component: ${props.name}`)

  return (
    <div>Memo Component</div>
  )
}

// export default MemoComp

// Memo Components are higher order components that checks values before re-rendering
export default React.memo(MemoComp)