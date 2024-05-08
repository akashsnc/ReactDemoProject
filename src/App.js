import "./App.css";
import React from "react";
import UseState from "./render-components/UseState/UseState";
import UseReducer from "./render-components/UseReducer/UseReducer";
import ObjectUseState from "./render-components/Immutable State/ObjectUseState";
import { ArrayUseState } from "./render-components/Immutable State/ArrayUseState";
import Parent from "./render-components/Parent Child/Parent";
import ParentOne from "./render-components/Optimization/ParentOne";
import ChildOne from "./render-components/Optimization/ChildOne";
import { GrandParent } from "./render-components/Optimization/GrandParent";
import ParentTwo from "./render-components/Optimization/ParentTwo";

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}
      {/* <Parent /> */}
      {/* <ParentOne> 
        <ChildOne />
      </ParentOne> */}
      {/* <GrandParent /> */}
      <ParentTwo />
    </div>
  );
}

export default App;
