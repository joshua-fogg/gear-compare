import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <div className='space-filler'>
      </div>
      <div className='greeting container is-fluid'> {/*this needs to be centered*/}
        Welcome to Gear Compare. A site designed by an EDA student and former Dive Instructor. Gear Compare aims to provide a means to compare dive gear to allow an easier choice of product
        </div>
      <div className='space-filler'>
      </div>
      <div className='button-container'>
        <Link to={'/categories/'}><div >Click to dive into equipment categories </div> </Link>
        <div className='space-filler'>
        </div>
      </div>
    </div >
  )
}
export default Home
