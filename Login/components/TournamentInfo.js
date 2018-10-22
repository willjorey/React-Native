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

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions
import Game from './Game';

const g = new Game('Raptors', 'Cavaliers', '10-17-2018');

class TournamentInfo extends Component {
    constructor(props) {
        super(props);
        this.tournament = this.props.tournament;
        this.games = this.tournament.getGames()
        // this.tournament.addGame(g);
        this.todayDate = new Date();
        this.todayStr = this.todayDate.toDateString();

        this.state = {
            games: [],
            msg: 'No Tournaments Available',
            dateStr: 'Today',
            date: this.todayDate,
        };
    }
    componentDidMount = () => {
        // this.tournament.parseGames();
        this.getGamesByDate(this.todayDate.toDateString())
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
        let temp = [];
        let obj;
        for (let key in this.games){
            if( key === date){
                obj = this.games[key]
                date = key;
                break;
            }
        }

        for (let key in obj){
            let val = obj[key];
            let g = new Game(val.hName, val.aName, date);
            temp.push(g)
        }
        this.setState({
            games: temp,
        })
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={{backgroundColor:'black', height:40, alignItems:'center', justifyContent:'center'}}>
                        <View style={{flexDirection:'row'}}>
                            <Button title="left" onPress={() => {this.onPressDate('left')}}/>
                            <Text style={{color:'white'}}>{this.state.dateStr}</Text>
                            <Button title="right" onPress={() => {this.onPressDate('right')}}/>
                        </View>
                    </View>
                    <FlatList
                            data={this.state.games}
                            keyExtractor={(item,index) => index.toString()}
                            renderItem={({item}) =>
                            <View style={{padding: 5, alignItems: 'center'}}>
                                <TouchableOpacity>
                                    <View style={styles.orgItem}>
                                            <View style={styles.textBox}>
                                                <Text>{item.getDate()}</Text>
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
    }
  });