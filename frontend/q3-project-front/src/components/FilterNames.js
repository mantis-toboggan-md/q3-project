import React, { Component } from 'react'
import { connect } from 'react-redux'
import {filterNames} from '../actions'
import { Button, Label, InputGroup, Input, Container, Col } from 'reactstrap';

class FilterNames extends Component {

  state = {
    filterByString: ''
  }

  handleChange = (e)=>{
    this.setState({filterByString: e.target.value})
    this.props.filterNames(e.target.value)
  }
  render () {
    return (
      <Container>
        <Col xs = {{size: 4, offset: 4}}>
          <InputGroup>
            <Input onChange = {this.handleChange} autoComplete = 'off' placeholder = 'search by name'></Input>
          </InputGroup>
        </Col>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    filterNames: (string)=>{
      dispatch(filterNames(string))
    }
  }
}

export default connect(null, mapDispatchToProps)(FilterNames)
