import './App.css';
import HookCounter from './hooks-components/HookCounter';
import HookCounterThree from './hooks-components/HookCounterThree';
import HookCounterTwo from './hooks-components/HookCounterTwo';

function App() {
  return (
    <div className="App">
        {/* <HookCounter/> */}
        {/* <HookCounterTwo/> */}
        <HookCounterThree />
    </div>
  );
}

export default App;
