import React from 'react'

function Count({count, text}) {
    console.log('incrementing ' + text)
    return (
    <div>{text} - {count}</div>
  )
}

export default React.memo(Count)