import React, { useState } from "react";
import { MemoizedChildFive } from "./ChildFive";

const ParentFour = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("React");

  const person = {
    fname : 'Bruce',
    lname : 'Wayne'
  }

  const handleClick = () => {}

  console.log("ParentFour rendered.");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>
        ParentFour: {count}
      </button>
      <button onClick={() => setName("Native")}>Set Name</button>
      {/* <MemoizedChildFive name={name}  person = {person}/> */}
      <MemoizedChildFive name={name}  handleClick = {handleClick}/>
    </div>
  );
};

export default ParentFour;

// Using React memo is not advised because passing down 
// objects and functions will always result in re-rendering of child component.
// Because every time Parent component is re-rendered, a fresh object / function 
// reference is created and passed down to the child component.

// CHECK ParentFive.js FOR SOLUTION