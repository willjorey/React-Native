'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text,
    ToastAndroid,
    FlatList,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import Organization from '../components/Organization';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions

class successfulLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orgs: [],
        };
    }

    componentDidMount = () => {
        let test = []
        let z = new Organization("MUMBA");
        let x = new Organization("NBA");
        test.push(z);
        test.push(x);
        test.push(z);
        test.push(x);
        this.setState({
            orgs: test,
        })
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
          this.props.navigation.replace('Title');
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View>

                        <FlatList
                            data={this.state.orgs}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item}) =>
                            <View style={{padding: 5}}> 
                                <TouchableOpacity style={{backgroundColor: item.color, opacity:0.8, borderRadius: 50, alignItems: 'center'}}>
                                    <View style={styles.orgItem}>
                                        <Image source={require('../assets/logo.png')} style={{height:50, width: 50, right:70, top: 10}} />
                                        <Text style={styles.text}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            }
                        />
                        
                    </View>
                    <TouchableOpacity style={styles.logoutButton} onPress={() => {this.logout()}}>
                            <Text style={styles.logoutText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView> 
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
    text:{
        fontSize:50,
        color: 'black',
      },
    orgButton:{
        alignItems: 'center',
        backgroundColor: '#FF3838',
        padding: 10,
        height: 55,
    },
    orgItem:{
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',
    },
    logoutButton:{
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