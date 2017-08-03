import React from 'react'
import { Link } from 'react-router-dom'



const Home = () => {

    return (
        <div className='categories'>
            <div id='top-banner'>
                <img id='banner-img' src='./img/banner-gill.jpg' alt='Banner Image' />
            </div>
            <div className='info-box'>
                <p>
                    Choose one of the Classes Below to be taken to a page that shows a comparison between classes.
                </p>
            </div>
            <div className='category-list'>
                {}
            </div>
        </div>
    )
}
export default Home
