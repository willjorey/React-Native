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
} from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      input: "",
      budget: "300",
      bill: "0",
      tip: "0.00",
      test: true,
    }
  }
  static navigationOptions = {
    header: null,
  };

  sum = (a,b) => {
    return a + b;
  }
  

  setBudget = (value) =>{
    this.setState({
      input: value,
    })
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
    if(bal > 0){
      this.setState({
        budget: bal.toString()
      });
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Your Budget</Text>
            
            <View style={styles.welcomeContainer}> 
              <Text style={styles.budget}>$</Text>
              <TextInput style={styles.budget} underlineColorAndroid="transparent" keyboardType='numeric' value={this.state.budget}  onChangeText={ (value) => this.setState({budget:value})}/>
            </View>

            <View>
              <Text style={styles.calculatorTitle}>Enter Total to Pay</Text>
              <TextInput  style={styles.billAmount}  keyboardType='numeric' value={this.state.bill} onChangeText={ (value) => this.setState({bill:value})}/>

              <Text>Add Tip Percentage</Text>
              
              <TouchableOpacity style={styles.button} onPress={ () => this.setState({tip: (this.state.bill * 0.10).toFixed(2)})}>
                <Text style={styles.tipText}>10%</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={ () => this.setState({tip: (this.state.bill * 0.12).toFixed(2)})}>
                <Text style={styles.tipText}>12%</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={ () => this.setState({tip: (this.state.bill * 0.15).toFixed(2)})}>
                <Text style={styles.tipText}>15%</Text>
              </TouchableOpacity>

              <Text style={styles.calculatorTitle}>Tip: ${this.state.tip}</Text>

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
