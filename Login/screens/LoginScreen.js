import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from '../components/home';
import BlankScreen from './BlankScreen';

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={{backgroundColor: 'white', flex:1, opacity: 0.8}}>
        <Home navigation={this.props.navigation}/>
      </View>
    );
  }
}

export default createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Blank: {
    screen: BlankScreen
  }
});