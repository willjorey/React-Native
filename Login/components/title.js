'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    ToastAndroid,
    TouchableOpacity,
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions
import Async from './Async';

class Title extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.getData(); //call our action
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{padding: 5,}}>
                    <TouchableOpacity style={styles.signupButton}>
                        <Text>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                <View style={{padding: 5,}}>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>

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
// Just by doing this, we will have access to the actions defined in out actions file (action/Title.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Title);

const styles = StyleSheet.create({
    container: {
      marginTop:30,
      alignItems:'center',
    },
    signupButton:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E90FF',
        height: 55,
        width:100,
        borderRadius: 5,

    },
    loginButton:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E90FF',
        height: 55,
        width:100,
        borderRadius: 5,
    }

  });