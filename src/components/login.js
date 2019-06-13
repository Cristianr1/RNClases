import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, SafeAreaView, Button } from 'react-native';
import {actions} from 'cascos/src/redux/actions/index'

class Login extends Component {

    press = () => {
        this.props.dispatch(actions.session.setUser({ id: 1, name: 'Cristian' }))
        this.props.navigation.navigate('Loading')
    }

    render() {
        return (
            <SafeAreaView>
                <Text>Login</Text>
                <Button
                    onPress={this.press}
                    title='Boton'
                ></Button>
            </SafeAreaView>
        )
    }

}

const mapStateToProps = state => ({
    user: state.session.user
})

export default connect(mapStateToProps)(Login)