import './App.css';
import React, {useReducer} from 'react';
import EffectHookCounter from './EffectHookCounter';
import EffectHookMouse_Mount from './EffectHookMouse_Mount';
import EffectHookMouse_UnmountComponent from './EffectHookMouse_UnmountComponent';
import EffectIntervalHookCounter from './EffectIntervalHookCounter';
import StateHookCounter from './StateHookCounter';
import StateHookCounterFour from './StateHookCounterFour';
import StateHookCounterThree from './StateHookCounterThree';
import StateHookCounterTwo from './StateHookCounterTwo';
import EffectHookHttpGetAllPosts from '../http-components/EffectHookHttpGetAllPosts';
import EffectHookHttpGetPost from '../http-components/EffectHookHttpGetPost';
import ContextHook from './ContextHook';
import ReducerHookCounter from './ReducerHookCounter';
import ReducerHookCounterComplex from './ReducerHookCounterComplex';
import ReducerHookCounterMultiple from './ReducerHookCounterMultiple';
import ContextReducerHookB from './ContextReducerHookB';
import ContextReducerHookA from './ContextReducerHookA';
import EffectStateHookAPI from './EffectStateHookAPI';
import EffectReducerHookAPI from './EffectReducerHookAPI';
import CallbackHook from './CallbackHook';
import MemoHook from './MemoHook';
import RefHookFocusInput from './RefHookFocusInput';
import RefHookIntervalTimer from './RefHookIntervalTimer';
import CustomHookDocTitleOne from './CustomHookDocTitleOne';
import CustomHookDocTitleTwo from './CustomHookDocTitleTwo';
import CustomHookCounterOne from './CustomHookCounterOne';
import CustomHookCounterTwo from './CustomHookCounterTwo';
import CustomHookInputForm from './CustomHookInputForm';

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
        <CustomHookInputForm/>
    </div>
  );
}

export default App;
