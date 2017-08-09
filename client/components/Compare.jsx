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
    this.addFinsToStore = this.addFinsToStore.bind(this)
    this.addMasksToStore = this.addMasksToStore.bind(this)
    this.addTanksToStore = this.addTanksToStore.bind(this)

  } 
 addFinToStore(fin){
   let selectedFins = [...this.state.selectedFins] //'...' makes state immutable
   selectedFins.push(fin)                          // addes new id to array
   this.setState({selectedFins: selectedFins})     //sets new array to state
 }
addMaskToStore(mask){
   let selectedMasks = [...this.state.selectedMasks] 
   selectedMasks.push(mask)
   this.setState({selectedMasks: selectedMasks})
 }
 addTankToStore(tank){
   let selectedTanks = [...this.state.selectedTanks]
   selectedTanks.push(tank)
   this.setState({selectedTanks: selectedTanks})
 }

  render() {
    return (
      <div className='compare'>
        {this.props.match.params.id === 'Masks' && <Masks equipMask={this.addMaskToStore} selectedMask={this.state.selectedMasks}/>}
        {this.props.match.params.id === 'Fins' && <Fins equipFin={this.addFinToStore} selectedFins={this.state.selectedFins} />}
        {this.props.match.params.id === 'Tanks' && <Tanks equipTank={this.addTankToStore} selectedTanks={this.state.selectedTanks}/>}
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
//change ID'd to be unique / class specific 
