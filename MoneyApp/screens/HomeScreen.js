import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  AsyncStorage,
} from 'react-native';

import Profile from '../components/Profile';
import Transaction from '../components/Transaction';

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      profile: {},
      budget: null,
      bill: "0",
      tip: "0.00",
      total: "0.00",
      tax: "0.13",
    };
  }

  //Get stored data if available else create new profile.
  componentDidMount(){
    let that = this;
    let p = new Profile(0);
    this.getProfile().then((value) => {
      let p2;
      if (value !== null){
        p2 = JSON.parse(value);
        p.setBalance(p2['balance']);
        p.setTransactions(p2['transactions']);
        that.setState({
          profile: p,
          budget: p['balance'].toString(),
        });
      }else{
        that.setState({
          profile: p,
          budget: p['balance'].toString(),
        });
        that.storeProfile(p);
      };
    });
  };


  storeProfile = async (profile) => {
    try {
      return await AsyncStorage.setItem('Profile', JSON.stringify(profile));
    } catch (error) {
      // Error saving data
    }
  }
  getProfile = async () =>{
    let profile;
    try{
      let res = await AsyncStorage.getItem('Profile');
      return res;
    }catch(error){
      console.log(error.message);
    }
  }

  
  static navigationOptions = {
    header: null,
  };
  
  setBudget = (value) =>{
    this.setState({
      budget: value,
    });
    this.state.profile.setBalance(value);
    this.storeProfile(this.state.profile);
  };

  onPressBudget = () => {
    this.setState({
      budget: this.state.input,
    })
  };

  onPressPay = () =>{
    let tax = 0.13;
    let deduct = Number(this.state.tip) + Number(this.state.bill);
    let bal = Number(this.state.budget) - deduct;
    let tra = new Transaction(this.state.bill, this.state.tip. deduct);
    if(bal > 0){
      this.setState({
        budget: bal.toString(),
      });
      this.state.profile.deductBalance(deduct);
      this.state.profile.addTransaction(tra);
      this.storeProfile(this.state.profile);
    };
  };

  onPressTip = (perc) =>{
    let tip = (Number(perc) * Number(this.state.bill)).toFixed(2);
    this.setState({
      tip: tip,
      total: Number(this.state.bill) + Number(tip), 
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Your Budget</Text>
            
            <View style={styles.welcomeContainer}> 
              <Text style={styles.budget}>$</Text>
              <TextInput style={styles.budget} underlineColorAndroid="transparent" keyboardType='numeric' value={this.state.budget}  onChangeText={ (value) => {this.setBudget(value)}}/>
            </View>

            <View>
              <Text style={styles.calculatorTitle}>Enter Total to Pay</Text>
              <TextInput  style={styles.billAmount}  keyboardType='numeric' value={this.state.bill} onChangeText={ (value) => this.setState({bill:value})}/>

              <Text>Add Tip Percentage</Text>
              
              <TouchableOpacity style={styles.button} onPress={() => {this.onPressTip(0.10)}}>
                <Text style={styles.tipText}>10%</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={ () => {this.onPressTip(0.12)}}>
                <Text style={styles.tipText}>12%</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={ () => {this.onPressTip(0.15)}}>
                <Text style={styles.tipText}>15%</Text>
              </TouchableOpacity>

              <Text style={styles.calculatorTitle}>Tip: ${this.state.tip}</Text>
              <Text style={styles.calculatorTitle}>Total: ${this.state.total}</Text>

              <TouchableOpacity style={styles.payButton} onPress={this.onPressPay}>
                <Text style={styles.tipText}>Pay</Text>
              </TouchableOpacity>

            </View>

          </View>
        </ScrollView>
      </View>
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

  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },

});
