import React from 'react'

function Person({Person}) {
  return (
    <div>
        <h3>I am {Person.name}. I am {Person.age} years young. I know {Person.skill}.</h3>
    </div>
  )
}

export default Person;