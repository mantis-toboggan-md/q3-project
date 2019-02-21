import React from 'react'
import { connect } from 'react-redux'
import { updatePlant, deletePlant } from '../actions/admin'
import { FormGroup, Input, FormText, Button, Card, CardBody, CardFooter, CardTitle} from 'reactstrap'

class StockItem extends React.Component {
  state = {...this.props.item}

  handleChange = (e)=>{
    e.persist()
    this.setState((prevState)=>{
      let newState = {...prevState}
      newState[e.target.id] = e.target.value
      return newState
    })
  }

  submitUpdate = ()=>{
    this.props.updatePlant(this.state)
  }
  submitDelete = ()=>{
    this.props.deletePlant(this.state)
  }

  render(){
    let properties = Object.keys(this.state).splice(1,10)
    let inputs = properties.map(prop=>{
      return (
          <div>
            <FormText color = 'muted'>{prop}</FormText>
            <Input id = {prop} value = {this.state[prop]} autoComplete = 'off' onChange = {this.handleChange}></Input>
          </div>
      )
    })
    return(
      <div>
        <Card>
          <CardTitle>
            {this.props.item.name}
          </CardTitle>
          <CardBody>
            <FormGroup>
              {inputs}
            </FormGroup>
          </CardBody>
          <CardFooter>
            <Button outline color='info' onClick = {this.submitUpdate}>Update</Button>
            <Button outline color = 'warning' onClick = {this.submitDelete}>Delete</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch=>{
  return{
    updatePlant: (plant)=>{
      dispatch(updatePlant(plant))
    },
    deletePlant: (plant)=>{
      dispatch(deletePlant(plant))
    }
  }
}

export default connect(null,mapDispatchToProps)(StockItem)
