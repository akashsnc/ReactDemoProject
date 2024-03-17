import React, {useState, useCallback} from 'react'
import Count from './Count'
import Button from './Button'

function CallbackHook() {
    const [age, setAge] = useState(20)
    const [salary, setSalary] = useState(50000)
    // increment Age Button refreshes even when update Salary button is clicked & vise versa
    // To stop this behavior wrap the logic in useCallback hook and bind with an object
    // The component will update only when the bound object changes
    
    const incrementAge = useCallback(() => setAge(age + 1), [age]) //old code: () => setAge(age + 1)

    const incrementSalary = useCallback(() => setSalary(salary + 1000), [salary]) //() => setSalary(salary + 1000)

  return (
    <div>
        <h2>useCallback Hook</h2>
        <Count count={age} text='Age'/>
        <Count count={salary} text='Salary'/>
        <Button handleClick={incrementAge} text='Increment Age'/>
        <Button handleClick={incrementSalary} text='Increment Salary'/>
    </div>
  )
}

export default CallbackHook