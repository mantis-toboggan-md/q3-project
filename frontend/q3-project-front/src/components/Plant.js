import React from 'react'
import { connect } from 'react-redux'
import {addToCart} from '../actions/cart'
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  Input,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  FormText,
  FormGroup
} from 'reactstrap'

class Plant extends React.Component{
  state = {
    quantity: 1,
    error: ''
  }

  handleChange = (e)=>{
    this.setState({quantity: e.target.value})

  }

  add = ()=>{
    console.log(typeof this.state.quantity)
    if(this.state.quantity === 0){
      this.setState({error: 'Enter a quantity'})
    } else if(this.state.quantity > this.props.plant.stock) {
      this.setState({error: `Only ${this.props.plant.stock} in stock`})
    }
    else{
      this.props.addToCart(this.props.plant, this.state.quantity)
      this.setState({quantity:1, error: ''})
      this.forceUpdate()
    }
  }

  render(){
    let errmsg = this.state.error ? <FormText>{this.state.error}</FormText> : ''
    return(
      <Container className = 'plant-preview'>
        <Col md = {{size:10, offset:1}}>
        <Card>
          <div className = 'card-img-container'>
            <CardImg height = "30%" src = {this.props.plant.photo_url} alt = {this.props.plant.name}></CardImg>
          </div>
          <CardBody>
            <CardTitle>
              {this.props.plant.name}
              <span color = 'muted'> (${this.props.plant.price})</span>
            </CardTitle>
            <CardText>
            Light: {this.props.plant.light_requirement} |
              CO2: {this.props.plant.co2_need} |
              Structure: {this.props.plant.structure} |
              Placement: {this.props.plant.size} |
              Growth Rate: {this.props.plant.growth_rate}
            </CardText>
          </CardBody>
          <CardFooter>
            <FormGroup>
              <Row>
                <Input type = 'number' onChange = {this.handleChange} placeholder = 'quantity' value = {this.state.quantity}/>
                {errmsg}
                <Button outline color= 'info' onClick = {this.add}>Add to Cart</Button><br/>
              </Row>
          </FormGroup>
          </CardFooter>
        </Card>
      </Col>
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
