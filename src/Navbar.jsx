import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="nav">
            <ul className="nav-ul">
                <li className="nav-li"><img src="https://www4.gogoanimes.fi/img/icon/logo.png" alt="" /></li>
                <li className="nav-li">HOME</li>
                <li className="nav-li">ANIME LIST</li>
                <li className="nav-li">NEW SEASON</li>
                <li className="nav-li">MOVIES</li>
                <li className="nav-li">POPULAR</li>
                <li className="nav-li">
                <div className="search-container">
                        <input type='text' placeholder='Search...' className='search-box'></input>
                        <div className="search-icon">
                        <svg width="16px" height="16px" viewBox="0 0 24 24" fill="yellow" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="yellow" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                        </div>
                        </div>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar