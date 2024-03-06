import React from 'react'

const withCounter = (WrappedComponent, incrementValue) => {
    class WithCounter extends React.Component {
        
        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
          }
      
          incrementCount = () => {
              this.setState(prevState => {
                  return {count : prevState.count + incrementValue}
              })
          }

          render() {
            // Pass down the props provided by App component to WrappedComponent using Spread operator
            // Aditionally add some props acc. to business logic e.g. count variable & incrementCount method 
              return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props}/>
          }
    }
    return WithCounter
}

export default withCounter