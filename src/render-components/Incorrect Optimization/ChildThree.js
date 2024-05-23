import React from 'react'

export function ChildThree({children,name}) {
    console.log('ChildThree rendered.')
  return (
    <div>{children} {name}</div>
  )
}

export const MemoizedChildThree = React.memo(ChildThree)