import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {

    render() {
        const { name, count, incrementCount } = this.props

        return (
            <div>
                <button onMouseOver={incrementCount}>{name} hovered {count} times</button>
            </div>
        )
    }
}

export default withCounter(HoverCounter, 5)