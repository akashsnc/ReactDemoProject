import React, { Component } from 'react'
import axios from 'axios'

class HttpPostData extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = e => this.setState({ [e.target.name]: e.target.value })

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    render() {
        const { userId, title, body } = this.state
        return (
            <div>Form Data
                <form onSubmit={this.submitHandler}>
                    <div><input type='text' name='userId' value={userId} onChange={this.changeHandler} placeholder='userId'></input></div>
                    <div><input type='text' name='title' value={title} onChange={this.changeHandler} placeholder='title'></input></div>
                    <div><input type='text' name='body' value={body} onChange={this.changeHandler} placeholder='body'></input></div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default HttpPostData