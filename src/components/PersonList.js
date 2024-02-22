import React from 'react'
import Person from './Person'

function PersonList() {
    const Persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 28,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 30,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 35,
            skill: 'Vue'
        }
    ]
    
    // Each child in a list should have a unique "key" prop.
    const PersionList = Persons.map(person => <Person key={person.id} Person={person} />);
    return <div>{PersionList}</div>;
}

export default PersonList;