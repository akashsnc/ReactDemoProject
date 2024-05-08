import React from 'react'

export function ChildTwo({name}) {
    console.log('ChildTwo rendered.')
  return (
    <div>ChildTwo Component: {name}</div>
  )
}

export const MemoizedChildTwo = React.memo(ChildTwo)


// React.memo performs a shallow comparison of current and previous props and renders only when props have changed.
// A custom caparison function can be provided as second argument in React.memo function as per business requirements.