'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ToastAndroid,
    FlatList,
    TouchableOpacity,
    TextInput,
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions

class Settings extends Component {
    constructor(props) {
        super(props);
        this.profile = this.props.profile;
        this.state = {
            name: this.profile.getName(),
            email: this.profile.getEmail(),
            pass: this.profile.getPassword(),
        }
    }

    componentDidMount = () => {
        //Fetch organizations from database
    }

    onPressAdmin = () => {
        this.props.profile.setAdmin();
        console.log(this.props.profile.getRole());
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={{padding:10}}>
                        <Text style={styles.textHeader}>Name</Text>
                        <TextInput value={this.state.name} onChange={(value)=>{this.setState({name:value})}}/>
                    </View>

                    <View style={{padding:10}}>
                        <Text style={styles.textHeader}>E-mail</Text>
                        <TextInput  value={this.state.email} onChange={(value)=>{this.setState({email:value})}}/>
                    </View>

                    <View style={{padding:10}}>
                        <Text style={styles.textHeader}>Password</Text>
                        <TextInput onChange={(value)=>{this.setState({pass:value})}}/>
                    </View>
                </View>

                    <TouchableOpacity style={styles.setAdmin} onPress={this.onPressAdmin}>
                        <Text>Set as Admin</Text>
                    </TouchableOpacity>
            </View>

        );
    }

};



// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        profile:state.profileReducer.profile
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/Settings.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Settings);

const styles = StyleSheet.create({
    container: {
      marginTop:30,
    },
    textHeader: {
        color: '#1E90FF',
        fontSize:15,
    },
    textBox:{
        backgroundColor: 'black',
        opacity: 0.7,
        width: 150,
        height: 150,
    },
    text:{
        left:20,
        top:90,
        fontSize:25,
        color: 'white',
      },
    orgButton:{
        alignItems: 'center',
        backgroundColor: '#FF3838',
        padding: 10,
        height: 55,
    },
    orgItem:{
        height: 150,
        width:380,
    },
    setAdmin:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E90FF',
        height: 55,
        width:200,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white',
    },
    logoutText:{
        color: 'white'
    }
  });