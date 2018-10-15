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

class successfulLogin extends Component {
    constructor(props) {
        super(props);
    }

    logout = () => {
        this.props.logout();
        ToastAndroid.showWithGravityAndOffset(
            'Successfully Logged Out',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
            25,
            50
          );
          this.props.navigation.navigate('Login');
    };

    render() {
        return (
            <View>
                <Button title="Logout" onPress={() => {this.logout()}}/>
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
// Just by doing this, we will have access to the actions defined in out actions file (action/successfulLogin.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(successfulLogin);

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