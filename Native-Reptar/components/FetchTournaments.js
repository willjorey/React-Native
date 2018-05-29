import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';


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
                t_array.push({
                    key:key,
                    age: parsedres[key].age,
                    date: parsedres[key].date,
                    gender: parsedres[key].gender,
                    name: parsedres[key].name
                });
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
                        key={item.key}
                        title={item.name}
                        onPress={() => this.navigation.navigate('Tournament', {id: item.key, item: item} )}
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
  });


