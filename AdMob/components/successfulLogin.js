'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';

import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded
  } from 'expo';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions
import TitleScreen from '../screens/TitleScreen';

AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); // Test ID, Replace with your-admob-unit-id
AdMobInterstitial.setTestDeviceID('EMULATOR');

AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917'); // Test ID, Replace with your-admob-unit-id
AdMobRewarded.setTestDeviceID('EMULATOR');

class successfulLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    
    componentDidMount = () =>{
        AdMobInterstitial.addEventListener('interstitialDidClose', () => {
            console.log('HERE');
            this.props.navigate.replace('Title')      
        });
    }

    showInterstitial = async () => {
        if(this.state.count === 1){
            await AdMobInterstitial.requestAdAsync();
            await AdMobInterstitial.showAdAsync();
            this.setState({
                count: this.state.count + 1
            })
        }else{
            this.setState({
                count: this.state.count + 1
            })
        }

    };

    showAdReward = async () => {
        if(this.state.count === 0){
            await AdMobRewarded.requestAdAsync();
            await AdMobRewarded.showAdAsync();
            this.setState({
                count: this.state.count + 1
            })

        }else{
            this.setState({
                count: this.state.count + 1
            })
        }

    };

    render() {
        return (
            <View style={styles.container}>
                <AdMobBanner
                    bannerSize="fullBanner"
                    adUnitID=  "ca-app-pub-3940256099942544/6300978111"  // "ca-app-pub-6374662485645857~6957053841" Test ID, Replace with your-admob-unit-id
                    testDeviceID="EMULATOR"
                    onDidFailToReceiveAdWithError={this.bannerError} />
                <Text>The count is: {this.state.count}</Text>
                <Button title="Show Interstitial" onPress={this.showInterstitial}/>
                <Button title="Show Reward" onPress={this.showAdReward}/>

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