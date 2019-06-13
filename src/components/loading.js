import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import Loader from './loader'

class Loading extends Component {

  componentDidMount() {
    const { session } = this.props;

    if (!session.user) {
     this.props.navigation.navigate('Login')
    }else{
      this.props.navigation.navigate('Home')
    }

  }

  render() {
    return (
      <Loader />
    )
  }
}

const mapStateToProps = state => ({
  session: state.session
})

export default connect(mapStateToProps)(Loading)
