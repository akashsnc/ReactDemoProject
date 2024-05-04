import React, { useState } from 'react'

const initState = {
    fname: 'Bruce',
    lname: 'Wayne'
}

export default function ObjectUseState() {

    const [person, setPerson] = useState(initState)

    const changeName = () => {
        // Do not make changes directly to person object, 
        // In doing so, the object changes, but the object reference doesn't
            // person.fname = 'Clark'
            // person.lname = 'Kent'
            // setPerson(person)

        // Instead make copy of object and make change there
        const newPerson = {...person}
        newPerson.fname = 'Clark'
        newPerson.lname = 'Kent'
        setPerson(newPerson)
    }

    console.log('ObjectUseState rendered.')

    return (
        <div>
            <button onClick={changeName}>{person.fname} {person.lname}</button>
        </div>
    )
}
