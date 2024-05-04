import "./App.css";
import React from "react";
import UseState from "./render-components/UseState/UseState";
import UseReducer from "./render-components/UseReducer/UseReducer";
import ObjectUseState from "./render-components/Immutable State/ObjectUseState";
import { ArrayUseState } from "./render-components/Immutable State/ArrayUseState";

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState /> */}
      <ArrayUseState />
    </div>
  );
}

export default App;
