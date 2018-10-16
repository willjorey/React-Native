import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen';
import Title from '../components/title';
import CreateLoginScreen from './CreateLoginScreen';

class TitleScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={{backgroundColor: '#1E90FF', flex:1, opacity: 0.8}}>
            <Title navigation={this.props.navigation}/>
      </View>
    );
  }
}

export default createStackNavigator({
    Title: {
        screen: TitleScreen,
    },
    Login: {
        screen: LoginScreen
    },
    CreateLogin:{
        screen: CreateLoginScreen
    }
});