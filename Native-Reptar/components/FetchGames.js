import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Card, List, ListItem, Button } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import Game from './Game_obj'

export default class FetchGames extends React.Component{
    constructor(props){
        super(props);
        this.tid = this.props.tid;
        this.navigation = this.props.navigation;
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
                    let game = new Game(key,parsedres[key].awayID, parsedres[key].homeID, parsedres[key].awayScore, parsedres[key].homeScore, parsedres[key].awayURL, parsedres[key].homeURL, parsedres[key].tid, parsedres[key].time, parsedres[key].homeTeamID, parsedres[key].awayTeamID)
                    t_array.push(game);
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
            <Card containerStyle={{padding:0}}>
                {this.state.games.map( (game, i) =>{
                    return (
                        <View key={i} style={styles.game}>
                            <ListItem
                                title={ game.getHomeName() + " vs " + game.getAwayName() }
                                subtitle= { game.getHomeScore() + " - " + game.getAwayScore()}
                                onPress={() => this.navigation.navigate('Game', {game: game})}
                            />
                        </View>
                    )
                } )}
            </Card>
        );
    }

};

const styles = StyleSheet.create({
    game: {

    }
  });


