import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <img className='banner-img center' src='/img/banner-top.jpg' />
      <div className='link-bar'>
        <div className='nav-links'><Link to='/' >Home</Link></div>
        <div className='nav-links'><Link to='/categories'>Gear Categories</Link></div>
        <div className='nav-links'><Link to='/compare' >Compare</Link></div>

        {/* redirect button to github */}
      </div >
    </div >
  )
}
export default Header
