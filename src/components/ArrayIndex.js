import React from 'react'

function ArrayIndex() {
    const names = ['Bruce', 'Diana', 'Clark', 'Bruce'];

    const nameList = names.map((name, index) => <h3 key={index}>{index} {name}</h3>);
  return (
    <div>{nameList}</div>
  )
}

export default ArrayIndex