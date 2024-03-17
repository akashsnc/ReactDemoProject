import React, { useState, useMemo } from "react";

function MemoHook() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementCounterOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementCounterTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  // Even isEven method is linked with Counter One, yet Counter Two get slow response due to isEven method
  // useCallback caches the function itself until the dependent object changes.
  const isEven = () => {
    let i = 0;
    while (i < 1000000000) i++;
    return counterOne % 2 === 0;
  };

  // useMemo hook executes and caches the response for future use until the dependent object changes
  // Therefore isEven method whill not be evaluated when CounterTwo button is pressed
  const isEvenCallback = useMemo(isEven, [counterOne])

  return (
    <div>
      <div>
        <button onClick={incrementCounterOne}>CounterOne - {counterOne}</button>
        <span>{isEvenCallback ? ' Even' : ' Odd'}</span>
      </div>
      <div>
        <button onClick={incrementCounterTwo}>CounterTwo - {counterTwo}</button>
      </div>
    </div>
  );
}

export default MemoHook;
