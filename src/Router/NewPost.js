import React from 'react'


const NewPost = ({ postTitle, setPostTitle, postBody, setPostBody, handleSubmit }) => {
 
  return (
    <>
      <main>
        <div className="NewPost">
          <h2 className='sub-header'>Add New Post</h2>
          <form className='input-form' onSubmit={handleSubmit}>
            <label htmlFor="postTitle">Title</label> 
            <input
            className='input'
              type="text"
              id="postTitle"
              value={postTitle}
              required
              onChange={(e) => setPostTitle(e.target.value)}
            /> <br />
            <label htmlFor="postBody">Post Body</label>
            <textarea
              type="text"
              id="postBody"
              required
              value={postBody}
              onChange={(e) => setPostBody(e.target.value)}
            />
            <button className='btn' type='submit'>Submit</button>
          </form>
        </div>
      </main>
    </>
  )
}

export default NewPost