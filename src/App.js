import './App.css';
import EffectHookCounter from './hooks-components/EffectHookCounter';
import EffectHookMouse_Mount from './hooks-components/EffectHookMouse_Mount';
import EffectHookMouse_UnmountComponent from './hooks-components/EffectHookMouse_UnmountComponent';
import EffectIntervalHookCounter from './hooks-components/EffectIntervalHookCounter';
import StateHookCounter from './hooks-components/StateHookCounter';
import StateHookCounterFour from './hooks-components/StateHookCounterFour';
import StateHookCounterThree from './hooks-components/StateHookCounterThree';
import StateHookCounterTwo from './hooks-components/StateHookCounterTwo';

function App() {
  return (
    <div className="App">
        {/* <StateHookCounter/> */}
        {/* <StateHookCounterTwo/> */}
        {/* <StateHookCounterThree /> */}
        {/* <StateHookCounterFour/> */}
        {/* <EffectHookCounter/> */}
        {/* <EffectHookMouse_Mount/> */}
        {/* <EffectHookMouse_UnmountComponent /> */}
        <EffectIntervalHookCounter/>
    </div>
  );
}

export default App;
