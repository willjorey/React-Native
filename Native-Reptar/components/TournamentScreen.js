import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header} from 'react-native-elements';
import FetchGames from './FetchGames';

export default class TournamentScreen extends React.Component {
  constructor(props){
    super(props);
    const { navigation } = this.props;
    this.tournament = navigation.getParam('item');
    console.log(navigation.getParam('id'));
    console.log(navigation.getParam('item'));
  }
  static navigationOptions = {
    title: 'Tournament'
  }
  render() {
    return (
      <View style={styles.container}>
        <Header centerComponent={ {text: this.tournament.name + ' Tournament', style: { color: '#fff', fontSize:25 } }}/>
        <View>
          <Text style={styles.tournament_info}>Date: {this.tournament.date} </Text>
          <Text style={styles.tournament_info}>Age: {this.tournament.age} </Text>
          <Text style={styles.tournament_info}>Gender: {this.tournament.gender} </Text>
        </View>

        <Text style={styles.games}>All Games</Text>
        <FetchGames tid={this.tournament.key}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  tournament_info:{
    fontSize: 20
  },
  games:{
    textAlign:'center',
    fontSize:30,
  }
});