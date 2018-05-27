import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FetchTournaments from './components/FetchTournaments';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>Tournaments</Text>
        <FetchTournaments/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    margin: 10,
    fontSize: 25,
  }
});
