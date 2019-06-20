import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, SafeAreaView } from 'react-native';
import { actions } from 'cascos/src/redux/actions/index'
import { Button } from 'react-native-elements'
import Loader from './loader'

class Login extends Component {

    render() {
        const { loading } = this.props

        if (loading) {
            return <Loader />
        }
        return (
            <SafeAreaView>
                <Text>Login</Text>

                <Button
                    onPress={this.props.actions.onlogin}
                    title='Boton'
                    type="outline"
                    loading={loading}
                ></Button>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => ({
    user: state.session.user,
    loading: state.session.loading
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
        onlogin: () => {
            dispatch(actions.session.loading(true))
            setTimeout(() => {
                dispatch(actions.session.setUser({ id: 1, name: 'Cristian' }))
                dispatch(actions.session.loading())
                ownProps.navigation.navigate({ routeName: 'Loading' })
            }, 2000);
        }
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)