import React from 'react'
import { createSwitchNavigator, createBottomTabNavigator } from "react-navigation";
import Loading from './components/loading'
import Login from './components/login'
import Home from './components/home'
import Settings from './components/settings'
import Ionicons from 'react-native-vector-icons/Ionicons'

const TabNavigator = createBottomTabNavigator(
    {
      Home,
      Settings
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Home') {
            iconName = `ios-home`;
          } else if (routeName === 'Settings') {
            iconName = `ios-settings`;
          }
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'white',
        activeBackgroundColor: 'red',
  
        labelStyle: {
          fontSize: 13,
        }
      }
    }
  )
  
  const SwitchNavigator = createSwitchNavigator(
    {
      Loading,
      Login,
      TabNavigator
    },
    {
      initialRouteName: 'Loading',
    }
  ) 
  
  export default SwitchNavigator;
  