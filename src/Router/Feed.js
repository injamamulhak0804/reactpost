import React from 'react'
import Fost from './Fost'

const Feed = ({ posts }) => {
    return (
        <>
            {posts.map(post => (
                <Fost key={post.id} post={post} />
            ))
            }
        </>
    )
}
export default Feed