import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import GreetUser from './components/GreetUser';
import PersonList from './components/PersonList';
import ArrayIndex from './components/ArrayIndex';
import StyleSheets from './components/StyleSheets';
import Inline from './components/Inline';
import './components/appStyles.css'
import styles from './components/appStyles.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA';

function App() {
  return (
    <div className="App">
      {/* <Greet name='Bruce' heroName='Batman'>
        <p>This is children props</p>
      </Greet>
      <Greet name='Clark' heroName='Superman'>
        <button>Action</button>
      </Greet>*/}
      {/* <Greet name='Diana' heroName='Wonder Woman'/>  */}

      {/* <Welcome name='Bruce' heroName='Batman'/> */}
      {/* <Welcome name='Clark' heroName='Superman'/> */}
      {/* <Welcome name='Diana' heroName='Wonder Woman'/>  */}
      {/* <Hello/> */}
      {/* <Message/> */}
      {/* <Counter/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
      {/* <GreetUser/> */}
      {/* <PersonList/> */}
      {/* <ArrayIndex/> */}
      {/* <StyleSheets primary={true}/> */}
      {/* <Inline/>
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Form/> */}
      <LifecycleA/>
    </div>
  );
}

export default App;
