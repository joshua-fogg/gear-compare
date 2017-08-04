import React from 'react'
import { Link } from 'react-router-dom'
import dbdata from '../../data.js'


const Home = () => {

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
            <div className='category-list'>
                <div className='cat-trap'>

                </div>
                <div className='cat-trap'>

                </div>
            </div>
        </div>
    )
}
export default Home
