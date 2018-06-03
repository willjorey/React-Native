import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Card, List, ListItem, Button } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';


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
                    t_array.push({
                        key:key,
                        awayName: parsedres[key].awayID,
                        homeName: parsedres[key].homeID,
                        awayScore: parsedres[key].awayScore,
                        homeScore: parsedres[key].homeScore,
                        awayLogo: parsedres[key].awayURL,
                        homeLogo: parsedres[key].homeURL,
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
            <Card containerStyle={{padding:0}}>
                {this.state.games.map( (game, i) =>{
                    return (
                        <View key={i} style={styles.game}>
                            <ListItem
                                title={ game.homeName + " vs " + game.awayName }
                                subtitle= { game.homeScore + " - " + game.awayScore}
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


