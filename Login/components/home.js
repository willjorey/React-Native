'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    ToastAndroid,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions
import Async from './Async';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: "",
            pass: "",
        };
        this.async = new Async();
    }

    componentDidMount() {
        // this.props.getData(); //call our action
    };

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

    validateLogin = (key) =>{
        let that = this;
        //Check if the login exists: If so change state of loginReducer
        this.async.getLogin(key).then( (value) => {
            if (value !== null){
                that.props.Login();
                that.props.setLogin(that.state.user,that.state.pass);
                that.props.navigation.navigate('Blank');
            }else{
                ToastAndroid.showWithGravityAndOffset(
                    'Incorrect Login',
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM,
                    25,
                    50
                  );
                console.log("Incorrect Login");
            }
        });
    }
    onPressButton = () => {
        this.validateLogin(this.state.user + this.state.pass);

    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight underlayColor='transparent' onPress={()=> {this.props.navigation.navigate('Title')}}>
                    <Image source={require('../assets/logo.png')} style={{height:200, width: 200,}} />
                </TouchableHighlight>
                <View style={styles.loginContainer}>
                    <View style={{padding:10}}>
                        <Text style={styles.text}>Username</Text>
                        <View style={styles.login}>
                            <TextInput style={styles.input} underlineColorAndroid="transparent" value={this.state.user} onChangeText={(value) => {this.setUsername(value)}}/>
                        </View>
                    </View>

                    <View style={{padding:10}}>
                        <Text style={styles.text}>Password</Text>
                        <View style={styles.login}>
                            <TextInput style={styles.input} secureTextEntry={true} underlineColorAndroid="transparent" value={this.state.pass} onChangeText={(value) => {this.setPassword(value)}}/>
                        </View>
                    </View>
                </View>
 
                <View style={styles.buttonContainer}>
                    <View style={{padding: 5,}}>
                        <TouchableOpacity style={styles.loginButton} onPress={() => {this.onPressButton()}}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
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
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    container: {
      marginTop:30,
      alignItems:'center',

    },
    title: {
      fontSize: 50,
      fontWeight: 'bold',
    },
    activeTitle: {
      color: 'red',
    },
    loginContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width:400,
        height:200,
        top:0,
    },
    login:{
        width:300,
        borderColor: '#1E90FF',
        borderBottomWidth:1,
    },
    text:{
        fontSize:15,
        color:'#1E90FF',
      },
    createLoginButton:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E90FF',
        height: 55,
        width:220,
        borderRadius: 5,
    },
    loginButton:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 55,
        width:200,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#1E90FF',
        top:0,
    },
    buttonText: {
        color: "#1E90FF",
        fontSize: 20,
    },
    input:{
        fontSize:20,
    },
  });