import React, { useState } from 'react'

const initArray = ['Bruce', 'Wayne']

export const ArrayUseState = () => {

    const [persons, setPersons] = useState(initArray)

    const changeArray = () => {
        // Do not make changes directly to persons array, 
        // In doing so, the array changes, but the array reference doesn't
            // persons.push('Clark')
            // persons.push('Kent')
            // setPersons(persons)
        
        // Instead make copy of array and make changes there
        const newPersons = [...persons]
        newPersons.push('Clark')
        newPersons.push('Kent')
        setPersons(newPersons)
    }

    console.log('ArrayUseState rendered.')

    return (
        <div>
            <button onClick={changeArray}>Click</button>
            {
                persons.map((person, index) => <div key={index}>{person}</div>)
            }
        </div>
    )
}
