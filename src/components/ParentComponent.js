import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
constructor(props) {
  super(props)

  this.state = {
     message : 'Parent'
  }

//   Event Binding to this keyword
//   this.hello = this.hello.bind(this)
}
    // hello(child) {
    //     alert(`Hello ${this.state.message} from ${child}`)
    // }
    
    hello = (child) => alert(`Hello ${this.state.message} from ${child}`)

  render() {
    return (
      <div>
        <ChildComponent clickHandler={this.hello}/>
      </div>
    )
  }
}

export default ParentComponent