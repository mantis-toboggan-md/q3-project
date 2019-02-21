import React from 'react'
import Cart from './Cart'
import Filters from './Filters'
import {Link} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Col,
  Row,
  Card,
  CardBody,
  UncontrolledCollapse
 } from 'reactstrap';



class Header extends React.Component{

  state = {
     isOpen: false
   };


   toggle() {
     this.setState({
       isOpen: !this.state.isOpen
     });
   }

  render(){
    if(this.props.isCheckout){
      return (
        <div id = 'header'>
          <Navbar light expand="md" sticky-top>
            <NavbarBrand className="text-info" href="#"><Link to = '/'>plant store or whatever</Link></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      )
    } else{

    return (
      <div id = 'header'>
        <Navbar light expand="md" sticky-top>
          <UncontrolledDropdown>
            <DropdownToggle nav caret className="text-info" id='toggle-filter'>Filter by...</DropdownToggle>
          </UncontrolledDropdown>
          <NavbarBrand className="text-info" href="/">plant store or whatever</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="text-info" href="#"><Link to = '/checkout'>Checkout</Link></NavLink>
              </NavItem>
              <NavItem>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="text-info" nav caret id= 'toggler'>
                  Cart
                </DropdownToggle>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <Row>
        <Col xs = '3'>
          <UncontrolledCollapse toggler='#toggle-filter'>
            <Filters/>
          </UncontrolledCollapse>
        </Col>
        <Col xs = {{size:3}} id='cart-container'>
          <UncontrolledCollapse toggler="#toggler">
            <Card>
              <CardBody>
                <Cart/>
              </CardBody>
            </Card>
          </UncontrolledCollapse>
        </Col>
      </Row>
      </div>
    )
  }
  }
}

export default Header
