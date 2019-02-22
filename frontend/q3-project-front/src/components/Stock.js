import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import StockItem from './StockItem'
import { fetchPlants } from '../actions'
import { deletePlant } from '../actions/admin'
import {
  Container,
  Button,
  Modal,
  ModalBody,
  FormInput,
  Input,
  FormText,
  ModalFooter
} from 'reactstrap'

class Stock extends React.Component{
  state = {
    modal: false,
    newPlant: {}
  }

  componentWillMount(){
    this.props.fetchPlants()
  }

  // componentWillUpdate(){
  //   this.props.fetchPlants()
  // }

  handleChange=(e)=>{
    e.persist()
    this.setState((prevState)=>{
      let newState = {...prevState}
      newState.newPlant[e.target.id] = e.target.value
      return newState
    })
  }

  triggerModal = ()=>{
    this.setState(prevState=>
      ({modal:!prevState.modal}))
  }

  deletePlants = (plant)=>{
    this.props.deletePlant(plant)
    this.props.fetchPlants()
  }

  submitPlant = async()=>{
    let token = localStorage.getItem('token')
    let response = await fetch('http://localhost:8082/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'authorization': token
      },
      body: JSON.stringify(this.state.newPlant)
    })
    if(response.status == 200){
      this.triggerModal()
      this.fetchPlants()
    } else{
      this.triggerModal()
      alert('...something went wrong')
    }
  }

  render(){
    let items = this.props.plants.map(plant=>{
      return <StockItem key = {plant.id} item = {plant} deletePlant = {this.deletePlants}/>
    })
    if (!localStorage.getItem('token')) {
      return <Redirect to="/login" />;
    }else {
      let properties = Object.keys(this.props.plants[0] || {}).splice(1,10)
      let inputs = properties.map(prop=>{
        return (
            <div>
              <FormText color = 'muted'>{prop}</FormText>
              <Input id={prop} autoComplete = 'off' onChange = {this.handleChange}></Input>
            </div>
        )
      })
      return(
        <Container>
          <Button color = 'info' onClick = {this.triggerModal}>Add New Item</Button>
          <Modal isOpen={this.state.modal} toggle={this.triggerModal}>
            <ModalBody>
              {inputs}
            </ModalBody>
            <ModalFooter>
              <Button onClick = {this.submitPlant}>Add</Button>
            </ModalFooter>
          </Modal>
          <div className = 'stock-inputs'>
            {items}
          </div>
        </Container>
      )
    }
  }
}

const mapStateToProps = state => ({
  isLogged: state.auth.isLogged,
  plants: state.plants.all
})

const mapDispatchToProps = dispatch=>{
  return{
    fetchPlants: ()=>{
      dispatch(fetchPlants())
    },
    deletePlant: (plant)=>{
      dispatch(deletePlant(plant))
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stock)
