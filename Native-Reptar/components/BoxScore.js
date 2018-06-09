import React from 'react';
import { StyleSheet, View, Image, ScrollView} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { List, ListItem, Button, Text } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import PlayerStat from './PlayerStat_obj';


export default class BoxScore extends React.Component{
    constructor(props){
        super(props);
        this.game = this.props.game;
        this.homeID = this.game['homeTeamID'];
        this.awayID = this.game['awayTeamID'];
        this.homeName = this.game['homeName'];
        this.awayName = this.game['awayName'];

        var width = 50;
        this.state ={
            title: this.homeName,
            header: ['Name','POS','MIN', 'PTS', 'REB', 'AST', 'STL', 'BLK', 'FGM','FGA', 'FG%', '3PM', '3PA', '3P%','FTM', 'FTA', 'FT%', 'OFF', 'DEF', 'TOV', 'PF','+/-'],
            widthArray: [70 ,width, width, width,width,width,width,width,width,width, width, width,width,width,width,width,width,width, width, width,width],
            home_stats: [],
            away_stats: [],
            toggle_table: true,
        };
    };

    getGameStats = () =>{
        fetch("https://basketball-9e231.firebaseio.com/game_stats.json")
        .then(res => res.json())
        .then(parsedres => {
            const home_stats = [];
            const away_stats = [];
            for (const key in parsedres){

                let team_id = parsedres[key].team_ID;
                let playerStat = new PlayerStat(key, parsedres[key].NAME,parsedres[key].POS,parsedres[key].MIN, parsedres[key].PTS, parsedres[key].REB, parsedres[key].AST,parsedres[key].STL, parsedres[key].BLK, parsedres[key].FGM,parsedres[key].FGA, parsedres[key].FG_PERC, parsedres[key].THREE_PM, parsedres[key].THREE_PA, parsedres[key].THREE_PERC,parsedres[key].FTM, parsedres[key].FTA, parsedres[key].FT_PERC, parsedres[key].OFF, parsedres[key].DEF,parsedres[key].TOV, parsedres[key].PF, parsedres[key].PLUS_MINUS, team_id);
                
                if( team_id === this.homeID){
                    home_stats.push(playerStat);
                }else{
                    away_stats.push(playerStat);
                }
            };

            this.setState({
                home_stats: home_stats,
                away_stats: away_stats,
            });
        });
    }

    toggle_home = () => {
        this.setState({
            toggle_table: true,
        })
    }
    toggle_away = () => {
        this.setState({
            toggle_table: false,
        })
    }

    componentDidMount(){
        this.getGameStats();
    };
    
    render(){
        var stats;
        var name;
        if(this.state.toggle_table){
            stats = this.state.home_stats;
            name = this.homeName
        }else{
            stats = this.state.away_stats;
            name = this.awayName
        }
        return (
            <View style={styles.container}>
                <Text h1 style={styles.Team_Name}>{name}</Text>
                <View style={styles.button_container}>
                    <Button backgroundColor="black" color="white" title='Home' onPress={this.toggle_home}/>
                    <Button backgroundColor="black" color="white" title='Away' onPress={this.toggle_away}/>    
                </View>
                
                <ScrollView horizontal={true}>
                    <View>
                        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                            <Row data={this.state.header} textStyle={styles.headerText} widthArr={this.state.widthArray}/>
                        </Table>
                        <ScrollView >
                            <Table borderStyle={{borderColor: '#c8e1ff'}}>                
                                {
                                stats.map( (row,index) => (
                                    <Row
                                    key={index}
                                    data={Object.values(stats[index]).slice(1,23)}
                                    widthArr={this.state.widthArray}
                                    textStyle={styles.dataText}
                                    /> ))
                                }
                            </Table>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        );
    }

};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30 },
    item: {
        margin:5,
    },
    headerText:{
        margin:3,
        fontSize:15
    },
    dataText:{
        fontSize:15,
        textAlign:'center'
    },
    button_container: {
        flexWrap: 'wrap',
        alignItems: 'center', 
        flexDirection:'row',
        padding: 10,
        justifyContent: 'center',
    },
    Team_Name: {
        textAlign: 'center'
    },
  });


