import Header from './Header'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { useRef, useState } from 'react'


const Nav = ({ search, setSearch }) => {

  const nav = useRef()


  const handlenav = () =>{
    const sideNav = document.querySelector('.side-nav');
    const btnnav = document.querySelector('#btnNav');
    const overlayScreen = document.querySelector('.nav-overlay');

    btnnav.addEventListener('click', () => {
      sideNav.classList.add('open');
    });
    overlayScreen.addEventListener('click', () => {
      sideNav.classList.remove('open');
    });
  }


  return (
    <>
      {/* <div className="wrapper">
        <nav ref={nav} className='nav-bar'>
          <Header title='POSTS_APP' />
          <form className='form-control'>
            <label htmlFor="search">Search</label>
            <input
              type="text"
              name="search"
              id="search"
              value={search}
              className='search'
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
          <ul className='list-link'>
            <li className='link'><Link to='/'>Home</Link></li>
            <li className='link'><Link to='post'>Post</Link></li>
            <li className='link'><Link to='about'>About</Link></li>
          </ul>
        </nav>
        <button onClick={handleToogle} className="menu">
          <FaBars />
        </button>
      </div> */}

      <div class="header">
        <Header title='POSTS_APP'
          setSearch={setSearch}
          search={search}
        />
        <button class="header-btn" type="button" onClick={handlenav} id="btnNav">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
      <div class="side-nav" ref={nav}>
        <div class="links">
          <li className='link active'><Link to='/'>Home</Link></li>
          <li className='link'><Link to='post'>Post</Link></li>
          <li className='link'><Link to='about'>About</Link></li>
        </div>
        <div class="nav-overlay"></div>
      </div>
      {/* <div class="content">
        <h2>Pages title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quam accusamus ab minima nihil, libero
          consequatur earum distinctio aliquam doloremque quos ut quod consectetur doloribus quisquam aperiam ratione
          nam delectus dignissimos eveniet deleniti eos? Rerum impedit corporis dicta tempora, minus perspiciatis
          eaque nobis temporibus omnis assumenda.
        </p>
      </div> */}
    </>
  )
}

export default Nav