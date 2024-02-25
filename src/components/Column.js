import React from 'react'

function Column() {
    const names = [
        { firstName: 'Akash', lastName: 'Suman' },
        { firstName: 'Karun', lastName: 'Verma' },
        { firstName: 'Sudhir', lastName: 'Bhatt' },
        { firstName: 'Tanuj', lastName: 'Sharma' }
    ];
    
  return (
    <React.Fragment>
        {
            names.map(name => (
                <tr key={name.firstName}>
                    <td>{name.firstName}</td>
                    <td>{name.lastName}</td>
                </tr>
            ))
        }
    </React.Fragment>
  )
}

export default Column