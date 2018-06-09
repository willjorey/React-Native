import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import Tournament from './Tournament_obj'


export default class FetchTournaments extends React.Component{
    constructor(props){
        super(props);
        this.navigation = this.props.navigation;
        this.state ={
            tournaments: []
        };
    };

    getTournaments = () =>{
        fetch("https://basketball-9e231.firebaseio.com/tournament.json")
        .then(res => res.json())
        .then(parsedres => {
            const t_array = [];
            for (const key in parsedres){
                let tournament = new Tournament(key,parsedres[key].age, parsedres[key].date, parsedres[key].gender, parsedres[key].name);
                t_array.push(tournament);
            };
            this.setState({
                tournaments: t_array
            });
        });
    }
    componentDidMount(){
        this.getTournaments();
    };
    
    render(){
        return (
            <View>
                <List>
                    {this.state.tournaments.map( (item,i) =>
                        <ListItem
                        key={item.getKey()}
                        title={item.getName()}
                        onPress={() => this.navigation.navigate('Tournament', {id: item.getKey(), item: item} )}
                        />
                    )}
                </List>
            </View>
        );
    }

};

const styles = StyleSheet.create({
    item: {
        margin:5,
    },
    headerText:{
        margin:6,
        fontSize:15
      }
  });


