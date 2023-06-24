import React from 'react'
import Feed from './Feed'

const Home = ({ posts }) => {
  return (
    <main>
      {
      (posts.length ? <Feed posts={posts} /> : <p className='no-post'>No Post to display</p>)
      }
    </main>
  )
}

export default Home