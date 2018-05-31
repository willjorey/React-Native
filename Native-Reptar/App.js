import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen';
import TournamentScreen from './components/TournamentScreen';
import GameScreen from './components/GameScreen';
import { createStackNavigator } from 'react-navigation';

const NavigationApp = createStackNavigator({
  Home: HomeScreen,
  Tournament: TournamentScreen,
  Game: GameScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return (<NavigationApp/>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});