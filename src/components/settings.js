import React, { PureComponent } from 'react'
import { SafeAreaView, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import {actions} from 'cascos/src/redux/actions/index'

class Settings extends PureComponent {
    logout = () => {
        this.props.dispatch(actions.session.logout());
        this.props.navigation.navigate('Loading')
    }

    render() {
        const { user } = this.props
        return (
            <SafeAreaView>
                <Text>Hello world Home {user.name}</Text>
                <Button
                    onPress={this.logout}
                    title="logout"
                />
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => ({
    user: state.session.user
})

export default connect(mapStateToProps)(Settings)