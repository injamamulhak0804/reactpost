import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import NewPost from './NewPost'
import Error from './Error'
import Nav from './Nav'
import PostPage from './PostPage'
import './Router.css'
import { useState, useEffect } from "react";
import { format } from "date-fns"
import { useNavigate } from "react-router-dom";

const Parent = () => {

  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem("todos")) || [])
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const navigate = useNavigate('')

  //input for post
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const datetime = format(new Date(), 'MMM dd, yyyy pp');
    const set = { id, title: postTitle, datetime, body: postBody }
    const newItem = [...posts, set]
    setPosts(newItem)
    localStorage.setItem("todos", JSON.stringify(newItem))
    setSearch("")
    setPostTitle('')
    setPostBody('')
    setSearch("")
    setPostTitle('')
    setPostBody('')
    navigate("/")
  }

  // search 

  useEffect(() => {
    // const data = JSON.parse(localStorage.getItem("to_do_list"))
    // setPosts(data)
  const FilterResult = posts.filter((post) =>
    (post.body).toLowerCase().includes(search.toLowerCase()) ||
    (post.title).toLowerCase().includes(search.toLowerCase())
  )
  setSearchResult(FilterResult.reverse())
    console.log(FilterResult);
  }, [posts, search])

  // Delete a Post

  const handleClick = (e) => {
    console.log(e);
    try {
      const filterpost = posts.filter((post) => post.id !== e)
      setPosts(filterpost)
      localStorage.setItem("todos", JSON.stringify(filterpost))
      navigate('/')
    }
    catch (err) {
      console.log(err.message);
    }
  }


  return (
    <>
      <div className="App">
        <Nav
          search={search}
          setSearch={setSearch}
        />
        <Routes>
          <Route path='/'
            element={<Home
              posts={searchResult}
            />}
          />

          <Route path='post' >
            <Route
              index element={<NewPost
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postBody={postBody}
                setPostBody={setPostBody}
                handleSubmit={handleSubmit}
              />}
            />
            <Route
              path=":id"
              element={<PostPage
                posts={posts}
                handleClick={handleClick}
              />}
            />
          </Route>

          <Route path='about'
            element={<About />}
          />
          <Route path='PostPage'
            element={<PostPage
              posts={posts}
              handleClick={handleClick}
            />}
          />
          <Route path='*'
            element={<Error />}
          />
        </Routes>
      </div>
    </>
  )
}

export default Parent




