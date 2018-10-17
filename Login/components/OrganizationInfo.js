'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions'; //Import your actions

class OrganizationInfo extends Component {
    constructor(props) {
        super(props);
        this.organization = this.props.organization
        this.state = {
            leagues: this.organization.getLeagues(),
        };

    }
    subscribe = (sub) => {
        let p = this.props.profile;
        p.addSubscription(sub);
        console.log(p);
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.subButton} onPress={() => {this.subscribe(this.organization.name)}}>
                            <Text style={styles.subText}>Subscribe</Text>
                    </TouchableOpacity>
                    <FlatList
                        data={this.state.leagues}
                        keyExtractor={(item,index) => index.toString()}
                        renderItem={({item}) =>
                        <View style={{padding: 5, alignItems: 'center'}}> 
                            <TouchableOpacity>
                                <View style={styles.orgItem}>
                                    <ImageBackground source={require('../assets/logo.png')} style={{height:'100%', width: '100%',}}>
                                        <View style={styles.textBox}>
                                            <Text style={styles.text}>{item}</Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </TouchableOpacity>
                        </View>
                        }
                    />
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
        profile: state.profileReducer.profile,
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/OrganizationInfo.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(OrganizationInfo);

const styles = StyleSheet.create({
    container: {
      marginTop:30,
    },
    textBox:{
        backgroundColor: 'black',
        opacity: 0.7,
        width: 150,
        height: 150,
    },
    text:{
        left:20,
        top:60,
        fontSize:20,
        color: 'white',
    },
    orgButton:{
        alignItems: 'center',
        backgroundColor: '#FF3838',
        padding: 10,
        height: 55,
    },
    orgItem:{

        height: 100,
        width:380,
    },
    subButton:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E90FF',
        height: 55,
        width:200,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white',
    },
    subText:{
        color: 'white'
    }
  });