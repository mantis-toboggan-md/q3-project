import React from 'react'
import { connect } from 'react-redux'
import {addToCart} from '../actions/cart'
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  Input
} from 'reactstrap'

class Plant extends React.Component{
  state = {
    quantity: 0,
    error: ''
  }

  handleChange = (e)=>{
    this.setState({quantity: e.target.value})

  }

  add = ()=>{
    if(this.state.quantity === 0){
      this.setState({error: 'Enter a quantity'})
    }
  this.props.addToCart(this.props.plant, this.state.quantity)
  }

  render(){
    let errmsg = this.state.error ? <span className ='cart-error'>{this.state.error}</span> : ''
    return(
      <Container className = 'plant-preview'>
        <Row>
          <Col xs = {{size: 4, offset: 4}}>
            <img src = {this.props.plant.photo_url} alt = {this.props.plant.name}></img>
          </Col>
        </Row>
        <Row>
          <Col xs = '12'>
            {this.props.plant.name}
          </Col>
        </Row>
        <Row>
          <Col xs = {{size: 2, offset: 5}}>
          </Col>
        </Row>
        <Row>
          <Col xs = '12'>
          </Col>
        </Row>
        <Row>
          <Col xs = '12'>
            <InputGroup>
              Quantity:
              <Input  onChange = {this.handleChange}/>
              {errmsg}
            </InputGroup>

            <Button outline color= 'primary' onClick = {this.add}>Add to Cart</Button>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state=>{

}
const mapDispatchToProps = dispatch =>{
  return {
    addToCart: (plant, quantity)=>{
      dispatch(addToCart(plant, quantity))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Plant)
