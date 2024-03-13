import React, {useState} from 'react'

function StateHookCounterThree() {
    const [name, setName] = useState({firstName: '', lastName: ''})

    return (
        <div>
            <lable>FirstName</lable>
                <input value={name.firstName} onChange={e => setName({ ...name, firstName : e.target.value })}></input>
            <lable>LastName</lable>
                <input value={name.lastName} onChange={e=> setName({ ...name, lastName :e.target.value })}></input>
            
            <h3>{JSON.stringify(name)}</h3>
        </div>
    )
}

export default StateHookCounterThree