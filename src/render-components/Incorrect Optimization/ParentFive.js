import React, { useState } from "react";
import { MemoizedChildFive } from "./ChildFive";

const ParentFive = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("React");

  const person = {
    fname : 'Bruce',
    lname : 'Wayne'
  }

  const handleClick = () => {}

  console.log("ParentFive rendered.");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>
        ParentFive: {count}
      </button>
      <button onClick={() => setName("Native")}>Set Name</button>
      {/* <MemoizedChildFive name={name}  person = {person}/> */}
      <MemoizedChildFive name={name}  handleClick = {handleClick}/>
    </div>
  );
};

export default ParentFive;