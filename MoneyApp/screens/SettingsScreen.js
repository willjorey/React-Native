import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import Async from '../components/Async';
import Profile from '../components/Profile';
export default class SettingsScreen extends React.Component {
  constructor(props){
    super(props);
    this.async = new Async();
  }
  static navigationOptions = {
    title: 'Setting Options',
  };


  newProfile = () => {
    let p = new Profile(0);
    this.async.storeProfile(p);
  };
  render() {
    return(
    <TouchableOpacity style={styles.payButton}>
      <Text style={styles.tipText} onPress={this.newProfile()}>Create New Profile</Text>
    </TouchableOpacity>
    );

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tipText:{
    fontSize:25,
    color: 'white',
  },
  payButton:{
    alignItems: 'center',
    backgroundColor: '#FF3838',
    padding: 10,
    height: 55,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#336EFF',
    padding: 10,
    height: 55,
  },
  billAmount:{
    textAlign: 'center',
    fontSize: 30,
    padding: 10,
  },
  budget:{
    fontSize: 75,
    color: 'green',
  },
  calculatorTitle:{
    fontSize:30,
  },

});
