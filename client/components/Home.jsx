import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <div className='top-banner'>
        <img className='banner-img' src='/img/banner-fill.jpeg' alt='Banner Image' />
      </div>
      <div className='info-box'>
        Hello Ya'll Home Page
        <br />
        <Link to={'/categories/'}>Click to Choose a Category to Compare</Link>
      </div>
    </div >
  )
}
export default Home
