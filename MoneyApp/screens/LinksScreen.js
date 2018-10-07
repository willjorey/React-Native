import React from 'react';
import { ScrollView, StyleSheet, Text} from 'react-native';
import Profile from '../components/Profile';
import ListTransactions from '../components/ListTransactions';

import Async from '../components/Async';

export default class LinksScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      profile: {},
      budget: '',
      transactions: [],
    }
    this.async = new Async();
  }
  static navigationOptions = {
    title: 'Your Recent Transactions',
  };

  componentDidMount(){
    let that = this;
    let p = new Profile(0);
    this.async.getProfile().then((value) => {
    let p2;
      p2 = JSON.parse(value);
      p.setBalance(p2['balance']);
      p.setTransactions(p2['transactions']);
      that.setState({
        profile: p,
        budget: p['balance'].toString(),
        transactions: [...p.getTransactions()],
      });
    });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.getStartedText}>Your Budget</Text>
        <Text style={styles.budget}>${this.state.budget}</Text>
        <ListTransactions transactions= {this.state.transactions}/>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  budget:{
    fontSize: 75,
    color: 'green',
  },
});
