import React from "react";

export const ChildFive = ({name}) => {
  console.log("ChildFive rendered.");
  return <div>Hello {name}</div>;
};

export const MemoizedChildFive = React.memo(ChildFive);
