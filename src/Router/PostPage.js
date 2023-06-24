import { Link, useParams } from 'react-router-dom'

const PostPage = ({ posts, handleClick }) => {

  const { id } = useParams()
  const post = posts.find((post) => (post.id).toString() === id)
  return (
    <>
      <main className='postPage'>
        <article className='post'>
          {
            post &&
            <>
              <div className="post-text-full">
                <h2>{post.title}</h2>
                <p className='postdate'> {post.datetime}</p>
                <p className='postbody'>
                  {post.body}
                </p>
                <button
                  onClick={() => handleClick(post.id)}
                  className='btnDelte'>
                  Delete Post
                </button>
              </div>
            </>
          }
          {
            !post &&
            <div className="error-page">
              <h2>Page is Not Found</h2>
              <p>Well, that's disappointing  😔</p>
              <Link to="/">Visit Our Home  Page </Link>
            </div>
          }
        </article>
      </main>
    </>
  )
}

export default PostPage