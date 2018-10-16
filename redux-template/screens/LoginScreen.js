import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from '../components/home';
import CreateLoginScreen from './CreateLoginScreen';
import BlankScreen from './BlankScreen';

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{backgroundColor: 'white', flex:1}}>
        <Home navigation={this.props.navigation}/>
      </View>
    );
  }
}

export default createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  CreateLogin: {
    screen: CreateLoginScreen
  },
  Blank: {
    screen: BlankScreen
  }
});