import React, { Component } from 'react'
import { connect } from 'react-redux'
import {filterPlants, filterNames} from '../actions'
import { Button, Label, InputGroup, Input, Container, FormGroup, Card, CardBody, CardFooter, CardText } from 'reactstrap';

class Filters extends Component {
  state = {
  }

  handleChange = (e)=>{
    console.log(e.target)

    let property = e.target.type == 'radio' ? e.target.name : e.target.id
    let value = e.target.value
    this.setState((prevState, e)=>{
      let newState = {...prevState}
      newState[property] = value
      return newState
    })
  }

  submitFilters = ()=>{
    let keys = Object.keys(this.state)
    let values = Object.values(this.state)
    let validFilters = {}
    for(let i = 0; i < keys.length; i++){
      if(values[i]!=='All'){
        validFilters[keys[i]] = values[i]
      }
    }
    this.props.filterPlants(validFilters)
    this.props.filterNames(this.props.filterString)
  }

  resetFilters = ()=>{
    this.props.filterPlants({})
    this.props.filterNames(this.props.filterString)
    this.setState(prev=>{})
    document.getElementById("plant-filters").reset();
  }
  render () {
    return (
      <Container>
        <Card>
          <CardBody>
            <form id ='plant-filters'>
              <InputGroup>
                <Label for="light_requirement">Light Requirement</Label>
                <Input type="select" name="select" id="light_requirement" onChange = {this.handleChange}>
                  <option>All</option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </Input>
              </InputGroup>
              <InputGroup>
                <Label for="co2_need">CO2 Requirement</Label>
                <Input type="select" name="select" id="co2_need" onChange = {this.handleChange}>
                  <option>All</option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </Input>
              </InputGroup>
              <InputGroup>
                <Label for="growth_rate">Growth Rate</Label>
                <Input type="select" name="select" id="growth_rate" onChange = {this.handleChange}>
                  <option>All</option>
                  <option>Slow</option>
                  <option>Medium</option>
                  <option>Fast</option>
                </Input>
              </InputGroup>
              <InputGroup>
                <Label for="size">Tank Placement</Label>
                <Input type="select" name="select" id="size" onChange = {this.handleChange}>
                  <option>All</option>
                  <option>Surface</option>
                  <option>Foreground</option>
                  <option>Midground</option>
                  <option>Background</option>
                </Input>
              </InputGroup>
              <InputGroup>
                <Label for="structure">Structure</Label>
                <Input type="select" name="select" id="structure" onChange = {this.handleChange}>
                  <option>All</option>
                  <option>Free-Floating</option>
                  <option>Rosette</option>
                  <option>Rhizome</option>
                  <option>Stem</option>
                  <option>Moss</option>
                </Input>
              </InputGroup>
            </form>
          </CardBody>
          <CardFooter>
            <Button outline color = 'info' onClick = {this.resetFilters}>Reset</Button>
            <Button outline color = 'info' onClick = {this.submitFilters}>Filter</Button>
          </CardFooter>
        </Card>
      </Container>
    )
  }
}

const mapStateToProps = state=>({
  filterString: state.plants.filterString
})

const mapDispatchToProps = (dispatch)=>{
  return{
    filterPlants: (filters)=>{
      dispatch(filterPlants(filters))
    },
    filterNames: (string)=>{
      dispatch(filterNames(string))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
