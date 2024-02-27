import React, { Component } from 'react'
import Input from './Input';

class InputFocus extends Component {
    constructor(props) {
        super(props)
      
        this.componentRef = React.createRef();
      }
    
      handleButtonRef = () => {
        this.componentRef.current.handleInputFocus();
      }
    
        render() {
        return (
          <div>
            <Input ref={this.componentRef} />
            <button onClick={this.handleButtonRef}>Focus</button>
          </div>
        )
      }
}

export default InputFocus