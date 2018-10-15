'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    AsyncStorage,
    TextInput,
    Button,
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions
import Async from '../components/Async';
import Profile from '../components/Profile';

class CreateLoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: "Some Text",
            pass: "Enter Password",
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
        let p = new Profile(this.state.user, this.state.pass);
        this.async.storeLogin(p);
        console.log(p);
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Create New Login</Text>
                <Text>Enter Username</Text>
                <View style={styles.loginContainer}>
                    <TextInput underlineColorAndroid="transparent" value={this.state.user} onChangeText={(value) => {this.setUsername(value)}}/>
                </View>
                <Text>Enter Password</Text>
                <View style={styles.loginContainer}>
                    <TextInput underlineColorAndroid="transparent" value={this.state.pass} onChangeText={(value) => {this.setPassword(value)}}/>
                </View>

                <Button onPress={() => {this.createLogin()}} title='Create New Login'/>

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
export default connect(mapStateToProps, mapDispatchToProps)(CreateLoginScreen);

const styles = StyleSheet.create({
    container: {
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
        width:200,
        borderRadius: 4,
        borderWidth: 3,
        borderColor: '#d6d7da',
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