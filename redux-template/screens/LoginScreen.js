import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from '../components/home';
import CreateLoginScreen from './CreateLoginScreen';

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
        <Home/>
        <Button
        title="Create New Login"
        onPress={() => navigate('CreateLogin') }/>
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
});