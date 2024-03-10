import React, { Component } from 'react'
import ComponentC from './ComponentC'
import UserContext from './UserContext'

class ComponentB extends Component {
  // Context can be set in a class by 2 methods
  // [A] By declaring static contextType
static contextType = UserContext

  render() {
    return (
      <div>
        ComponentB: {this.context}
        <ComponentC/>
      </div>
    )
  }
}

// [B] By setting class contextType outside class boundary
// ComponentB.contextType = UserContext
export default ComponentB


// N.B. This method of context binding only works with class components & limited to 1 context only