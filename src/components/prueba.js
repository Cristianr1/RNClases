import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


class Prueba extends Component {

    constructor(props) {
        super(props)
        console.log("constructor")
        this.state = { sesion: false, counter: 0 }
    }

    onPressButton = () => {
        this.setState((state, props) => {
            return { sesion: !state.sesion, counter: state.counter + 1 }
        });
    }

    render() {
        console.log("render", this.state)
        return (
            <View>
                {!this.state.sesion &&
                    <Text>No</Text>
                }

                <Text>Contador {this.state.counter}</Text>

                <Button
                    onPress={this.onPressButton}
                    title="Cambios estados"
                    color="#841584"
                />
            </View>
        );
    }

}

export default Prueba
