import React, {useEffect, useState} from 'react'
import axios from 'axios'

function EffectHookHttpGetPost() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [postId, setPostId] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
              console.log(response.data)
              setPost(response.data)
            })
            .catch(error => console.log(error.message))
    }, [postId])

  return (
    <div>
      <label htmlFor='_id'>Post Id: </label><input id='_id' type='number' value={id} onChange={(e) => setId(e.target.value)}/>
      <button type='button' onClick={() => setPostId(id)}>Fetch Post</button>
      <h3>{post.title}</h3>
    </div>
  )
}

export default EffectHookHttpGetPost