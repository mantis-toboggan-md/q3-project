import React from 'react'
import { Container, Card, CardBody } from 'reactstrap'
import Header from './Header'
import tankBG from '../img/minnowClose.JPG'
class Complete extends React.Component{
  render(){
    return(
      <Container id = 'complete'>
        <Header isCheckout = {true}/>
        <div className = 'static-bg'>
          <img src = {tankBG}></img>
        </div>
        <Card>
          <CardBody>
            Order Complete!
          </CardBody>
        </Card>
      </Container>
    )
  }
}

export default Complete
