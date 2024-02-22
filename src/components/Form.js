import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           username : '',
           comments : '',
           topic: ''
        }
    }

    handleUsernameChange = event => {
        this.setState({
            username : event.target.value
        })
    }

    handleCommentsChange = event => {
        this.setState({
            comments : event.target.value
        })
    }
    
    handleTopicChange = event => {
        this.setState({
            topic : event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.username}, ${this.state.comments}, ${this.state.topic}`);
        event.preventDefault();
    }

    render() {
        const {username, comments, topic} = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>Username</label>
                <input type='text' value={username} onChange={this.handleUsernameChange}></input><br/>
                <label>Comments</label>
                <textarea type='text' value={comments} onChange={this.handleCommentsChange}></textarea><br/>
                <select value={topic} onChange={this.handleTopicChange}>
                    <option value='react'>React</option>
                    <option value='angular'>Angular</option>
                    <option value='vue'>Vue</option>
                </select><br/>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form