import React, { Component } from 'react'

class GreetUser extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn : false
    }
  }

  render() {
      // 1. Rendering using if/else
      // if(this.state.isLoggedIn)
      //   return <div>Welcome Akash</div>
      // else
      //   return <div>Welcome User</div>


      // 2. Rendering using Variable
      // let message;
      // if(this.state.isLoggedIn)
      //   message = <div>Welcome Akash</div>
      // else
      //   message = <div>Welcome User</div>

      // return <div>{message}</div>


      // 3. Rendering using Ternary operator
      // return this.state.isLoggedIn ?
      //   <div>Welcome Akash</div> :
      //   <div>Welcome User</div>

      // 4. Rendering using Short circuit operator
      return this.state.isLoggedIn && <div>Welcome Akash</div>
  }
}

export default GreetUser;