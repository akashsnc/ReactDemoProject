import React, { Component } from 'react';

class Welcome extends Component {

    render() {
        // Destructuring Prop in Class Component
        const {name, heroName} = this.props;

        return <h1>Welcome {name} i.e. {heroName}</h1>
    }
}

export default Welcome;