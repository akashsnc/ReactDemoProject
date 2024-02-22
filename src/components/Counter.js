import React, { Component } from 'react'

class Counter extends Component {
    
    constructor() {
        super();
        // Always assign value of state in constructor
        this.state = {
            count: 0
        };
    }

    increment() {
        // Do Not use current state (incorrect value due to Async call)
        //this.setState(() => ({ count: this.state.count+1 })); 

        // Instead Always use previous state to get updated value
       
        // Additional callback function can be added to perform action after setting the state
       // this.setState((prevState) => ({ count: prevState.count+1 }), () => console.log(this.state.count));
       
       // Additional props is availabe for functionality
       this.setState((prevState, props) => ({ count: prevState.count+1 }), () => console.log(this.state.count));
    }

    incrementByFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

  render() {
    return (
        <div>
            <div>Count: {this.state.count}</div>
            <button onClick={() => this.incrementByFive()}>Increment</button>
        </div>
    )
  }
}

export default Counter