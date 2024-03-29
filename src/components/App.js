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
import FragmentDemo from './components/FragmentDemo';
import ParentComp from './components/ParentComp';
import Table from './components/Table';
import RefsDemo from './components/RefsDemo';
import InputFocus from './components/InputFocus';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import CounterTwo from './components/CounterTwo';
import UserContext from './components/UserContext';
import ComponentA from './components/ComponentA'
import {UserProvider} from './components/UserContext'

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
        {/* <LifecycleA/> */}
        {/* <FragmentDemo/> */}
        {/* <Table/> */}
        {/* <ParentComp/> */}
        {/* <RefsDemo /> */}
        {/* <InputFocus /> */}
        {/* <PortalDemo/> */}

        {/* <ErrorBoundary>
          <Hero heroName="Superman"/>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Hero heroName="Batman"/>
        </ErrorBoundary>
        
        {/* Each error-prone component should be wrapped with Error boundary component */}
        {/*<ErrorBoundary>
          <Hero heroName="Joker"/>
        </ErrorBoundary> */}

        {/* <ClickCounter name='Akash'/>
        <HoverCounter name='Suman'/> */}
        {/* <ClickCounterTwo/>
        <HoverCounterTwo/> */}
        {/* <CounterTwo render={(count, incrementCount) => 
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
        } />
        <CounterTwo render={(count, incrementCount) => 
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        } /> */}
        <UserProvider value="Akash">
          <ComponentA/>
        </UserProvider>
    </div>
  );
}

export default App;
