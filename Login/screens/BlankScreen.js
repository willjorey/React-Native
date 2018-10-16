import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import SuccessfulLogin from '../components/successfulLogin';


class BlankScreen extends React.Component {
  static navigationOptions = {
    title: 'Login Successful',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
        <SuccessfulLogin navigation ={this.props.navigation}/>
      </View>
    );
  }
}

export default createStackNavigator({
    Blank: {
        screen: BlankScreen
    },

});