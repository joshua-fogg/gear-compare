import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import catalogue from '../../catalogue'

const Fins = catalogue.Fins

class FinList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className='categories columns'>
        {Fins.map((fin) => {
          return (
            <div className='category card' key={fin.id} >
              <div className="card-image">
                <figure className="image">
                  <img src="http://via.placeholder.com/300x300" alt="Image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Product Name</p>
                  </div>
                </div>
                <div className="content">
                  Product Summary
                </div>
              </div>
            </div>
          )
        })}

      </div >
    )
  }
}

export default FinList