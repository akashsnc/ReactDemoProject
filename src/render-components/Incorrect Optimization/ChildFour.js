import React from "react";

export const ChildFour = ({ name }) => {
  const time = new Date();
  console.log("ChildFour rendered.");
  return (
    <div>
      Hello {name}. Current time: {time.getHours()}:{time.getMinutes()}:
      {time.getSeconds()}
    </div>
  );
};

export const MemoizedChildFour = React.memo(ChildFour);

// Using Memoized version of ChildFour component restricts the time from being updated
// when parent component is being re-renderIntoDocument.
// Always make sure to understand the use-case before incorrectly using the React Memo.
