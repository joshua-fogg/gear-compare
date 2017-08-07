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
      <div className='fins'>
        {Fins.map((fin) =>
          <div className='category-items'>
            <div className='category card' key={fin.id} >
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src="http://via.placeholder.com/300x300" alt="Image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{fin.brand} - {fin.model}</p>
                  </div>
                </div>
                <div className="content">
                  {fin.buckels}
                </div>
              </div>
            </div>
          </div>
        )}
      </div >
    )
  }
}


export default FinList