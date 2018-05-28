import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Tournament'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>TOURNAMENT SCREEN</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});