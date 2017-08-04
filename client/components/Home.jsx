import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <div className='info-box'>
        Hello Ya'll Home Page
        <br />
        <Link to={'/categories/'}><button >Click to Choose a Category to Compare </button> </Link>
      </div>
    </div >
  )
}
export default Home
