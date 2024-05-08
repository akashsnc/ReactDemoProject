import React from 'react'

export function ChildThree({name}) {
    console.log('ChildThree rendered.')
  return (
    <div>ChildThree Component: {name}</div>
  )
}

export const MemoizedChildThree = React.memo(ChildThree)


// React.memo performs a shallow comparison of current and previous props and renders only when props have changed.
// A custom caparison function can be provided as second argument in React.memo function as per business requirements.