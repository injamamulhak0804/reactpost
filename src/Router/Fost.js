import React from 'react'
import { Link } from 'react-router-dom'

const Fost = ({ post }) => {
    return (
        <>
                <div className='post'>
                    <div className="posttext">
                        <Link to={`post/${post.id}`}>
                            <h2>{post.title}</h2>
                            <p className='postdate'> {post.datetime}</p>
                        </Link>
                        <p className='postbody'>
                            {(post.body).length <= 25 ? post.body : `${(post.body).slice(0, 25)}...`}
                        </p>
                    </div>
                </div>
           
        </>
    )
}

export default Fost