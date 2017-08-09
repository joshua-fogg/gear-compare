import React, { Component } from 'react'

import Masks from './gear/Masks'
import Fins from './gear/Fins'
import Tanks from './gear/Tanks'

class Compare extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: '',
      selectedMasks: [], //previously ActiveEquipmentMasks
      selectedFins: [],
      selectedTanks: [],
    }
    // this.setEquipment = this.setEquipment.bind(this)
    // this.removeActiveEquipment = this.removeActiveEquipment.bind(this)
    // this.setState = this.setState.bind(this)
  } 
 addFinsToStore(fin){
   let selectedFins = this.state.selectedFins
   selectedFins.push(fin)
   this.setState({selectedFins: selectedFins})
 }
  // setEquipment(equipmentID) {
  //   switch (props.category) {
  //     case 'Masks':
  //       this.state.activeEquipmentMasks.push(equipmentID)
  //       break;
  //     case 'Fins':
  //       this.state.activeEquipmentFins.push(equipmentID)
  //       break;
  //     case 'Tanks':
  //       this.state.activeEquipmentTanks.push(equipmentID)
  //       break;
  //     default:
  //       console.log('default triggered')
  //       break;
  //   }
  // }

  render() {
    return (
      <div className='compare'>
        {this.props.match.params.id === 'Masks' && <Masks />}
        {this.props.match.params.id === 'Fins' && <Fins equipFin={this.addFinsToStore} selectedFins={this.setState} />}
        {this.props.match.params.id === 'Tanks' && <Tanks />}
        <div>
          <br />
          <br />
        </div>
      </div >
    )
  }
}

export default Compare

//add ins: have buttons on bottom of page for equipment categories?
