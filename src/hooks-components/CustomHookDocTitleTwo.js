import React, { useState } from "react";
import useDocumentTitle from '../hooks/useDocumentTitle'

function CustomHookDocTitleTwo() {
  const [count, setCount] = useState(0);

  useDocumentTitle(count)

  return (
    <div>
      <button onClick={() => setCount(count + 5)}>Count {count}</button>
    </div>
  );
}

export default CustomHookDocTitleTwo;
