import React, { Component } from 'react'

class RefsDemo extends Component {
  constructor(props) {
    super(props)
  
    this.inputRef = React.createRef();
  }

//   componentDidMount() {
//     this.inputRef.current.focus();
//   }

  handleInputFocus = () => {
    this.inputRef.current.focus();
  }

    render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}/>
        <button onClick={this.handleInputFocus}>Focus</button>
      </div>
    )
  }
}

export default RefsDemo