
import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native'
import { NavigationActions, createAppContainer } from 'react-navigation';

import AppNavigator from './app-navigator';

const Navigator = createAppContainer(AppNavigator)

class AppNavigatorWithState extends Navigator {

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }

    componentWillMount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress = () => {
        this.props.dispatch(
            NavigationActions.back({ key: null })
        )
        return true
    }

}

const mapStateToProps = state => ({
    state: state.navigation
})

export default connect(mapStateToProps)(AppNavigatorWithState)