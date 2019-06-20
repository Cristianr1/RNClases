import React, { PureComponent } from 'react'
import { SafeAreaView, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import {actions} from 'cascos/src/redux/actions/index'

class Home extends PureComponent {
    logout = () => {
        this.props.dispatch(actions.session.logout());
        this.props.navigation.navigate('Loading')
    }

    render() {
        const { user } = this.props
        return (
            <SafeAreaView>
                <Text>Hello world Home {user.name}</Text>

            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => ({
    user: state.session.user
})

export default connect(mapStateToProps)(Home)