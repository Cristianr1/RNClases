import React, { PureComponent } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { connect } from 'react-redux'

class Home extends PureComponent {
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