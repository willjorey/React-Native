import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FetchTournaments from './FetchTournaments';
import { Header } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';


export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
      this.navigation = this.props.navigation;
  }
  static navigationOptions = {
    title: 'Home'
  }
  render() {
    return (
      <View style={styles.container}>
        <Header centerComponent={{text: 'Tournaments', style: { color: '#fff', fontSize:25 }}}/>
        <FetchTournaments navigation={this.navigation}/>
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
