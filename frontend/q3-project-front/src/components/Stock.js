import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Stock extends React.Component{



  render(){
    if (!this.props.isLogged) {
      return <Redirect to="/login" />;
    }else {
      return(
        <div>
          super secret page
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  isLogged: state.auth.isLogged
})


export default connect(mapStateToProps)(Stock)
