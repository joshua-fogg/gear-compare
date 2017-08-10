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
    this.addFinToStore = this.addFinToStore.bind(this)
    this.addMaskToStore = this.addMaskToStore.bind(this)
    this.addTankToStore = this.addTankToStore.bind(this)
    this.removeFinFromStore = this.removeFinFromStore.bind(this)
  }

  removeFromState(equipmenttype, Id) {
    let adjustedFins = [...this.state.selectedFins].filter(function (fin) {
      return fin != finId;
    })
  }

  addFinToStore(fin) {
    let selectedFins = [...this.state.selectedFins]
    //'...' makes state immutable
    selectedFins.push(fin)
    // addes new id to array
    this.setState({ selectedFins: selectedFins })
    //sets new array to state
  }

  addMaskToStore(mask) {
    let selectedMasks = [...this.state.selectedMasks]
    selectedMasks.push(mask)
    this.setState({ selectedMasks: selectedMasks })
  }

  addTankToStore(tank) {
    let selectedTanks = [...this.state.selectedTanks]
    selectedTanks.push(tank)
    this.setState({ selectedTanks: selectedTanks })
  }

  render() {
    return (
      <div className='compare'>
        {this.props.match.params.id === 'Masks' && <Masks equipMask={this.addMaskToStore} selectedMask={this.state.selectedMasks} />}
        {this.props.match.params.id === 'Fins' && <Fins equipFin={this.state.addFinToStore} selectedFins={this.state.selectedFins} removeFin={this.state.removeFinFromStore} />}
        {this.props.match.params.id === 'Tanks' && <Tanks equipTank={this.state.addTankToStore} selectedTanks={this.state.selectedTanks} />}
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
//change ID'd to be unique / class specific => condense state to be 1 state => can be loadout
//turn each state changer into a toggler function