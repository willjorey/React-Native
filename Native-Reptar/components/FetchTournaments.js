import React from 'react';
import { StyleSheet, Text, View , FlatList} from 'react-native';
import { List, ListItem } from 'react-native-elements';

export default class FetchTournaments extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            tournaments: null
        };
    };

    getTournaments = () =>{
        fetch("https://basketball-9e231.firebaseio.com/tournament.json")
        .then(res => res.json())
        .then(parsedres => {
            const t_array = [];
            for (const key in parsedres){
                t_array.push({
                    age: parsedres[key].age,
                    date: parsedres[key].date,
                    gender: parsedres[key].gender,
                    name: parsedres[key].name
                });
            };
            this.setState({
                tournaments: t_array
            });
            console.log(this.state.tournaments);
        });
    }
    componentDidMount(){
        this.getTournaments();
    };
    
    render(){
        return (
            <View>
                {/* <List>
                    <FlatList data={this.state.tournaments}
                    renderItem={ ({item}) => (
                        <ListItem
                        title={item.name}
                        />
                    )}
                    />
                </List>     */}
            </View>
        );
    }

};


