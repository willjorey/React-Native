import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen';
import Title from '../components/title';

class TitleScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={{backgroundColor: 'white', flex:1}}>
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
});