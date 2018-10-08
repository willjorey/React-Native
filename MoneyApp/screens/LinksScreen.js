import React from 'react';
import { ScrollView, StyleSheet, Text,TouchableOpacity} from 'react-native';
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
      refresh: true,
    }
    this.async = new Async();
  }
  static navigationOptions = {
    title: 'Your Recent Transactions',
  };

  refresh = () => {
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
  }

  componentDidMount(){
    this.refresh();
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.getStartedText}>Your Budget</Text>
        <Text style={styles.budget}>${this.state.budget}</Text>
        <ListTransactions transactions= {this.state.transactions}/>

        <TouchableOpacity style={styles.payButton} onPress={this.refresh}>
                <Text style={styles.tipText}>Refresh</Text>
        </TouchableOpacity>

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
});
