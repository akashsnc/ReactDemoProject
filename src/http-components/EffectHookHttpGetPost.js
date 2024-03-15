import React, {useEffect, useState} from 'react'
import axios from 'axios'

function EffectHookHttpGetPost() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => setPost(response.data))
            .catch(error => console.log('Error has occured'))
    }, [])

  return (
    <div>
      <h3>{post.title}</h3>
    </div>
  )
}

export default EffectHookHttpGetPost