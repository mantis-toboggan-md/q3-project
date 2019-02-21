import React from 'react'
import { connect } from 'react-redux'
import { fetchPlants } from '../actions'
import Inventory from './Inventory'
import Filters from './Filters'
import Cart from './Cart'
import FilterNames from './FilterNames'
import Header from './Header'
import {
  Container,
  Row,
  Col,
  Spinner,
  UncontrolledCollapse,
  CardBody,
  Card,
  Button
} from 'reactstrap'
import tankBG from '../img/tankStitchcropped.jpg'

class Main extends React.Component {
  componentDidMount() {
    this.props.getPlants()
  }
  render(){
    let inventory = this.props.isFetching ? <Spinner color="primary" /> : <Inventory/>
    return(
      <Container fluid>
        <Row>
          <Header/>
        </Row>
        <Row className = 'parallax'>
          <div className ='parallax_layer parallax_layer-back'>
            <img className = 'parallax-img' src = {tankBG}></img>
          </div>
          <div className = 'parallax_layer parallax_layer-front'>
            <Col xs = {{size:6, offset: 3}} id = 'inventory-list'>
              <FilterNames/>
              {inventory}
            </Col>
          </div>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  plants: state.plants.all,
  isFetching: state.plants.isFetching
})

const mapDispatchToProps = dispatch => {
  return {
   getPlants: () => {
     dispatch(fetchPlants())
   },

 }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
