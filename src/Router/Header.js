import React from 'react'

const Header = ({ title, search, setSearch }) => {
  return (
    <>
      <span>
        <h2>{title}</h2>
      </span>
      <div>
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
      </div>
    </>
  )
}

export default Header