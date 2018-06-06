import React from 'react';
import { StyleSheet, View, Image, ScrollView} from 'react-native';
import { Header, Text, Card } from 'react-native-elements';
import BoxScore from './BoxScore'

export default class GameScreen extends React.Component {
  constructor(props){
    super(props);
    const { navigation } = this.props;
    this.game = navigation.getParam('game');
  };
  static navigationOptions = {
    title: 'Game'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title} h1>Box Score</Text>
        <View style={styles.score}>
            <Image
                style={styles.logo}
                resizeMode='cover'
                source={ {uri: this.game.homeLogo}}
            />
            <Text style={styles.text}>{this.game.homeScore} - {this.game.awayScore} </Text>
            <Image
            style={styles.logo}
            resizeMode='cover'
            source={ {uri: this.game.awayLogo}}
            />
        </View>
        <BoxScore game={this.game}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  score:{
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center',
  },
  text:{
    fontSize:30,
    padding:30,
  },
  logo:{
      height:100,
      width:100,
  },
  title:{
      justifyContent:'center',
      textAlign:'center',
  },
  headerText:{
    margin:6,
    fontSize:15
  }
});