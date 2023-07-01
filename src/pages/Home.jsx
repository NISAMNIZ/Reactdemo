import React from 'react'
import { Link } from 'react-router-dom'
import imag from '../assets/spotify1'

const Home = () => {
  return (
    <div className='nav'>
    <div className='image'>
        {/* <img src={imag} alt="" /> */}
    </div>
    <div className='a'>Premium</div>
    <div className='b'>Help</div>
    <div className='c'>Download</div>
    <Link to={"/signup"}>
        <div className='d'>Sign Up</div>
    </Link>
    <Link to={"/login"}>
        <div className='d'>Log in</div>
    </Link>

    </div>
  )
}

export default Home
