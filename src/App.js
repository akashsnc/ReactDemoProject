import './App.css';
import React, {useReducer} from 'react';
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
import ReducerHookCounterComplex from './hooks-components/ReducerHookCounterComplex';
import ReducerHookCounterMultiple from './hooks-components/ReducerHookCounterMultiple';
import ContextReducerHookB from './hooks-components/ContextReducerHookB';
import ContextReducerHookA from './hooks-components/ContextReducerHookA';
import EffectStateHookAPI from './hooks-components/EffectStateHookAPI';
import EffectReducerHookAPI from './hooks-components/EffectReducerHookAPI';
import CallbackHook from './hooks-components/CallbackHook';
import MemoHook from './hooks-components/MemoHook';
import RefHookFocusInput from './hooks-components/RefHookFocusInput';
import RefHookIntervalTimer from './hooks-components/RefHookIntervalTimer';
import CustomHookDocTitleOne from './hooks-components/CustomHookDocTitleOne';
import CustomHookDocTitleTwo from './hooks-components/CustomHookDocTitleTwo';
import CustomHookCounterOne from './hooks-components/CustomHookCounterOne';
import CustomHookCounterTwo from './hooks-components/CustomHookCounterTwo';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const CountContext = React.createContext()
const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)

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
        {/* <ReducerHookCounter /> */}
        {/* <ReducerHookCounterComplex /> */}
        {/* <ReducerHookCounterMultiple /> */}
        {/* <CountContext.Provider value={{count: count, dispatch: dispatch}}>
          <h2>Global Context & State management</h2>
          <ContextReducerHookA/>
          <ContextReducerHookB/>
        </CountContext.Provider> */}
        {/* <EffectStateHookAPI/> */}
        {/* <EffectReducerHookAPI/> */}
        {/* <CallbackHook /> */}
        {/* <MemoHook/> */}
        {/* <RefHookFocusInput/> */}
        {/* <RefHookIntervalTimer/> */}
        {/* <CustomHookDocTitleOne />
        <CustomHookDocTitleTwo /> */}
        {/* <CustomHookCounterOne />
        <CustomHookCounterTwo /> */}
    </div>
  );
}

export default App;
