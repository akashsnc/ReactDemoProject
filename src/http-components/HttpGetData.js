import React, { Component } from 'react'
import axios from 'axios'

class HttpGetData extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         errorMsg: null
      }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => this.setState({posts : response.data}))
            .catch(error => this.setState({errorMsg : 'Error has occured'}))
    }

    render() {
        const { posts, errorMsg } = this.state

        return (
        <div>
            <h2>List of Items</h2>
            <ul>
               {
                    posts.length ?
                    posts.map(post => <li id={post.id}>{post.title}</li>) : 
                    null
               }
            </ul>
            <h3>
                {
                    errorMsg ? errorMsg : null
                }
            </h3>
        </div>
        )
    }
}

export default HttpGetData