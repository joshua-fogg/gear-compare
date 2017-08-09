import React, { Component } from 'react'

import Masks from './gear/Masks'
import Fins from './gear/Fins'
import Tanks from './gear/Tanks'

class Compare extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: '',
      activeEquipmentMasks: [],
      activeEquipmentFins: [],
      activeEquipmentTanks: [],
    }
    this.setEquipment = this.setEquipment.bind(this)
    // this.removeActiveEquipment = this.removeActiveEquipment.bind(this)
    this.setState = this.setState.bind(this)
  }

  setEquipment(equipmentID) {
    switch (props.category) {
      case 'Masks':
        this.state.activeEquipmentMasks.push(equipmentID)
        break;
      case 'Fins':
        this.state.activeEquipmentFins.push(equipmentID)
        break;
      case 'Tanks':
        this.state.activeEquipmentTanks.push(equipmentID)
        break;
      default:
        console.log('default triggered')
        break;
    }
  }

  render() {
    return (
      <div className='compare'>
        {this.props.match.params.id === 'Masks' && <Masks equip={this.setEquipment} adjustState={this.setState} />}
        {this.props.match.params.id === 'Fins' && <Fins equip={this.setEquipment} adjustState={this.setState} />}
        {this.props.match.params.id === 'Tanks' && <Tanks equip={this.setEquipment} adjustState={this.setState} />}
        <div>
          <br />
          <br />
        </div>

      </div >
    )
  }
}

export default Compare

// based on category, must pull different data from db and set it to props / state.
// must map out db data into boxes.
// add checkbox / select state for comparing items
// have function to show only those items that are viewed.
/* something = somethin ? action to takeif correct */
//  can either turnerary mount component or render certain functions
