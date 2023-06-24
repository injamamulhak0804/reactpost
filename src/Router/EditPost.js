import React, {useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditPost = ({ editTitle, setEditTitle, editBody, setEditBody, posts, handleEdit }) => {
  const { id } = useParams()
  const post = posts.find(post => (post.id).toString() === id)

  useEffect(() => {
    if (post) {
      setEditTitle(post.title)
      setEditBody(post.body)
    }
  }, [post, setEditTitle, setEditBody])

  return (
    <>
      <div className="NewPost">
        <h2 className='edit-header'>Edit Post</h2>
      <form className='input-form' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="postTitle">Title:</label>
        <input
          type="text"
          className='input'
          id='postTitle'
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <label htmlFor="postbody">Post: </label>
        <textarea
          id="postbody"
          value={editBody}
          onChange={(e) => setEditBody(e.target.value)}>
        </textarea>
        <button type='submit' className='btn' onClick={() => handleEdit(post.id)}>Submit</button>
      </form>
    </div >
    </>
  )
}

export default EditPost