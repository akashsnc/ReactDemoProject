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
import ParentThree from "./render-components/Incorrect Optimization/ParentThree";
import ParentFour from "./render-components/Incorrect Optimization/ParentFour";
import ParentFive from "./render-components/Incorrect Optimization/ParentFive";
import { ContextParent } from "./render-components/context/ContextParent";
import { ChildA } from "./render-components/context/ContextChildren";

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
