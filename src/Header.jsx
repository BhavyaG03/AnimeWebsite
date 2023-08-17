import React from 'react'

const Header = () => {
  return (
    <div className='header-container'>
        <div className='userLogin'>
        <img src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png" alt="user" />
        <a href="" className="login">Login</a>
        <div className="vertical-line"></div>
        <a href="" className="sign-up">Sign up</a>
        </div>
        <div className='social'>
            <a href="" className="request">Request</a>
            <div className="vertical-line"></div>
            <a href="" className="contact">Contact-us</a>
            <div className="vertical-line"></div>
            <a href="" className="gogo">GoGoTaku</a>
            <img src="https://cdn-icons-png.flaticon.com/128/3488/3488437.png" alt="" className="telegram" />
            <img src="https://cdn-icons-png.flaticon.com/128/2111/2111370.png" alt="" className="discord" />
            <img src="https://cdn-icons-png.flaticon.com/128/2504/2504903.png" alt="" className="facebook" />
        </div>
    </div>
  )
}

export default Header