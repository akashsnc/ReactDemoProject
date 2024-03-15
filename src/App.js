import './App.css';
import React from 'react';
import EffectHookCounter from './hooks-components/EffectHookCounter';
import EffectHookMouse_Mount from './hooks-components/EffectHookMouse_Mount';
import EffectHookMouse_UnmountComponent from './hooks-components/EffectHookMouse_UnmountComponent';
import EffectIntervalHookCounter from './hooks-components/EffectIntervalHookCounter';
import StateHookCounter from './hooks-components/StateHookCounter';
import StateHookCounterFour from './hooks-components/StateHookCounterFour';
import StateHookCounterThree from './hooks-components/StateHookCounterThree';
import StateHookCounterTwo from './hooks-components/StateHookCounterTwo';
import EffectHookHttpGetAllPosts from './http-components/EffectHookHttpGetAllPosts';
import EffectHookHttpGetPost from './http-components/EffectHookHttpGetPost';
import ContextHook from './hooks-components/ContextHook';
import ReducerHookCounter from './hooks-components/ReducerHookCounter';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

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
        {/* <EffectIntervalHookCounter/> */}
        {/* <EffectHookHttpGetAllPosts/> */}
        {/* <EffectHookHttpGetPost/> */}
        {/* <UserContext.Provider value='Akash'>
            <ChannelContext.Provider value= 'React'>
              <ContextHook />
            </ChannelContext.Provider>
        </UserContext.Provider> */}
        <ReducerHookCounter />
    </div>
  );
}

export default App;
