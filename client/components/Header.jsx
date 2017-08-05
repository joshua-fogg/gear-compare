import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <div className='header'>
      <div className='nav-bar-image'><img className='banner-img' src='/img/banner-top.jpg' /></div>
      <div className='nav-bar'>
        <Link to='/'          ><button>Home</button></Link>
        <Link to='/categories'><button>Gear Categories</button></Link>
        <Link to='/compare'   ><button>Compare</button></Link>
        {/*redirect button to github*/}
      </div >
    </div >
  )
}
export default Header

function redirect(url) {
  return window.location = url
}