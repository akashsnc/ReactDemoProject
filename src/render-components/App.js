import "./App.css";
import React from "react";
import UseState from "./UseState/UseState";
import UseReducer from "./UseReducer/UseReducer";
import ObjectUseState from "./Immutable State/ObjectUseState";
import { ArrayUseState } from "./Immutable State/ArrayUseState";
import Parent from "./Parent Child/Parent";
import ParentOne from "./Optimization/ParentOne";
import ChildOne from "./Optimization/ChildOne";
import { GrandParent } from "./Optimization/GrandParent";
import ParentTwo from "./Optimization/ParentTwo";
import ParentThree from "./Incorrect Optimization/ParentThree";
import ParentFour from "./Incorrect Optimization/ParentFour";
import ParentFive from "./Incorrect Optimization/ParentFive";
import { ContextParent } from "./context/ContextParent";
import { ChildA } from "./context/ContextChildren";

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
      {/* <ParentTwo /> */}
      {/* <ParentThree /> */}
      {/* <ParentFour /> */}
      {/* <ParentFive /> */}
      {/*<ContextParent />*/} {/*Solution one */}
      <ContextParent >
        <ChildA />            {/*Solution two */}
      </ContextParent>      
    </div>
  );
}

export default App;
