import Header from './Header'
import { Link } from 'react-router-dom'

const Nav = ({ search, setSearch }) => {

  return (
    <>
      <nav className='nav-bar'>
        <Header title='FLIPKART' />
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
    </>
  )
}

export default Nav