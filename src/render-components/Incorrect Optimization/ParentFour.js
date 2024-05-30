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

// Using React memo is not advised in scenarios where objects and functions are passed down as props.
// A new reference is created for objects and functions which will always result in re-rendering of child component.

// CHECK ParentFive.js FOR SOLUTION