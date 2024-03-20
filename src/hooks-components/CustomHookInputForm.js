import React from "react";
import useInput from "../hooks/useInput";

function CustomHookInputForm() {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello '${firstName} ${lastName}'`);

    resetFirstName();
    resetLastName();
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <input {...bindFirstName} type="text" placeholder="First Name" />
      </div>
      <div>
        <input {...bindLastName} type="text" placeholder="Last Name" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CustomHookInputForm;
