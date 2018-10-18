import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import SuccessfulLogin from '../components/successfulLogin';
import { createStackNavigator } from 'react-navigation';
import TitleScreen from './TitleScreen';

class MainScreen extends Component {

  render() {
    return (
      <View style={{backgroundColor: '#d7dae0', flex:1, opacity: 0.9}}>
        <SuccessfulLogin navigation ={this.props.navigation}/>
      </View>
    );
  }
}

export default new createStackNavigator({
  Main:{
    screen: MainScreen,
    navigationOptions:{
      header:null
    }
  },
  Title:{
    screen: TitleScreen
  }
})
