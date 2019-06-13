import { createSwitchNavigator } from "react-navigation";
import Loading from './components/loading'
import Login from './components/login'
import Home from './components/home'

const SwitchNavigator = createSwitchNavigator(
    {
        Loading,
        Login, 
        Home
    },
    {
        initialRouteName: 'Loading',
    }

)

export default SwitchNavigator;