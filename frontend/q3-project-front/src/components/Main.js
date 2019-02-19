import React from 'react'
import { connect } from 'react-redux'
import { fetchPlants } from '../actions'
import Inventory from './Inventory'
import Filters from './Filters'
import Cart from './Cart'
import {
  Container,
  Row,
  Col,
  Spinner
} from 'reactstrap'

class Main extends React.Component {
  componentDidMount() {
    this.props.getPlants()
  }
  render(){
    let inventory = this.props.isFetching ? <Spinner color="primary" /> : <Inventory/>
    return(
      <Container fluid>
        <Row>
          <Col xs = '3'>
            <Filters/>
          </Col>
          <Col xs = {{size:6}}>
            {inventory}
          </Col>
          <Col xs = '3'>
            <Cart/>
          </Col>
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
