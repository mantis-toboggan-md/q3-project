import React from 'react'
import { connect } from 'react-redux'
import { updatePlant } from '../actions/admin'
import { FormGroup, Input, FormText, Button} from 'reactstrap'

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
        {this.props.item.name}
        <FormGroup>
          {inputs}
        </FormGroup>
        <Button onClick = {this.submitUpdate}>Update</Button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch=>{
  return{
    updatePlant: (plant)=>{
      dispatch(updatePlant(plant))
    }
  }
}

export default connect(null,mapDispatchToProps)(StockItem)
