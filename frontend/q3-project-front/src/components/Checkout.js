import React from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import {updateQuantity} from '../actions/cart'
import {
  Table,
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

class Checkout extends React.Component {



  render(){
    let cartItems = this.props.cart.map(item=>{
      return <CartItem key = {item.plant.id} item = {item} updateItem = {this.props.updateItem}/>
    })
    let subtotal = this.props.cart.reduce((total, item)=>{
      return total += item.plant.price * item.quantity
    },0)
    let taxes = (subtotal * 0.08).toFixed(2)
    let total = (subtotal + parseFloat(taxes)).toFixed(2)
    return(
      <div className='shopping-cart'>
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
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems}
                  </tbody>
                </Table>
              </CardBody>
              <CardFooter>
                <div className = 'totals'>
                  subtotal: ${subtotal.toFixed(2)}
                  taxes: ${taxes}
                  total: ${total}
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
                      <Input type="text" name="cardName" id="cardName"/>
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <FormGroup>
                      <Label for="CCV">CCV</Label>
                      <Input type="number" name="CCV" id="CCV"/>
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <FormGroup>
                      <Label for="exp-date">Expiration</Label>
                      <Input type="string" name="exp-date" id="exp-date" placeholder = 'mm/yy'/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="card-number">Card Number</Label>
                      <Input type="string" name="card-numer" id="card-number"/>
                    </FormGroup>
                  </Col>
                </Row>
                <Button>Submit Order</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart,
})

const mapDispatchToProps = dispatch =>{
  return {
    updateItem: (plant, quantity)=>{
      dispatch(updateQuantity(plant,quantity))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout)
