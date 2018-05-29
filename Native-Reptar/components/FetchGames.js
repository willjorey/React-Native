import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import { Card, List, ListItem, Button } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';


export default class FetchGames extends React.Component{
    constructor(props){
        super(props);
        this.tid = this.props.tid;
        this.state ={
            games: []
        };
    };

    getGames = () =>{
        fetch("https://basketball-9e231.firebaseio.com/game.json")
        .then(res => res.json())
        .then(parsedres => {
            const t_array = [];
            for (const key in parsedres){
                if( parsedres[key].tid === this.tid){
                    t_array.push({
                        key:key,
                        awayName: parsedres[key].awayID,
                        homeName: parsedres[key].homeID,
                        awayScore: parsedres[key].awayScore,
                        homeScore: parsedres[key].homeScore,
                        tid: parsedres[key].tid,
                        time: parsedres[key].time,
                    });
                }
            };
            this.setState({
                games: t_array
            });
        });
    }
    componentDidMount(){
        this.getGames();
    };
    
    render(){
        return (
            <Card>
                {this.state.games.map( (game, i) =>{
                    return (
                        <View key={i}>
                            <Text style={styles.game}>{game.homeName} vs {game.awayName}</Text>
                        </View>
                    )
                } )}
            </Card>
        );
    }

};

const styles = StyleSheet.create({
    game: {
        margin:5,
        textAlign: 'center',
        fontSize: 20,
    },
  });


