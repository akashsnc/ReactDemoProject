import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError : false
      }
    }

    // Implementing any of the two below mwthods will turn this component into error boundary.
    // It thus can wrap error-prone components to prohibit from rendering UI.
    static getDerivedStateFromError(error) {
        return {
            hasError : true
        }
    }

    // Note: Error Boundaries catch error during 'Rendering', 'In Life cycle methods', and in 
    //      'constructors of the whole tree below them'
    componentDidCatch(error, info) {
        console.log(info)
    }
  
    render() {
        if(this.state.hasError)
            return <h2>Something went wrong!</h2>
        else
            return this.props.children;            
  }
}

export default ErrorBoundary