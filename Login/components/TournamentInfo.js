'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ToastAndroid,
    FlatList,
    TouchableOpacity,
    ScrollView,
    Button,
} from 'react-native';

import { Icon } from 'react-native-elements';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions
import Game from './Game';
import {getTournamentGamesBy_Key} from '../db/services';
const g = new Game('Raptors', 'Cavaliers', '10-17-2018');

class TournamentInfo extends Component {
    constructor(props) {
        super(props);
        this.tournament = this.props.tournament;
        this.key = this.tournament.getKey();
        this.todayDate = new Date();
        this.todayStr = this.todayDate.toDateString();

        this.state = {
            games: [],
            dateStr: 'Today',
            date: this.todayDate,
        };
    }
    componentDidMount = () => {
        //Fetch all the Games in that tournament, And grab todays date games
        getTournamentGamesBy_Key(this ,this.key);
    }
    onPressDate = (input) =>{
        let d = this.state.date;

        if (input === 'left'){
            d.setDate( d.getDate() - 1);
        }else{
            d.setDate( d.getDate() + 1);
        }
        if(d.toDateString() === this.todayStr){
            this.setState({
                dateStr: 'Today',
                date:d
            });
        }else{
            this.setState({
                dateStr: d.toDateString(),
                date:d
            });
        }

        this.getGamesByDate(d.toDateString())
    };

    getGamesByDate = (date) => {

        let obj = this.tournament.getGames();
        let temp;
        for (let key in obj){
            if (key === date){
                temp = obj[key];
            }
        };

        let list = [];
        for (let key in temp){
            let game = temp[key];
            let g = new Game(game.hName, game.aName, game.time);
            list.push(g);
        };
        this.setState({
            games: list
        });
        
    }

    render() {
        return (
            <View style={StyleSheet.absoluteFill}>
                <View style={{flexDirection:'row', backgroundColor:'black', height:40, alignItems:'center', justifyContent:'center'}}>
                    <Icon containerStyle={{right:30}} size={50} name='chevron-left'color='white' onPress={() => {this.onPressDate('left')}} />
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                            <Text style={{color:'white'}}>{this.state.dateStr}</Text>
                        </View>
                    <Icon containerStyle={{left:30}} size={50} name='chevron-right'color='white' onPress={() => {this.onPressDate('right')}} />
                </View>
                <ScrollView>
                    <View style={styles.container}>

                        <FlatList
                                data={this.state.games}
                                keyExtractor={(item,index) => index.toString()}
                                renderItem={({item}) =>
                                <View style={{padding: 5, alignItems: 'center'}}>
                                    <TouchableOpacity>
                                        <View style={styles.orgItem}>
                                                <View style={styles.textBox}>
                                                    <Text>{item.getTime()}</Text>
                                                    <View style={styles.gameInfo}>
                                                        <View style= {{padding: 20}}>
                                                            <Text style={styles.text}>{item.getHomeName()}</Text>
                                                        </View>
                                                            <Text style={styles.text}>{item.getHomeScore()}</Text>
                                                            <Text style={{fontSize: 10, fontWeight: 'bold', padding: 10}}> FINAL </Text>
                                                            <Text style={styles.text}>{item.getAwayScore()}</Text>

                                                        <View style= {{padding: 20}}>
                                                            <Text style={styles.text}>{item.getAwayName()}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                }
                            />
                    </View>
                </ScrollView> 
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
// Just by doing this, we will have access to the actions defined in out actions file (action/TournamentInfo.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(TournamentInfo);

const styles = StyleSheet.create({
    container: {
      marginTop:30,
    },
    gameInfo:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    textBox:{
        alignItems: 'center',
        backgroundColor: 'white',
        opacity: 0.7,
        width: '100%',
        height: 100,
    },
    text:{
        fontSize:25,
        color: 'black',
      },
    orgButton:{
        alignItems: 'center',
        backgroundColor: '#FF3838',
        padding: 10,
        height: 55,
    },
    orgItem:{
        height: 100,
        width: 400,
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
    },
  });