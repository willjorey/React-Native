import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import TitleScreen from './screens/TitleScreen';
import LoginScreen from './screens/LoginScreen';
import CreateLoginScreen from './screens/CreateLoginScreen';
import BlankScreen from './screens/BlankScreen';
import MainScreen from './screens/MainScreen';


class Nav extends Component {
    render() {
      return (
        <Navigator />
      )
    }
  }

export const Navigator = new createStackNavigator({
    Title: {
        screen: TitleScreen,
        navigationOptions:{
            header: null,
        }
    },
    CreateLogin:{
        screen: CreateLoginScreen,
        navigationOptions:{
            title: 'Sign Up',
            headerTintColor: 'white',
            headerStyle:{
                backgroundColor: '#FF3838'
            }
        }
    },
    Login:{
        screen: LoginScreen,
        navigationOptions:{
            header:null
        }
    },
    Blank:{
        screen: BlankScreen,
        navigationOptions:{
            header:null,
        }
    },
    Main:{
        screen: MainScreen,
        navigationOptions:{
            header:null
            // headerLeft:null,
            // title: '',
            // headerTintColor: 'white',
            // headerStyle:{
            //     backgroundColor: '#1E90FF'
            // }
        }
    }
})

const mapStateToProps = state => ({
    navigation: state.navigation,
  })
  
export default connect(mapStateToProps)(Nav)