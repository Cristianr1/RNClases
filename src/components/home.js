import React, { PureComponent } from 'react'
import { SafeAreaView, Text, Button, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { actions } from 'cascos/src/redux/actions/index'
import { getPlaces } from 'cascos/src/services/user'

class Home extends PureComponent {
    componentDidMount() {
        this.props.actions.getPlaces();
    }

    render() {
        const { user, places } = this.props
        return (
            <SafeAreaView>
                <FlatList
                    data={places}
                />
            </SafeAreaView>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    actions: {
        getPlaces: () => {
            console.log("Recuperando datos")
            dispatch(getPlaces());
        }
    }
})

const mapStateToProps = state => ({
    user: state.session.user,
    places: state.places
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)