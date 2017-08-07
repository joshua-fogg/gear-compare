import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import catalogue from '../../catalogue'

const Tanks = catalogue.Tanks

class TankList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className='masks'>
        {Tanks.map((tank) =>
          <div className='category-items'>
            <div className='category card' key={tank.id} >
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src="http://via.placeholder.com/300x300" alt="Image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Tank Model ID</p>
                  </div>
                </div>
                <div className="content">
                  Tank Something here
                </div>
              </div>
            </div>
          </div>
        )}
      </div >
    )
  }
}


export default TankList