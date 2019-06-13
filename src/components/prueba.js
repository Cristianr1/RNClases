import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import {connect} from 'react-redux';
import { store } from '../store';


class Prueba extends Component {

    // constructor(props) {
    //     super(props)
    //     console.log("constructor")
    //     this.state = { sesion: false, counter: 0 }
    // }

    onPressButton = () => {
        store.dispatch({
            type: 'INCREMENT_COUNTER'
        })

    }

    render() {
        const {session} = this.props;
        console.log("render", session)

        return (
            <View>
                {!session &&
                    <Text>No</Text>
                }

                <Text>Contador {session.counter}</Text>

                <Button
                    onPress={this.onPressButton}
                    title="Cambios estados"
                    color="#841584"
                />
            </View>
        );
    }

}

const mapStateToProps = state => ({
    session: state.session
})

export default connect(mapStateToProps)(Prueba)
