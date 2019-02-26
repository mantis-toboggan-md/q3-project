import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import CartItem from './CartItem'
import Header from './Header'
import {updateQuantity, getCart, clearCart} from '../actions/cart'
import {
  Table,
  Container,
   Col,
   Row,
   Button,
   Form,
   FormGroup,
   Label,
   Input,
   FormText,
   Card,
  CardBody,
  CardFooter,
  CardTitle
} from 'reactstrap'
import tankBG from '../img/nanaClose.JPG'


class Checkout extends React.Component {
  state = {
    redirect: false
  }
  componentDidMount(){
    this.props.getCart()
  }

 sendOrder = async ()=>{
   let plants = this.props.cart.map(plant=>{
     return({
       id: plant.plant.id,
       quantity: plant.quantity
          })
        })
        const response = await fetch(`${process.env.REACT_APP_HEROKU_URL}/order`,
        {
          method:'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(plants)
        })
        if(response.status === 200){
          this.props.clearCart()
          this.setState({redirect: true})
        }
  }

  render(){
    let cartItems = this.props.cart.map(item=>{
      return <CartItem key = {item.plant.id} item = {item} updateItem = {this.props.updateItem}/>
    })
    let subtotal = this.props.cart.reduce((total, item)=>{
      return total += item.plant.price * item.quantity
    },0)
    let taxes = (subtotal * 0.08).toFixed(2)
    let total = (subtotal + parseFloat(taxes)).toFixed(2)
    if (this.state.redirect) {
       return <Redirect to='/complete'/>;
     }
    return(
      <div className='shopping-cart parallax'>
        <Header isCheckout = {true}/>
        <Container>
        <div className = 'static-bg parallax_layer parallax_layer-back'>
          <img src = {tankBG}></img>
        </div>
        <div className = 'parallax_layer parallax_layer-front'>
        <Row>
          <Col xs = {{size: 8, offset:2}}>
            <Card>
              <CardTitle>
                <h4>Your Cart</h4>
              </CardTitle>
              <CardBody>
                <Table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems}
                  </tbody>
                </Table>
              </CardBody>
              <CardFooter>
                <div className = 'totals'>
                <span>
                  subtotal: ${subtotal.toFixed(2)}
                </span>
                <span>
                  taxes: ${taxes}
                </span>
                <span>
                  total: ${total}
                </span>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs = {{size: 8, offset:2}}>
          <Card>
            <CardTitle>
              <h4>
                Checkout
              </h4>
            </CardTitle>
            <CardBody>
              <Form>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleEmail">Email</Label>
                      <Input type="email" name="email" id="exampleEmail" />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="exampleAddress">Address</Label>
                  <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleAddress2">Address 2</Label>
                  <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
                </FormGroup>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleCity">City</Label>
                      <Input type="text" name="city" id="exampleCity"/>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="exampleState">State</Label>
                      <Input type="text" name="state" id="exampleState"/>
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <FormGroup>
                      <Label for="exampleZip">Zip</Label>
                      <Input type="text" name="zip" id="exampleZip"/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <h6>Payment Information:</h6><br/>
                  </Row>
                  <Row>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="cardName">Card Holder</Label>
                      <Input type="text" name="cardName" id="cardName" disabled/>
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <FormGroup>
                      <Label for="CCV">CCV</Label>
                      <Input type="number" name="CCV" id="CCV" disabled/>
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <FormGroup>
                      <Label for="exp-date">Expiration</Label>
                      <Input type="string" name="exp-date" id="exp-date" placeholder = 'mm/yy' disabled/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="card-number">Card Number</Label>
                      <Input type="string" name="card-numer" id="card-number" disabled/>
                    </FormGroup>
                  </Col>
                </Row>
                <Button onClick = {this.sendOrder}>Submit Order</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
        </Row>
      </div>
      </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart,
  plants: state.plants.all
})

const mapDispatchToProps = dispatch =>{
  return {
    updateItem: (plant, quantity)=>{
      dispatch(updateQuantity(plant,quantity))
    },
    getCart: ()=>{
      dispatch(getCart())
    },
    clearCart: ()=>{
      dispatch(clearCart())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout)
