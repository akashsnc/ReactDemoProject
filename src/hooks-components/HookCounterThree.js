import React, {useState} from 'react'

function HookCounterThree() {
    const [name, setName] = useState({firstName: '', lastName: ''})

    return (
        <div>
            <lable>FirstName</lable>
                <input value={name.firstName} onChange={e => setName({firstName : e.target.value})}></input>
            <lable>LastName</lable>
                <input value={name.lastName} onChange={e=> name.lastName=e.target.value}></input>
            
            <h3>{JSON.stringify(name)}</h3>
        </div>
    )
}

export default HookCounterThree