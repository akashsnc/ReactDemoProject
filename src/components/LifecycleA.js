import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Akash'
      }
      console.log('LifecycleA constructor')
    }

static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStatusFromProps');
    return null;
}

componentDidMount() {
    console.log('LifecycleA componentDidMount')
}

shouldComponentUpdate() {
    console.log('LifecycleA shouldComponentUpdate')
    return true;
}

getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleA getSnapshotBeforeUpdate');
    return null;
}

componentDidUpdate() {
    console.log('LifecycleA componentDidUpdate');
}

handleStateChange = () => {
    this.setState({
        name: 'Akash Suman'
    })
}

  render() {
    console.log('LifecycleA render')
    return (
        <div>
            <div>LifecycleA</div>
            <button onClick={this.handleStateChange}>Change State</button>
            <LifecycleB/>
        </div>
    )
  }
}

export default LifecycleA