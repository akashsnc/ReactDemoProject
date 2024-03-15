import React, {useEffect, useState} from 'react'
import axios from 'axios'

function EffectHookHttpGetAllPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setPosts(response.data))
            .catch(error => console.log('Error has occured'))
    }, [])

  return (
    <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  )
}

export default EffectHookHttpGetAllPosts