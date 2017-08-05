import React from 'react'
import { Link } from 'react-router-dom'
import dbdata from '../../data.js'


const Home = (props) => {

  return (
    <div className='categories'>
      <div className='top-banner'>
        <img id='banner-img' src='/img/banner-fill.jpeg' alt='Banner Image' />
      </div>
      <div className='info-box'>
        <p>
          Choose one of the Classes Below to be taken to a page that shows a comparison between classes.
                </p>
      </div>
      <div className='categories'>
        {props.categories.map((category) => {
          return (<div className='category'>
            <h2>{category.name}</h2>
            <h3>{category.summary}</h3>
          </div>)
        })}
      </div>

    </div>
  )
}
export default Home
