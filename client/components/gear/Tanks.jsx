import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import catalogue from '../../catalogue'

const Tanks = catalogue.Tanks

class TankList extends Component {

  render() {
    return (
      <div className='masks'>
        {Tanks.map((tank) => {
          const isSelected = this.props.selectedMasks.includes(tank.id)
          return (
            <div className={classNames('category-items', { active: isSelected })} key={tank.id}>
              <div className='category card'>
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
          )
        })
        }
      </div >
    )
  }
}


export default TankList