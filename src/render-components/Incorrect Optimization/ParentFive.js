import React, { useState, useMemo, useCallback } from "react";
import { MemoizedChildFive } from "./ChildFive";

const ParentFive = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("React");

  const person = {
    fname: 'Bruce',
    lname: 'Wayne'
  }
  const memoizedPerson = useMemo(() => person, []);
  const handleClick = () => { }
  const memoizedHandleClick = useCallback(handleClick, []);

  console.log("ParentFive rendered.");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>
        ParentFive: {count}
      </button>
      <button onClick={() => setName("React Native")}>Set Name</button>
      {/* <MemoizedChildFive name={name}  person = {memoizedPerson}/> */}
      <MemoizedChildFive name={name} handleClick={memoizedHandleClick} />
    </div>
  );
};

export default ParentFive;

// Passing down a memoized object will not let child component re-render needlessly.
// Passing down a memoized function created using a useCallback hook will prevent unnecessary child re-renders.