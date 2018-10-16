'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    ToastAndroid,
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions
import Async from '../components/Async';
import Profile from '../components/Profile';

class newLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: "",
            pass: "",
            re_pass: "",
        };
        this.async = new Async();
    }
    setUsername = (value) =>{
        this.setState({
            user: value,
        });
    };
    setPassword = (value) =>{
        this.setState({
            pass: value,
        });

    };
    createLogin = () => {
        if(this.state.pass === this.state.re_pass){
            let p = new Profile(this.state.user, this.state.pass);
            this.async.storeLogin(p);
            console.log(p);
            ToastAndroid.showWithGravityAndOffset(
                'Login Created',
                ToastAndroid.LONG,
                ToastAndroid.CENTER,
                25,
                50
              );
              this.props.navigation.navigate('Login'); 
        }else{
            ToastAndroid.showWithGravityAndOffset(
                'Passwords Do not Match',
                ToastAndroid.LONG,
                ToastAndroid.TOP,
                25,
                50
              );
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{padding:10}}>
                    <Text style={{color: '#1E90FF'}}>Enter Username</Text>
                    <View style={styles.loginContainer}>
                        <TextInput underlineColorAndroid="transparent" value={this.state.user} onChangeText={(value) => {this.setUsername(value)}}/>
                    </View>
                </View>

                <View style={{padding:10}}>
                    <Text style={{color: '#1E90FF'}}> Password</Text>
                    <View style={styles.loginContainer}>
                        <TextInput secureTextEntry={true} underlineColorAndroid="transparent" value={this.state.pass} onChangeText={(value) => {this.setPassword(value)}}/>
                    </View>
                </View>

                <View style={{padding:10}}>
                    <Text style={{color: '#1E90FF'}}> Re-Type Password</Text>
                    <View style={styles.loginContainer}>
                        <TextInput secureTextEntry={true} underlineColorAndroid="transparent" value={this.state.re_pass} onChangeText={(value) => {this.setState({re_pass: value})}}/>
                    </View>
                </View>


                <Button onPress={() => {this.createLogin()}} title='Create'/>

            </View>
        );
    }

};



// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        username: state.loginReducer.username,
        password: state.loginReducer.password,
        login: state.loginReducer.login,
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(newLogin);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop:30,
    },
    title: {
      fontSize: 50,
      fontWeight: 'bold',
    },
    activeTitle: {
      color: 'red',
    },
    loginContainer:{
        width:300,
        borderBottomWidth: 1,
        borderColor: '#1E90FF',
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