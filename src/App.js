import "./App.css";
import React from "react";
import UseState from "./render-components/UseState/UseState";
import UseReducer from "./render-components/UseReducer/UseReducer";

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      <UseReducer />
    </div>
  );
}

export default App;
