import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <div id='top-banner'>
        <img id='banner-img' src='./img/banner-gill.jpg' alt='Banner Image' />
      </div>
      <div className='info-box'>
        Hello Ya'll Home PAge
        <br />
        <Link to={'/categories/'}>Choose a Category to Compare</Link>
      </div>
    </div >
  )
}
export default Home
