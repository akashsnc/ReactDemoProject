import React, { Component, PureComponent } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Akash'
      }
    }

    componentDidMount() {
        setInterval(() => this.setState({ name: 'Akash' }) , 2000);
    }

  render() {
    console.log('***************Parent Component Rendered*****************')
    return (
      <div>
        Parent Component
        {/* <RegularComp name={this.state.name}/>
        <PureComp name={this.state.name}/> */}
        <MemoComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp