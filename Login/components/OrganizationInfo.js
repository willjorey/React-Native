'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ImageBackground,
    Image,
    ScrollView,
    ToastAndroid,
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions'; //Import your actions

class OrganizationInfo extends Component {
    constructor(props) {
        super(props);
        this.organization = this.props.organization;
        this.key = this.organization.name;
        this.state = {
            tournaments: this.organization.getTournaments(),
            subscribed: false,
            subText: "Subscribe",
        };
        this.profile = this.props.profile;
        
    }
    componentDidMount = () =>{
        let boo = this.profile.checkSubscription(this.key);
        if (boo){
            this.setState({
                subscribed: true,
                subText: 'Subscribed'
            });
        };
    }
    
    subscribe = () => {
        if (this.state.subscribed){
            ToastAndroid.showWithGravityAndOffset('Already Subscribed',ToastAndroid.SHORT,ToastAndroid.BOTTOM,25,50);
        }else{
            this.props.profile.addSubscription(this.organization);
            this.props.setProfile(this.profile);
            ToastAndroid.showWithGravityAndOffset('You are now Subscribed',ToastAndroid.SHORT,ToastAndroid.BOTTOM,25,50);
            this.setState({
                subscribed:true,
                subText: 'Subscribed'
            })
        }
    }

    onOrgPress = (tourn) => {
        this.props.navigation.navigate('Tournament', {tournament: tourn})
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.bannerBox}>
                        <ImageBackground source={{uri: this.organization.getBanner()}} style={styles.bannerImage}>
                            <TouchableOpacity style={styles.subButton} onPress={() => {this.subscribe()}}>
                                <Text style={styles.subText}>{this.state.subText}</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>

                    <View>
                        <FlatList
                            data={this.state.tournaments}
                            keyExtractor={(item,index) => index.toString()}
                            renderItem={({item}) =>
                            <View style={{padding: 5, alignItems: 'center'}}> 
                                <TouchableOpacity onPress={() => {this.onOrgPress(item)}}>
                                    <View style={styles.orgItem}>
                                        <ImageBackground source={require('../assets/logo.png')} style={{height:'100%', width: '100%',}}>
                                            <View style={styles.textBox}>
                                                <Text style={styles.text}>{item.getName()}</Text>
                                            </View>
                                        </ImageBackground>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            }
                        />
                    </View>
                    
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
      alignItems: 'center'
    },
    bannerBox:{
        alignItems: 'center'
    },
    bannerImage:{
        width: 430,
        height: 200,
        bottom: 30,
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
        backgroundColor: 'transparent',
        height: 55,
        width:100,
        borderWidth: 2,
        borderColor: 'white',
        left:320,
    },
    subText:{
        color: 'white'
    }
  });